from django.contrib.auth.models import User
from django.db import models

class student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                             blank=True)
    password = models.CharField(max_length=256, blank=False, null=False)
    email = models.EmailField(blank=False, null=False)

class ws(models.Model):  # WeeklySchedule
    day1 = models.IntegerField(blank=True, null=True)  # Saturday: 0 , ... , Friday: 6
    day2 = models.IntegerField(blank=True, null=True)
    start1 = models.FloatField(blank=True, null=True)
    time1 = models.FloatField(blank=True, null=True)
    start2 = models.FloatField(blank=True, null=True)
    time2 = models.FloatField(blank=True, null=True)

    def __str__(self):
        return (f'{self.day1} : {self.start1}-{self.time1 + self.start1}' + ' + '
                f'{self.day2} : {self.start2}-{ self.time2 + self.start2} ')


class ExamDate(models.Model):
    date = models.CharField(blank=True, null=True, max_length=256)
    start = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f'{self.date} : {self.start}'


class College(models.Model):
    college = models.CharField(blank=True, null=True, max_length=256)

    class Meta:
        ordering = ['college']

    def __str__(self):
        return f'{self.college}'


class course(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                             blank=True)

    college = models.ForeignKey(College, on_delete=models.CASCADE, null=True,
                                blank=True)

    ws = models.ForeignKey(ws, null=True,
                           on_delete=models.CASCADE,
                           related_name='backWeek')

    examDate = models.ForeignKey(ExamDate, null=True,
                                 on_delete=models.CASCADE,
                                 related_name='backExam')

    title = models.CharField(blank=True, null=True, max_length=256)
    professor = models.CharField(blank=True, null=True, max_length=256)
    group = models.IntegerField(blank=True, null=True)
    unit = models.IntegerField(blank=True, null=True)
    code = models.IntegerField(blank=True, null=True)
    capacity = models.IntegerField(blank=True, null=True)
    requirement = models.CharField(blank=True, null=False, max_length=256, default='-')
    synthesis = models.CharField(blank=True, null=False, max_length=256, default='-')
    ps = models.CharField(blank=True, null=False, max_length=256, default='-')

    def __str__(self):
        return f'{self.title}'


class studentChoise(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                                blank=True)
    course = models.ForeignKey(course, on_delete=models.CASCADE, null=True,
                                blank=True)
    # courseId = models.IntegerField(blank=True, null=True)
    # title = models.CharField(blank=True, null=True, max_length=256)
    # professor = models.CharField(blank=True, null=True, max_length=256)
    # group = models.IntegerField(blank=True, null=True)
    # unit = models.IntegerField(blank=True, null=True)
    # code = models.IntegerField(blank=True, null=True)
    # ps = models.CharField(blank=True, null=True, max_length=256, default='ندارد')
    # examDate = models.DateField(blank=True, null=True)
    # examStart = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f'{self.course} : picked by {self.student}'
