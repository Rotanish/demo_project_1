import io
from aiohttp import web
from pony.orm import *
from hashlib import sha3_512 as my_hash, md5, sha256
from model import *
from helpers import *
from config import app, csrf, my_login, password_secret, get_session
from word_generators.word_generator import generate_word


async def generate(request):
  form = await request.json()
  form = strip_form(form)
  doc = generate_word(form)
  bio = io.BytesIO()
  doc.save(bio)
  bio.seek(0)
  return web.Response(body=bio.getvalue(), content_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document")

async def login(request):
  with db_session:
    session = await get_session(request)
    current_user = my_login.get_user(session)
    if current_user:
      web.Response(text="Already logined")
    form = await request.json()
    form = strip_form(form)
    if csrf.check_token(session, form["csrf"]) and validate_log(form):
      user = Admin.get(login=form["login"])
      if user:
        if user.password_hash == my_hash(password_secret + str(form['password']).encode() + user.password_salt.encode()).hexdigest():
          my_login.login(session, user, request.remote)
          return web.Response(text="Logined")
      return web.Response(text="Wrong login or password")
  return web.Response(text="Oops")

async def logout(request):
  with db_session:
    session = await get_session(request)
    current_user = my_login.get_user(session)
    if current_user:
      form = await request.json()
      form = strip_form(form)
      if csrf.check_token(session, form["csrf"]):
        my_login.logout(session)
        return web.Response(text="Logout")
  return web.Response(text="Oops")

async def logout_all(request):
  with db_session:
    session = await get_session(request)
    current_user = my_login.get_user(session)
    if current_user:
      form = await request.json()
      form = strip_form(form)
      if csrf.check_token(session, form["csrf"]):
        my_login.logout_all(session)
        return web.Response(text="Logout")
  return web.Response(text="Oops")


async def whoami(request):
  with db_session:
    session = await get_session(request)
    current_user = my_login.get_user(session)
    if current_user:
      return web.json_response({
        "login": current_user.login,
        "nickname": current_user.nickname,
        "status": "auth",
      })
    else:
      return web.json_response({
        "status": "not auth",
        "login": "",
        "nickname": "",
      })

async def create_csrf(request):
  with db_session:
    session = await get_session(request)
    csrf.generate_key(session)
    return web.Response(text=csrf.create_token(session))
