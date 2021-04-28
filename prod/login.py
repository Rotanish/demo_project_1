#! bin/python


from uuid import uuid4 as random
from datetime import datetime
from pony.orm import *


class Login:
    def __init__(self, db):
        self.db = db

    def login(self, session, user, ip=None):
        self.get_identificator(session)
        with db_session:
            if ip:
                self.db.Session(
                    identificator=session['identificator'],
                    user=user,
                    login_time=datetime.now(),
                    ip=ip
                )
            else:
                self.db.Session(
                    identificator=session['identificator'],
                    user=user,
                    login_time=datetime.now()
            )

    def logout(self, session):
        if not 'identificator' in session:
            return False
        with db_session:
            self.db.Session.get(identificator=session['identificator']).delete()
        return True

    def kill_session(self, session, identificator):
        if not 'identificator' in session:
            return False
        with db_session:
            ses = self.db.Session.get(identificator=identificator)
            if not ses:
                return False
            if self.get_user(session) != ses.User:
                return False
            ses.delete()
        return True

    def logout_all(self, session):
        with db_session:
            user = self.get_user(session)
            if not user:
                return False
            for ses in user.session:
                ses.delete()
        return True

    def get_user(self, session):
        with db_session:
            self.get_identificator(session)
            ses = self.db.Session.get(identificator=session['identificator'])
            if ses:
                ses.last_active_time = datetime.now()
                return ses.user
        return None

    def new_identificator(self):
        while True:
            random_identificator = str(random())
            with db_session:
                if not select(s for s in self.db.Session if s.identificator == random_identificator):
                    return random_identificator

    def get_identificator(self, session):
        with db_session:
            if not 'identificator' in session:
                session['identificator'] = self.new_identificator()
            return session['identificator']
