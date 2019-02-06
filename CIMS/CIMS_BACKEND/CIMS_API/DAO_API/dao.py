__author__ = 'jakir_shaikh'
from .models import Users

#test_user = USERS()
class DAO:
    def getallUsers(self):
      users = Users.objects.all()
      return users[0]


