
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from backend.todo.views import TodoView                       # add this
        
router = routers.DefaultRouter()                      # add this
router.register(r'todos', TodoView, 'todo')     # add this
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
]