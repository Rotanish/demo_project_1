from aiohttp import web
from handlers import *

routes = []

routes.append(web.post('/api/generate', generate))
routes.append(web.get('/api/csrf', create_csrf))
routes.append(web.get('/api/whoami', whoami))
routes.append(web.post('/api/login', login))
routes.append(web.post('/api/logout', logout))
routes.append(web.post('/api/logoutall', logout_all))
routes.append(web.static('/static', './static'))