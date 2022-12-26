from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .serializers import (courseSerializer,
                          collegeSerializer,
                          wsSerializer,
                          edSerializer,
                          choiseSerializer,
                          userSerializer,
                          RegisterSerializer)
                          
from .models import course, College, ws, ExamDate, studentChoise, student, User
# from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse_lazy
from serializers import *
from rest_framework import generics


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'users': '/users',
        'List': '/course-list',
        'college': '/college-list',
        'ws': '/ws-list',
        'Detail View': '/course-detail/<str:pk>/',
        'courseCreate': '/course-create/',
        'userCreate': '/user-create/',
        'courseUpdate': '/course-update/<str:pk>/',
        'courseDelete': '/course-delete/<str:pk>/',
        'studentChoise': '/student-choise/<str:pk>/',
        'token': '/token',
        'token-refresh': '/token/refresh',
    }

    return Response(api_urls)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def users(request):
    students = User.objects.all().order_by('-id')
    serializer = userSerializer(students, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def courseList(request):
    courses = course.objects.all().order_by('-id')
    serializer = courseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def StudentChoise(request):
    choises = studentChoise.objects.all().order_by('-id')
    serializer = choiseSerializer(choises, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def collegeList(request):
    colleges = College.objects.all().order_by('-id')
    serializer = collegeSerializer(colleges, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def wsList(request):
    wss = ws.objects.all().order_by('-id')
    serializer = wsSerializer(wss, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def edList(request):
    eds = ExamDate.objects.all().order_by('-id')
    serializer = edSerializer(eds, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def courseDetail(request, pk):
    courses = course.objects.get(id=pk)
    serializer = courseSerializer(courses, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def courseCreate(request):
    serializer = choiseSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def userCreate(request):
    serializer = userSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

    user.set_password(serializer.validated_data.get('password'))
    user.save()

    return Response(serializer.data)


@api_view(['POST'])
def courseUpdate(request, pk):
    courses = course.objects.get(id=pk)
    serializer = courseSerializer(instance=courses, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def courseDelete(request, pk):
    choises = studentChoise.objects.get(id=pk)
    choises.delete()

    return Response('Deleted')


# class Home(LoginRequiredMixin, List)


# @api_view(['POST'])
# def register(request):
#     if request.method == 'POST':
#         username = request.POST.get('name')
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         user = User(
#             username=username,
#             email=email,
#             password=password,
#         )
    
#         user.save()
#         return Response(status=status.HTTP_201_CREATED)

#     # return HttpResponseRedirect(reverse_lazy(courseList))
#     return Response(status=status.HTTP_400_BAD_REQUEST)

# def login(request):
#     pass

# def logout(request):
#     pass