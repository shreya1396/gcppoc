from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view ,permission_classes
from rest_framework.response import Response
from rest_framework import permissions
from .serializer import *
from . import mail
from .static import Constant
cont = Constant
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
'''
class UsersRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'user_id'
    serializer_class = UserSerializer
    def get_queryset(self):
        return Users.objects.all()

    def get_object(self):
        pk = self.kwargs.get("user_id")
        return Users.objects.get(pk=pk)


class IdeasRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'ID'
    serializer_class = IdeaSerializer
    def get_queryset(self):
        return Users.objects.all()


class IdeasBoxRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'TYPE'
    serializer_class = IdeaBoxSerializer
    def get_queryset(self):
        return Users.objects.all()


class TagsRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'TAG'
    serializer_class = TagsSerializer
    def get_queryset(self):
        return Users.objects.all()


class ReviewerRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'REVIEWER_ID'
    serializer_class = Reviewers
    def get_queryset(self):
        return Users.objects.all()
'''

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def user_list_create(request):
    if request.method == 'GET':
        userlist = Users.objects.all()
        serializer = UserSerializer(userlist,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def user_get_put(request,id):
    try:
        user = Users.objects.get(pk=id)
    except Users.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def ideas_list_create(request):
    if request.method == 'GET':
        idea_list = Ideas.objects.all()
        serializer = IdeaSerializer(idea_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = IdeaSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            mail.SendNotification(serializer.data['id'],serializer.data['submitted_against'],cont.MAIL_TYPE_IDEA_SUBMIT)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def idea_get_put(request,id):
    try:
        user = Ideas.objects.get(pk=id)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IdeaSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =IdeaSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            mail.SendNotification(serializer.data['id'],serializer.data['submitted_against'],cont.MAIL_TYPE_IDEA_REVIEW)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def tags_list(request):
    if request.method == 'GET':
        tag_list = Tags.objects.all()
        serializer = TagsSerializer(tag_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = TagsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def review_status_list(request):
    if request.method == 'GET':
        tag_list = ReviewStatus.objects.all()
        serializer = ReviewStatusSerializer(tag_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ReviewStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def roles_list(request):
    if request.method == 'GET':
        tag_list = Roles.objects.all()
        serializer = RolesSerializer(tag_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = RolesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST'])
@permission_classes((permissions.AllowAny,))
def send_mail(request):
    response  = mail.SendNotification(1,1,cont.MAIL_TYPE_IDEA_SUBMIT)
    return Response(status.HTTP_202_ACCEPTED)




@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def ideabox_list_create(request):
    if request.method == 'GET':
        ideaboc_list = Ideabox.objects.all()
        serializer = IdeaBoxSerializer(ideaboc_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = IdeaBoxSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def ideabox_get_put(request,boxname):
    try:
        ideabox = Ideabox.objects.get(pk=boxname)
    except Ideabox.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IdeaBoxSerializer(ideabox)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =UserSerializer(ideabox, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ideabox.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def ideaneed_list_create(request):
    if request.method == 'GET':
        ideaneed_list = IdeaNeeds.objects.all()
        serializer = IdeaNeedsSerializer(ideaneed_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = IdeaNeedsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def ideaneed_get_put(request,id):
    try:
        ideaneed = IdeaNeeds.objects.get(pk=id)
    except Ideabox.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IdeaNeedsSerializer(ideaneed)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =IdeaNeedsSerializer(ideaneed, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ideaneed.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def ideaneed_get_by_box(request,box):
    try:
        ideaneed = IdeaNeeds.objects.filter(idea_box=box)
    except Ideabox.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IdeaNeedsSerializer(ideaneed,many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def idea_get_by_requirement(request,submitted_against):
    try:
        ideas = Ideas.objects.filter(submitted_against=submitted_against)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IdeaSerializer(ideas,many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def idea_get_by_manager(request,manager):
    result = []
    try:
        boxes =  BoxOwner.objects.filter(innovation_manager_name=manager)
        boxserializer = BoxOwnerSerializer(boxes,many=True)
        if boxserializer.data:
            for serializer in boxserializer.data:
                box = serializer['idea_box']
                needs = IdeaNeeds.objects.filter(idea_box=box)
                ideasneedsserializer = IdeaNeedsSerializer(needs,many=True)
                for needserializer in ideasneedsserializer.data:
                    need_id = needserializer['id']
                    ideas = Ideas.objects.filter(submitted_against=need_id)
                    ideaserializer = IdeaSerializer(ideas,many=True)
                    result.extend(ideaserializer.data)

    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(result,status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def authenticate(request):
     if request.method == 'POST':
        serializer = AuthSerializer(data=request.data)
        try:
            token = Auth.objects.get(pk=request.data['username'])
        except Auth.DoesNotExist:
            data = invalidcreds_response(request)
            return Response(data,status=status.HTTP_401_UNAUTHORIZED)
        token_serializer = AuthSerializer(token)
        if serializer.initial_data['password'] == token_serializer.data['password'] :
            try:
                user = Users.objects.get(name=token_serializer.data['username'])
                userserializer = UserSerializer(user)
            except Users.DoesNotExist:
                return Response(status=status.HTTP_401_UNAUTHORIZED)

            data = validcreds_response(userserializer)
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            data = invalidcreds_response(request)
            return Response(data,status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def boxowner_list_create(request):
    if request.method == 'GET':
        boxowner_list = BoxOwner.objects.all()
        serializer = BoxOwnerSerializer(boxowner_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = BoxOwnerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def boxowner_get_put(request,box):
    try:
        box_owner = BoxOwner.objects.filter(idea_box=box)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BoxOwnerSerializer(box_owner,many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =BoxOwnerSerializer(box_owner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes((permissions.AllowAny,))
def boxowner_delete(request,box,user):
    try:
        box_owner = BoxOwner.objects.filter(idea_box=box,innovation_manager_name=user)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        box_owner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def boxowner_by_name(request,manager):
    try:
        box_owner = BoxOwner.objects.filter(innovation_manager_name=manager)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BoxOwnerSerializer(box_owner,many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer =BoxOwnerSerializer(box_owner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def addReviewer(request):
    if request.method == 'GET':
        reviewer_list = ReviewerIdeaMapping.objects.all()
        serializer = ReviewerIdeaSerializer(reviewer_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        print(request.data)
        serializer = ReviewerIdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = Users.objects.get(name=request.data['reviewer'])
            userserializer = UserSerializer(user)
            recipient = [userserializer.data['email']]
            mail.SendNotification(idea_id=request.data['idea_id'],type=Constant.MAIL_TYPE_ADD_REVIEWER,multi_recipient=recipient)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.error_messages)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getDifferntDecisions(request):
    if request.method == 'GET':
        status_list = DecisionStatus.objects.all()
        serializer = DecisionStatusSerializer(status_list,many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def updateReview(request,idea_id):
    if request.method == 'GET':
        review = ReviewerIdeaMapping.objects.filter(idea_id=idea_id)
        serializer = ReviewerIdeaSerializer(review,many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        try:
            review = ReviewerIdeaMapping.objects.get(idea_id=idea_id,reviewer=request.data['reviewer'])
        except Ideas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer =ReviewerIdeaSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        try:
            review = ReviewerIdeaMapping.objects.get(idea_id=idea_id,reviewer=request.data['reviewer'])
        except Ideas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def notifyExpert(request,idea_id):
    if request.method == 'POST':
        recipients = str(request.data['recipient']).split(',')
        notifier_name = request.data['notifier']
        recipients_emails = []
        for recipient in recipients:
            user = Users.objects.get(name=recipient)
            serializer = UserSerializer(user)
            recipients_emails.append(serializer.data['email'])
        if recipients_emails:
            print("trying to send")
            mail.SendNotification(idea_id=idea_id,type=Constant.MAIL_TYPE_NOTIFY_EXPERT,multi_recipient=recipients_emails,notifier_name=notifier_name)
        else:
            print("NO EMAIL ID FOUND")
        return Response(status=status.HTTP_200_OK)

@api_view(['GET', 'PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def getDecision(request,idea_id):
    try:
        decision = Decision.objects.get(idea_id=idea_id)
    except Ideas.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DecisionSerializer(decision)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DecisionSerializer(decision, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        decision.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def makeDesion(request):
    if request.method == 'GET':
        decision_list = Decision.objects.all()
        serializer = DecisionSerializer(decision_list,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = DecisionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




def invalidcreds_response(userserializer):
    response =  {
          "username" : userserializer.data['username'],
         "success" : "false",
         "type" : "-",
        "message": "Invalid"
    }
    return response

def validcreds_response(userserializer):
    response =  {
          "username" : userserializer.data['name'],
          "type" : userserializer.data['role'],
         "success" : "true",
        "message": "Valid Credentials"
    }
    return response
