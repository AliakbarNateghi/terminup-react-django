from django.db import models


class book(models.Model):
    title = models.CharField(blank=True, null=True, max_length=255)
    author = models.CharField(blank=True, null=True, max_length=255)
    number = models.IntegerField()

    def __str__(self):
        return f'{self.title}'