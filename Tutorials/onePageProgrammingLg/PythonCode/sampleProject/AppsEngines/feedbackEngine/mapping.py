########################################################################################
## Author : Dipankar Dutta
## Title :
## Description:
## Function: Just a replacement of urls.py to extend to plag and play with this apps.
##          - You donot need to worries how it works
##          - you just need to add the following urls and TEMPLATE_DIR.
##          - Great na !
#########################################################################################

from django.conf.urls import patterns, include, url

import os
here = lambda x: os.path.join(os.path.abspath(os.path.dirname(__file__)), x)



from . import views,ajaxHandeler
urlpatterns = patterns('',
    # Read Operation
    (r'^api/feedback/$',ajaxHandeler.ajax_feedback),
    (r'^feedback/$',views.feedback_home),
    (r'^$',views.feedback_home),
    #(r'^$', TemplateView.as_view(template_name=feedback_home.html'), name="home"),
)

TEMPLATE_DIRS =('',
                here('templates'),
                )
