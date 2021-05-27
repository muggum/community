# Generated by Django 3.2.3 on 2021-05-27 14:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RealisedProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=31)),
                ('complement', models.CharField(max_length=31)),
                ('link', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='RealLife',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=31)),
                ('complement', models.CharField(max_length=31)),
                ('link', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='RealSkill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=31)),
                ('complement', models.CharField(max_length=31)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=31)),
                ('description', models.TextField(blank=True, max_length=2048, null=True)),
                ('online', models.BooleanField(default=False)),
                ('selection', models.BooleanField(default=False)),
                ('energy', models.PositiveSmallIntegerField(default=0)),
                ('price', models.PositiveSmallIntegerField(default=0)),
                ('price_fixe', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=31)),
                ('energy', models.PositiveSmallIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='ServicePromo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attached_service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='muggum.service')),
            ],
        ),
        migrations.AddField(
            model_name='service',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='muggum.servicecategory'),
        ),
    ]
