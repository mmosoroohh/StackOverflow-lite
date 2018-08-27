""" Default testing cases for the API."""
import unittest 
import os
import json


from app.manage import migrate, reset_migration

from app.app import create_app

class BaseTestCase(unittest.TestCase):
    """This class represent Users, Questions and Answers."""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app(config_name="testing")
        migrate()

        self.checker = self.app.test_client()
        self.users = {'name': 'Arnold Osoro', 'email': 'arnoldmaengwe@gmail.com', 'password': '12345'}
        self.default_user = {'name': 'Dan mark', 'email': 'dan@gmail.com', 'password': '12345'} 
    
        self.client = self.app.test_client()
        self.questions = {'question': 'What is flask restful api'}
        self.questions_1 = {'question': 'What is a flask framework'}
        self.answers = {'Answer': 'flask restful is a python framework', 'status': 'pending'}


        self.user = {'name': 'Arnold Osoro', 'email': 'arnoldmaengwe@gmail.com', 'password': '12345'}
        self.header = {"Content-Type": "application/json"}
        
        # create an authenticated user
        self.client.post('/api/v2/auth/signup', data=json.dumps(self.user), headers=self.header)

        # login the user
        response = self.client.post("/api/v2/auth/signin", data=json.dumps(self.user), headers=self.header)

        # create the authentication headers
        self.authHeaders = {"Content-Type":"application/json"}

        # fix the bearer token in the header
        result = json.loads(response.data.decode())
        self.authHeaders['Authorization'] = 'Bearer '+result['token']



    def tearDown(self):
        reset_migration()

if __name__ == "__main__":
    unittest.main()