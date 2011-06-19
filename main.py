from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'
from google.appengine.dist import use_library
use_library('django', '1.2')
from google.appengine.ext.webapp import template

class BrowseHandler(webapp.RequestHandler):
    def get(self, page_name):
        nav = {
                '': 'Home',
                'about': 'About',
                'trainers-profile': "Trainer's Profile",
                'training-programmes': 'Training Programmes',
                'photos': 'Photos',
                'testimonials': 'Testimonials',
        }
        template_name = 'templates/'+page_name+'.html' if page_name else 'templates/index.html'
        path = os.path.join(os.path.dirname(__file__), template_name)
        self.response.out.write(
            template.render(path, {'current': page_name, 'nav': nav }))

application = webapp.WSGIApplication(
    [(r'^/(.*)/?$', BrowseHandler)],
    debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
