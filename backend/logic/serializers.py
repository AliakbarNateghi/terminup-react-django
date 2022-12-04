from rest_framework import serializers
from .models import ws, ExamDate, course, studentChoise, College, student
from django.contrib.auth.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class studentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = student
#         fields = '__all__'


class courseSerializer(serializers.ModelSerializer):
    class Meta:
        model = course
        fields = '__all__'


class choiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = studentChoise
        fields = '__all__'


class collegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = '__all__'


class wsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ws
        fields = '__all__'


class edSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamDate
        fields = '__all__'
