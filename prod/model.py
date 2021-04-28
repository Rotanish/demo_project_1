#! bin/python


from pony.orm import *
from datetime import datetime

db = Database()


class Admin(db.Entity):
    login = PrimaryKey(str)
    password_hash = Required(str)
    password_salt = Required(str)
    nickname = Required(str)
    session = Set('Session', reverse='user')
    reg_time = Required(datetime)


class Session(db.Entity):
    identificator = PrimaryKey(str)
    user = Required('Admin', reverse='session')
    login_time = Required(datetime)
    last_active_time = Optional(datetime)
    ip = Optional(str)

