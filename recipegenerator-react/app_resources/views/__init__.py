''' Stores the individual blueprints for various portions of the web app

Main
    -
Login/Auth
    - TODO
API
    - TODO
'''
from .config import create_blueprint, Blueprint

from .main_views import main_views

all_views: Blueprint = create_blueprint("views")

# add all children as such
all_views.register_blueprint(main_views)

# publicly exposed things
__all__ = ["all_views"]