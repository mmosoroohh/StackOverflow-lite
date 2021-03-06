import psycopg2
import os

def reset_migration():
    from app.app import db

    conn = db.conn
    cur = db.cursor

    cur.execute("""DELETE FROM answers;""")

    cur.execute("""DELETE FROM questions;""")

    cur.execute("""DELETE FROM users;""")

    conn.commit()

def migrate():
    from app.app import db

    conn = db.conn
    cur = db.cursor

    cur.execute("""CREATE TABLE IF NOT EXISTS users(
        id serial PRIMARY KEY, 
        name varchar, 
        email varchar UNIQUE, 
        password varchar
        );""")

    cur.execute("""CREATE TABLE IF NOT EXISTS questions(
        id serial PRIMARY KEY, 
        question varchar,
        date_posted TIMESTAMP,
        user_id INT, 
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
    );""")
    
    cur.execute("""CREATE TABLE IF NOT EXISTS answers(
        id serial PRIMARY KEY, 
        answer varchar,
        date_posted TIMESTAMP,
        status varchar,
        question_id INT,
        FOREIGN KEY (question_id) REFERENCES questions(id)
        ON DELETE CASCADE
    );""")
    
    cur.execute("""CREATE TABLE IF NOT EXISTS blacklist(
        id serial PRIMARY KEY, 
        token varchar
        );""")
        
    conn.commit()

    