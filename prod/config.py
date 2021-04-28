import base64
from cryptography import fernet
from aiohttp import web
from aiohttp_session import setup, get_session
from aiohttp_session.cookie_storage import EncryptedCookieStorage
from model import db
from no_csrf import CSRF
from login import Login

async def front(request):
    return web.FileResponse('./static/index.html')


@web.middleware
async def error_middleware(request, handler):
    try:
        response = await handler(request)
        if response.status not in [404, 403]:
            return response
    except web.HTTPException as ex:
        if ex.status not in [404, 403]:
            raise
    return await front(request)

app = web.Application(middlewares=[error_middleware])
fernet_key = fernet.Fernet.generate_key()
secret_key = base64.urlsafe_b64decode(fernet_key)
setup(app, EncryptedCookieStorage(secret_key))

db.bind(provider='sqlite', filename='database.sqlite', create_db=True)
db.generate_mapping(create_tables=True)
password_secret = b'\xc1i\x81\x108\xa7\x0f\x02\xa9\x96\x06\x9c\xf0\x18B*\xb3:.\xe0'
csrf = CSRF('\x17\x87\xf2j\xbeg\x9du\xff\x9a(_K\x99\x06Zv\x92@*')
my_login = Login(db)

