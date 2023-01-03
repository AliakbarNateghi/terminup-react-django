from django.contrib import admin
from django.urls import path, include
# from logic.views import register, login
import sys

sys.path.append('.')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('logic.urls')),
]
