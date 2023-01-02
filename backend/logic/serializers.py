from rest_framework import serializers
from .models import ws, ExamDate, course, studentChoise, College, student
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        return token


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


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


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
