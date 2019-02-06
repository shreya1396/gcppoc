#from __builtin__ import type

__author__ = 'jakir_shaikh'
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import sendgrid
from .models import Ideas
from rest_framework.response import Response
from sendgrid.helpers.mail import *
from rest_framework import status
from .serializer import IdeaSerializer,UserSerializer,IdeaNeedsSerializer,BoxOwnerSerializer
from .models import Users,IdeaNeeds,BoxOwner
from .static import Constant as const
import json
def SendNotification(idea_id,needs_id=None,type=None,multi_recipient=None,notifier_name=None):
    try:
        idea = Ideas.objects.get(pk=idea_id)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = IdeaSerializer(idea)
    sg = sendgrid.SendGridAPIClient(apikey='SG.iZ4fYEOORNqc31IQRaoOuA.19EEDpqPltZP-Vl9qAROfOhNEAuZbPlsEV_pxtWSPjo')
    from_email = Email("noreply@cims.com")
    personalization = Personalization()
    if type == const.MAIL_TYPE_IDEA_SUBMIT:
        subject = "New Project Idea Submission"
        email_body = generateIdeaSubmissionMailBody(serializer.data)
        if needs_id == 0:
            personalization.add_to(Email("jakir_shaikh@persistent.co.in"))
        else:
            recipients_ids= getInnonvationManagersEmail(needs_id)
        for email_id in recipients_ids:
            personalization.add_to(Email(email_id))
    elif type == const.MAIL_TYPE_IDEA_REVIEW:
        subject = "Idea Reviewed by Reviewer"
        email_body =  generateIdeaReviewMailBody(serializer.data)
        if needs_id == 0:
            personalization.add_to(Email("jakir_shaikh@persistent.co.in"))
        else:
            recipients_ids= getInnonvationManagersEmail(needs_id)
        for email_id in recipients_ids:
            personalization.add_to(Email(email_id))

    elif type == const.MAIL_TYPE_ADD_REVIEWER:
        subject = "Idea Review Request"
        email_body =  generateReviewRequestMailBody(serializer.data)
        for email_id in multi_recipient:
            personalization.add_to(Email(email_id))

    elif type == const.MAIL_TYPE_NOTIFY_EXPERT:
        subject = "Notification of project idea by "+notifier_name
        email_body = generateNotifyExpertMailBody(serializer.data)
        for email_id in multi_recipient:
            personalization.add_to(Email(email_id))

    content = Content("text/html",email_body)
    print("till here")
    try:
        mail = Mail(from_email=from_email,subject=subject,content=content)
        mail.add_personalization(personalization)
        response = sg.client.mail.send.post(request_body=mail.get())
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except:
        pass
    return serializer

def generateIdeaSubmissionMailBody(data):
    mailContent = "<html><p>New Idea Submission By :" \
                  ""+data['idea_owner']+"</p>" \
                   "<p>Idea : "+data['idea_title']+"</p>" \
                    "<p>Idea_description :"+data['idea_description' ]+"<br><p> Submission_date : "+data['submission_date']+"<p> " \
                    "Review Status : PENDING </p>" \
                    "<p>IdeaBox : "+data['category']+"</html>"

    return mailContent

def generateIdeaReviewMailBody(data):
    mailContent = "<html><p>Idea Reviewed By :" \
                  ""+data['reviewer_name']+"</p>" \
                   "Idea Owner : "+data['idea_owner']+"</p>" \
                    "Review Status : "+data['review_status']+"</p>" \
                    "Review Comments : "+data['review_comment']+"</p>" \
                   "<p>Idea : "+data['idea_title']+"</p>" \
                    "<p>Idea_description :"+data['idea_description' ]+"<br><p> Submission_date : "+data['submission_date']+"<p> " \
                     "<p>IdeaBox : "+data['category']+"</html>"
    return mailContent


def generateReviewRequestMailBody(data):
    mailContent = "<html><p>Hi, </p>" \
                   "You have been assigned as Reviewer," \
                   "Kindly take a time to review following idea on collaborative idea management system" \
                   "<p>Idea Owner : "+data['idea_owner']+"</p>" \
                   "<p>Idea : "+data['idea_title']+"</p>" \
                    "<p>Idea_description :"+data['idea_description' ]+"<br><p> Submission_date : "+data['submission_date']+"<p> " \
                     "<p>IdeaBox : "+data['category']+"</html>"
    return mailContent

def generateNotifyExpertMailBody(data):
    mailContent = "<html><p>Hi, </p>" \
                   "Take a look at idea submitted on collaborative idea management system, which might be of your interest" \
                   "<p>Idea Owner : "+data['idea_owner']+"</p>" \
                   "<p>Idea : "+data['idea_title']+"</p>" \
                    "<p>Idea_description :"+data['idea_description' ]+"<br><p> Submission_date : "+data['submission_date']+"<p> " \
                     "<p>IdeaBox : "+data['category']+"</html>"
    return mailContent


def getInnonvationManagersEmail(id):
    idea_need = IdeaNeeds.objects.get(pk=id)
    need_serializer = IdeaNeedsSerializer(idea_need)
    print("ideaneed",need_serializer.data)
    idea_box = need_serializer.data['idea_box']
    print("idea_box",idea_box)
    box_owners =BoxOwner.objects.filter(idea_box=idea_box)
    print("boxowner",box_owners)
    owners_serializer = BoxOwnerSerializer(box_owners,many=True)
    print("owners_serializer",owners_serializer.data)
    mails = []
    for owner in owners_serializer.data:
        user = Users.objects.get(name=owner['innovation_manager_name'])
        user_serializer = UserSerializer(user)
        print("user_serializer",user_serializer.data)
        mails.append(user_serializer.data['email'])
    print("emailid",mails)
    return mails




