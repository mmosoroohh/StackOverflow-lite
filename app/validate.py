import re

def user_detail_verification(name):
    """check if details inputed are of a valid type"""
    print(name)
    if len(name) < 3:
        return 'Too short, please add more characters'
    if len(name) > 15:
        return 'Too long, please remove some characters'
    if name.isdigit():
        return 'This cannot be digits'

def validate_email(email):
    
    email_regex = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

    if not re.match(email_regex, email):
        return {
                'Status': 'Error',
                'Message': 'Ooops! {} is not a valid email address'.format(email) }, 400
   
   