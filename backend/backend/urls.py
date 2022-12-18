from django.contrib import admin
from django.urls import path, include
# from logic.views import register, login
import sys

sys.path.append('.')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('logic.urls')),
    # path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    # path('register/', register, name='register'),
    # path('login/', login, name='login'),
]
