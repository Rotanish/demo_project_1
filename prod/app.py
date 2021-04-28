from config import app, web
from routes import routes
app.add_routes(routes)

application = app

if __name__ == '__main__':
  web.run_app(application)
