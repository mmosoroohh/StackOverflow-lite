from app import helpers

class User(object):
    """This class represents the users for the StackOverflow-lite."""

    def __init__(self, id=0, name="", email="", password=""):
        self.id = id
        self.name = name
        self.email = email
        self.password = password

    def save(self):
        helpers.insert_user(self)

    def addUser(self):
        helpers.get_user(self)

class Questions(object):
    """This class represents the questions on the StackOverflow-lite API."""

    def __init__(self, id=0, question="", date_posted="", user_id=""):
        self.id = id
        self.question = question
        self.date_posted = date_posted
        self.user_id = user_id

    def save(self):
        self.id = helpers.post_question(self)


class Answer(object):
    """This class represents the users on StackOverflow-lite API."""

    def __init__(self, id=0, answer="", date_posted="", question_id=""):
        self.id = id
        self.answer = answer
        self.date_posted = date_posted
        self.question_id = question_id
        
    def save(self):
        helpers.answer_question(self)

class Blacklist(object):
    """This class represents Access tokens for Authentication."""
    
    def __init__(self, token=""):
        self.token = token

    def save(self):
        helpers.insert_blacklist(self)

    def __repr__(self):
        return "Blacklist: {}".format(self.token)

        