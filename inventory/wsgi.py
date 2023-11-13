"""
WSGI config for inventory project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise
from pathlib import Path
from whitenoise import WhiteNoise

application = get_wsgi_application()
BASE_DIR = Path(__file__).resolve().parent.parent
application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'build/static'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inventory.settings')