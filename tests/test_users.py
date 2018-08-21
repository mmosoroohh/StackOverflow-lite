import unittest
import os
import json


from app.manage import migrate, reset_migration

from app.app import create_app


class StackOverflow_lite_Users(unittest.TestCase):
    """This class represent Users."""

    def setUp(self):
        """Define test variables and initialize."""
        self.app = create_app("testing")
        migrate()

        self.checker = self.app.test_client()
        self.users = {'name': 'Arnold Osoro', 'email': 'arnoldmaengwe@gmail.com', 'password': '12345'}
        self.header = {"Content-Type": "application/json"}
        # self.loggedInUserHeaders = {"Content-TYpe": "application/json"}

        # self.logged_user = {"name": "Arnold Osoro" ,"email": "arnoldmaengwe@gmail.com", "password": "12345"}

        # response = self.checker.post('/api/v2/auth/signup', data=json.dumps(self.logged_user), headers=self.header)
        # login_response = self.checker.post('/api/v2/auth/signin', data=json.dumps(self.logged_user), headers=self.header)
        # result = json.loads(login_response.data.decode())
        # self.loggedInUserHeaders['Authorization'] = "Bearer {}".format(result['token'])

    
    def test_signup_user(self):
        """Test to register new user."""
        data = self.users
        response = self.checker.post('/api/v2/auth/signup', data=json.dumps(data), headers=self.header)

        result = json.loads(response.data.decode())

        self.assertEquals(result['message'],'New user registered!')
        

    # def test_can_signup_user(self):
    #     """Test the API can signup a user."""
    #     data = self.users
    #     response = self.checker.post('/api/v2/auth/signup', data=json.dumps(data), headers=self.header)

    #     result = json.loads(response.get_data(as_text=True))

    #     self.assertEqual(result['message'], "New user registered!")
    #     self.assertEqual(response.status_code, 201)

    # def test_user_already_exists(self):
    #     """Test a user cannot be registerd twice."""
    #     self.sign_up_user()
    #     response = self.checker.post('/api/v2/auth/signup', data=json.dumps(self.user), headers=self.header)
    #     self.assertEqual(response.status_code, 202)
    #     # Get results in json format
    #     result = json.loads(response.data.decode())
    #     self.assertEqual(result['message'], 'User already exist')


    # def test_signin_user(self):
    #     """Test to login a registered user."""
    #     self.sign_in_user()

    #     login_response = self.checker.post('/api/v2/auth/signin', data=json.dumps(self.users), headers=self.header)
    #     # Get result in json format
    #     result = json.loads(login_response.data.decode())
    #     print(result)
    #     self.assertEqual(result['message'], "Logged in successfully!")
    #     self.assertEqual(login_response.status_code, 200)

    # def test_non_registered_user_login(self):
    #     """Test a non registered user trying to login."""
    #     none_user = {'email': "joe@example.com", 'password': "joe123"}
    #     response = self.checker.post('/api/v2/auth/signin', data=json.dumps(none_user), headers=self.header)
    #     result = json.loads(response.data.decode())
    #     self.assertEqual(response.status_code, 404)
    #     self.assertEqual(result['message'], "User not found")

    # def test_empty_login_details(self):
    #     """Test user trying to login with empty fields."""
    #     user = {"email": "", "password": ""}
    #     response = self.checker.post('/api/v2/auth/signin', data=json.dumps(user), headers=self.header)
    #     result = json.loads(response.data.decode())
    #     self.assertEqual(result['message'], "User credentials required to register!")

    def tearDown(self):
        reset_migration()
        

if __name__ == "__main__":
    unittest.main()

    