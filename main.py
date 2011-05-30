from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import os
from google.appengine.ext.webapp import template

class BrowseHandler(webapp.RequestHandler):
    def get(self, page_name):
        template_name = 'templates/'+page_name+'.html' if page_name else 'templates/index.html'
        path = os.path.join(os.path.dirname(__file__), template_name)
        self.response.out.write(template.render(path, {}))

application = webapp.WSGIApplication(
    [(r'^/(.*)/?$', BrowseHandler)],
    debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
