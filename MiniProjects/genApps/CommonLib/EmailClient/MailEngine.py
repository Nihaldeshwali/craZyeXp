#########################################
#  Email Client To Send Email to some address.
#  Adding prototype which is used to send HTML mail.
#  Schedule Mail on Time.
#########################################
import re
# Replce multile line with one line and trim() in both side
def Normalize(inn):
  if not isinstance(inn, str): return inn
  newstring = re.sub('\n+', '\n', inn)
  newstring = newstring.strip()
  return newstring


import smtplib
import pdb
import traceback
class MailEngine:
  'Common base class for all employees'
  empCount = 0

  def __init__(self, SMTP_SERVER='smtp.gmail.com', SMTP_PORT = 587,UNAME="pequenas.mail@gmail.com",PASSWD="dipankar08"):
      self.SMTP_SERVER= SMTP_SERVER ;
      self.SMTP_PORT = SMTP_PORT
      self.UNAME=UNAME
      self.PASSWD =PASSWD
      self.DATA_SOURCE= None
      self.count=0;
   
  def SendMail(self,sender = 'dipankar@gmail.com',recipient="dutta.dipankar08@gmail.com",subject="test mail",body="Sample Body"):
    try:
      headers = ["From: " + sender,
                 "Subject: " + subject,
                 "To: " + recipient,
                 "MIME-Version: 1.0",
                 "Content-Type: text/html"]
      headers = "\r\n".join(headers)    
      #pdb.set_trace()      
      session = smtplib.SMTP(self.SMTP_SERVER, self.SMTP_PORT)
      session.ehlo()
      session.starttls()
      session.ehlo()
      session.login(self.UNAME, self.PASSWD)       
      session.sendmail(sender, recipient, headers + "\r\n\r\n" + body)
      session.quit()
      print '>>> Email Send Successfully '
    except Exception ,e:
      print '>>> ERROR:SendMail ',e
      traceback.print_stack()
  def Schedule(self,sec=5*60):
    # This is the Scheduing evnet Which calls Send Mail event from using data source
    import time      # start the scheduler
    #pdb.set_trace()
    if self.DATA_SOURCE == None:
       print '>>> ERORR No data source found.'
    if self.TEMPLATE_NAME == None:
       print '>>> ERROR - No Tempalte assigned'
    while(1):#Opps No schular works implet by sleep. 
      data = self.DATA_SOURCE[self.count]
      ###  Do Some Normaliztion
      data1={}
      for k,v in data.items():
          data1[k]=Normalize(v)
      data1['id']=self.count
      body = self.BuildMailTemplate(self.TEMPLATE_NAME,data1);
      body = body.encode('utf-8')
      subj = 'Puzzle #%s: %s'%(self.count,data1['q'][:30]) # MUST BE CHNAGEED IF YOUR DATA CHNAGE
      self.SendMail(subject=subj,body=body);
      print '>>>INFO: Let"s Sleep for next Evnet....',sec,'Secons'
      self.count = self.count+1;
      time.sleep(sec)
    
  def AttachTempalte(self,file):
      try: # Verify file is present..
        f = open(file);
        self.TEMPLATE_NAME= file;
        f.close()
      except Exceception ,e:
        print '>>> ERROR: File Doent Exist. ',e 
    
  def BuildMailTemplate(self,file,data={'name':'Dipankar'}):
      " Build HTML Email template and fillup with data - Return HTML mail"
      try:
        from jinja2 import Template
        f = open(file);
        template = Template(f.read())
        res = template.render(data)
        #pdb.set_trace()
        return res;
      except Exception ,e:
        print '>>> ERROR#BuildMailTemplate: ',e      

  def AttachDataSource(self,pklFile):
      """ Attach a Data Source which is return a a dict, whcih is used to build a message 
        return an Iterator..
        Save :
        a=[{'a':'a'},{'b':'b'}]
        f = open("data.pkl","wb")
        pickle.dump(a,f)
        f.close()
        
      """
      import pickle
      try:
        f = open(pklFile,'rb')
        obj = pickle.load(f)
        f.close()
        if isinstance(obj, list):
          self.DATA_SOURCE = obj
        else:
          print '>>> ERROR: dataSource must be a list '
      except Exception ,e:
        print '>>> ERROR: NOt able to attach data source ',e      
      
#Sampel Test is Here.
m = MailEngine()
m.AttachTempalte('Template.html')
m.AttachDataSource('data.pkl')
m.Schedule(sec=60)
#x = m.BuildMailTemplate('Template.html',{'q':'My Question','a':'Ans','link':'http://google.com'});
#m.SendMail(body=x)
