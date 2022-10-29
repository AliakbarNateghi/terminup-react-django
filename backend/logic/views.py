from django.shortcuts import render
from .models import book
from .serializers import bookSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/book-list',
    }

    return Response(api_urls)


@api_view(['GET'])
def bookList(request):
    books = book.objects.all().order_by('-id')
    serializer = bookSerializer(books, many=True)
    return Response(serializer.data)
