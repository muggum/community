# Generated by Django 3.2.3 on 2021-05-28 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('muggum', '0003_auto_20210528_1240'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='category',
        ),
        migrations.AddField(
            model_name='service',
            name='category',
            field=models.ManyToManyField(null=True, to='muggum.ServiceCategory'),
        ),
    ]
