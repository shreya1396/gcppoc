from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
# Create your models here.

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
import json


class Auth(models.Model):
    username = models.CharField(primary_key=True, max_length=100)
    password = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'Auth'


class BoxOwner(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    innovation_manager_name = models.CharField(db_column='INNOVATION_MANAGER_NAME', max_length=100)  # Field name made lowercase.
    idea_box = models.CharField(db_column='IDEA_BOX', max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'BOX_OWNER'


class Decision(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    idea_id = models.BigIntegerField(db_column='IDEA_ID')  # Field name made lowercase.
    decision = models.CharField(db_column='DECISION', max_length=50)  # Field name made lowercase.
    comment = models.CharField(db_column='COMMENT', max_length=200, blank=True, null=True)  # Field name made lowercase.
    need_id = models.BigIntegerField(db_column='NEED_ID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DECISION'


class DecisionStatus(models.Model):
    value = models.CharField(db_column='VALUE', primary_key=True, max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DECISION_STATUS'


class Ideabox(models.Model):
    type = models.CharField(db_column='TYPE', primary_key=True, max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'IDEABOX'


class Ideas(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    idea_title = models.CharField(db_column='IDEA_TITLE', max_length=100)  # Field name made lowercase.
    idea_description = models.CharField(db_column='IDEA_DESCRIPTION', max_length=500)  # Field name made lowercase.
    idea_owner = models.CharField(db_column='IDEA_OWNER', max_length=50)  # Field name made lowercase.
    tags = models.CharField(db_column='TAGS', max_length=50)  # Field name made lowercase.
    submission_date = models.DateTimeField(db_column='SUBMISSION_DATE')  # Field name made lowercase.
    update_date = models.DateTimeField(db_column='UPDATE_DATE')  # Field name made lowercase.
    category = models.CharField(db_column='CATEGORY', max_length=50)  # Field name made lowercase.
    submitted_against = models.BigIntegerField(db_column='SUBMITTED_AGAINST')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'IDEAS'


class IdeaNeeds(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    requirement = models.CharField(db_column='REQUIREMENT', max_length=100)  # Field name made lowercase.
    description = models.CharField(db_column='DESCRIPTION', max_length=200, blank=True, null=True)  # Field name made lowercase.
    idea_box = models.CharField(db_column='IDEA_BOX', max_length=200)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'IDEA_NEEDS'


class InnovationManagers(models.Model):
    manager_id = models.AutoField(db_column='MANAGER_ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=50)  # Field name made lowercase.
    email = models.CharField(db_column='EMAIL', max_length=50)  # Field name made lowercase.
    request_count = models.IntegerField(db_column='REQUEST_COUNT')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'INNOVATION_MANAGERS'


class Reviewers(models.Model):
    reviewer_id = models.AutoField(db_column='REVIEWER_ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=50)  # Field name made lowercase.
    email = models.CharField(db_column='EMAIL', max_length=50)  # Field name made lowercase.
    experties = models.CharField(db_column='EXPERTIES', max_length=50)  # Field name made lowercase.
    number_of_reviews = models.IntegerField(db_column='NUMBER_OF_REVIEWS')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'REVIEWERS'


class ReviewerIdeaMapping(models.Model):
    id = models.BigAutoField(primary_key=True)
    reviewer = models.CharField(db_column='REVIEWER', max_length=100)  # Field name made lowercase.
    idea_id = models.BigIntegerField(db_column='IDEA_ID')  # Field name made lowercase.
    review_comment = models.CharField(db_column='REVIEW_COMMENT', max_length=200, blank=True, null=True)  # Field name made lowercase.
    review_status = models.CharField(db_column='REVIEW_STATUS', max_length=20, blank=True, null=True)  # Field name made lowercase.
    review_date = models.DateTimeField(db_column='REVIEW_DATE',blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'REVIEWER_IDEA_MAPPING'


class ReviewStatus(models.Model):
    status = models.CharField(db_column='STATUS', primary_key=True, max_length=20)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'REVIEW_STATUS'


class Roles(models.Model):
    role = models.CharField(db_column='ROLE', primary_key=True, max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ROLES'


class Tags(models.Model):
    tag = models.CharField(db_column='TAG', unique=True, max_length=30)  # Field name made lowercase.
    tag_id = models.BigAutoField(db_column='TAG_ID', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'TAGS'


class Users(models.Model):
    user_id = models.BigAutoField(db_column='USER_ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', unique=True, max_length=50)  # Field name made lowercase.
    role = models.CharField(db_column='ROLE', max_length=50)  # Field name made lowercase.
    email = models.CharField(db_column='EMAIL', unique=True, max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'USERS'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'
