import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "alokbuilds.settings.production"
)

app = get_wsgi_application()