import unittest
import os
import json


from app.manage import migrate, reset_migration

from app.app import create_app

class StackOverflow_lite(unittest.TestCase):
    """This class represent Questions and answers."""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app(config_name="testing")
        migrate()
        self.client = self.app.test_client()
        self.questions = {'question': 'What is flask restful api'}
        self.answers = {'Answer': 'flask restful is a python framework', 'Date posted': '14th August 2018'}


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

        
    def test_post_question(self):
        """Test posting a question."""
        response = self.client.post(
            '/api/v2/users/questions', data=json.dumps(self.questions), headers=self.authHeaders)

        self.assertEqual(response.status_code, 201)

    # def test_view_all_questions(self):
    #     """Test to view all questions."""
    #     response = self.client.get(
    #         '/api/v2/users/questions', content_type='application/json')
    #     self.assertEqual(response.status_code, 200)

    # def test_view_single_question(self):
    #     """Test view a single question."""
    #     response = self.client.get(
    #         '/api/v2/users/questions/1', data=json.dumps(self.questions), content_type='application/json')
    #     self.assertEqual(response.status_code, 200)
    
    # def test_edit_question(self):
    #     """Test can edit a question."""
    #     self.client.post(
    #         '/api/v1/questions', data=json.dumps(self.questions), content_type='application/json')
    #     response = self.client.put(
    #         '/api/v2/users/questions/1', data=json.dumps(self.questions), content_type='application/json')
    #     self.assertEqual(response.status_code, 200)

    # def test_delete_question(self):
    #     """Test delete a question."""
    #     response = self.client.get(
    #         '/api/v2/users/questions/1', data=json.dumps(self.questions), content_type='application/json')
    #     self.assertEqual(response.status_code, 200)
    #     response = self.client.delete('/api/v1/questions/1', content_type='application/json')
    #     self.assertEqual(response.status_code, 404)

    # def test_answer_question(self):
    #     """Test answer a question."""
    #     response = self.client.post(
    #         '/api/v2/users/questions/1/answers', data=json.dumps(self.answers), content_type='application/json')
    #     self.assertEqual(response.status_code, 201)

def tearDown(self):
    reset_migration()

if __name__ == "__main__":
    unittest.main()