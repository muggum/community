from django.urls import path

from . import views


urlpatterns = [
    path('', views.muggum, name='muggum_onepage'),
]
