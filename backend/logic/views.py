from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import courseSerializer, collegeSerializer, wsSerializer, edSerializer, choiseSerializer, studentSerializer, userSerializer
from .models import course, College, ws, ExamDate, studentChoise, student, User
# from django.contrib.auth.models import User


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'users': '/users',
        'List': '/course-list',
        'college': '/college-list',
        'ws': '/ws-list',
        'Detail View': '/course-detail/<str:pk>/',
        'courseCreate': '/course-create/',
        'courseUpdate': '/course-update/<str:pk>/',
        'courseDelete': '/course-delete/<str:pk>/',
        'studentChoise': '/student-choise/<str:pk>/',
    }

    return Response(api_urls)


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


