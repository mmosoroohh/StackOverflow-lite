class Question(object):
    """This class represents the Questions in StackOverflow-lite."""

    def __init__(self, question, date_posted):
        self.question = question
        self.date_posted = date_posted


class Answer(object):
    """This class represents the Answers in StackOverflow."""

    def __init__(self, answer, date_posted):
        self.answer = answer
        self.date_posted = date_posted


class User(object):
    """This class represents the Users in StackOverflow."""

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password