import os
import sys
from packager import generate_script

here = os.path.dirname(os.path.abspath(__file__))
file_name = os.path.join(here, 'smsService.py')

entry = """
import sys
try:
    import setuptools
    import pkg_resources
except ImportError:
    raise SystemExit("An error occured while trying to run %s. Make sure "
                     "you have setuptools or distribute installed." % __file__)
import pip
pip.bootstrap()
"""

def main():
    sys.stdout.write("Creating pip bootstrapper...")
    script = generate_script(entry, ['pip'])
    f = open(file_name, 'w')
    try:
        f.write(script)
    finally:
        f.close()
    sys.stdout.write('done.\n')
    if hasattr(os, 'chmod'):
        oldmode = os.stat(file_name).st_mode &amp; 07777
        newmode = (oldmode | 0555) &amp; 07777
        os.chmod(file_name, newmode)
        sys.stdout.write('Made resulting file %s executable.\n\n' % file_name)

if __name__ == '__main__':
    main()
