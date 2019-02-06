__author__ = 'jakir_shaikh'

from django.urls import path
from . import views

urlpatterns = [
    path('users/',views.user_list_create, name='user_list'),
    path('users/<int:id>/',views.user_get_put,name="user"),
    path('ideas/',views.ideas_list_create, name='idea_list'),
    path('ideas/<int:id>/',views.idea_get_put,name="user"),
    path('ideas/needs/<int:submitted_against>/',views.idea_get_by_requirement,name="user"),
    path('tags/',views.tags_list,name="tags"),
    path('review_status/',views.review_status_list, name="review_status"),
    path('roles/',views.roles_list, name="roles"),
    path('mail/',views.send_mail,name="send_mail"),
    path('ideabox/',views.ideabox_list_create, name='idea_list'),
    path('ideabox/<str:boxname>/',views.ideabox_get_put, name='ideabox_curd'),
    path('ideaneeds/',views.ideaneed_list_create, name='idea_needs_list'),
    path('ideaneeds/<int:id>',views.ideaneed_get_put, name='idea_needs'),
    path('ideaneeds/<str:box>/',views.ideaneed_get_by_box, name='idea_needs_by_box'),
    path('auth/',views.authenticate,name='authenticate_user'),
    path('boxowner/',views.boxowner_list_create, name='box_owner_list'),
    path('boxowner/<str:box>/',views.boxowner_get_put, name='box_owner_by_box'),
    path('boxowner/<str:box>/<str:user>/',views.boxowner_delete, name='delete_box_owner_by_boxandusername'),
    path('innovationmanager/<str:manager>/',views.boxowner_by_name, name='box_owner_by_ownername'),
    path('reviewers/',views.addReviewer, name='add_reviewer'),
    path('review/<int:idea_id>/',views.updateReview,name="get_reviewer"),
    path('notify/<int:idea_id>/',views.notifyExpert,name="notify_expert"),
    path('decision/<int:idea_id>/',views.getDecision,name="get_decision"),
    path('decision/',views.makeDesion,name="make_decision"),
    path('decisiontypes/',views.getDifferntDecisions,name="get_different_status"),
    path('ideas/managers/<str:manager>/',views.idea_get_by_manager,name="user"),



]