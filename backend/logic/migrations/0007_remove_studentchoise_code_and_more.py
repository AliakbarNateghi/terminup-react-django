# Generated by Django 4.1.1 on 2022-12-18 14:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('logic', '0006_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentchoise',
            name='code',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='courseId',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='examDate',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='examStart',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='group',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='professor',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='ps',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='title',
        ),
        migrations.RemoveField(
            model_name='studentchoise',
            name='unit',
        ),
        migrations.AddField(
            model_name='studentchoise',
            name='course',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='logic.course'),
        ),
    ]
