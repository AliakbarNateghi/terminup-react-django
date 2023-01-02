from django.contrib import admin
from django.urls import path, include
from . import views
from .views import MyTokenObtainPairView, RegisterView, courseViewSet
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'course', views.courseViewSet, basename='course')
router.register(r'college', views.collegeViewSet, basename='college')
router.register(r'choise', views.studentChoiseViewSet, basename='choise')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', views.apiOverview, name='api-overview'),
    path('users/', views.users, name='users'),
    # path('course-list/', views.courseList, name='course-list'),
    # path('college-list/', views.collegeList, name='college-list'),
    path('ws-list/', views.wsList, name='ws-list'),
    path('ed-list/', views.edList, name='ed-list'),
    # path('student-post/', views.studentPost, name='student-post'),
    # path('student-choise/', views.StudentChoise, name='student-choise'),
    # path('course-detail/<str:pk>/', views.courseDetail, name='course-detail'),
    # path('course-create/', views.courseCreate, name='course-create'),
    path('user-create/', views.userCreate, name='user-create'),
    # path('course-update/<str:pk>/', views.courseUpdate, name='course-update'),
    # path('course-delete/<str:pk>/', views.courseDelete, name='course-delete'),
    # path('choise-delete/<str:pk>/', views.deleteChoise, name='delete'),
    path('', include(router.urls))
]

