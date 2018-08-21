import unittest
import os
import json

from app.app import create_app
from app.models import User

class StackOverflow_lite_Users(unittest.TestCase):
    """This class represent Users."""

    def setUp(self):
        """Define test variables and initialize."""
        self.app = create_app(config_name="testing")
        self.client = self.app.test_client()
        self.users = {'name': 'Arnold Osoro', 'email': 'arnoldmaengwe@gmail.com', 'password': '12345'}

    def test_signup_user(self):
        """Test to register new user."""
        response = self.client.post(
            '/api/v1/auth/signup', data=json.dumps(self.users), content_type='application/json')
        self.assertEqual(response.status_code, 201)
    

    def test_signin_user(self):
        """Test to login a registered user."""
        response = self.client.post(
            '/api/v1/auth/signin', data=json.dumps(self.users), content_type='application/json')
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()

    