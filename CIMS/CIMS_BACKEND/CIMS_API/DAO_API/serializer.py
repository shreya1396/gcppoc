__author__ = 'jakir_shaikh'

from rest_framework import serializers
from .models import *
class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model = Users
         fields = '__all__'


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ideas
        fields = '__all__'
        #fields = ['ID','IDEA_TITLE','IDEA_DESCRIPTION','IDEA_OWNER','REVIEWER_NAME','TAGS','SUBMISSION_DATE','UPDATE_DATE','REVIEW_STATUS','REVIEW_COMMENT','CATEGORY','SUBMITTED_AGAINST']

class IdeaBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ideabox
        fields = '__all__'
        #fields = ['TYPE']

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'
        #fields = ['TAG']


class InnovationManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = InnovationManagers
        fields = '__all__'
        #fields = ['MANAGER_ID','NAME','EMAIL','REQUEST_COUNT']


class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewers
        fields = '__all__'
        #fields = ['REVIEWER_ID','NAME','EMAIL','EXPERTIES','NUMBER_OF_REVIEWS']


class IdeaNeedsSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaNeeds
        fields = '__all__'
        #fields = ['ID','REQUIREMENT','DESCRIPTION','IDEA_BOX']

class ReviewStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewStatus
        fields = '__all__'
        #fields = ['STATUS']


class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = '__all__'
        #fields = ['ROLE']


class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = '__all__'
        #fields = ['ID','REQUIREMENT','DESCRIPTION','IDEA_BOX']

class BoxOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoxOwner
        fields = '__all__'

class ReviewerIdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewerIdeaMapping
        fields = '__all__'

class DecisionStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = DecisionStatus
        fields = '__all__'

class DecisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Decision
        fields = '__all__'

