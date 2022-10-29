from django.urls import path
from .views import bookList, apiOverview

urlpatterns = [
    path('', apiOverview, name='api-overview'),
    path('books/', bookList, name='books'),
]
