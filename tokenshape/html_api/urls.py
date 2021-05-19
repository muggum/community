from django.urls import path

from . import views

urlpatterns = [
    path('<str:username>/<str:slug>/shape.js', views.shapeshare, name='shapeshare'),
]
