from django.shortcuts import render
from django.http import FileResponse, Http404

from django.contrib.auth.models import User

from .models import FreeShapeApi


# Create your views here.
def shapeshare(request, username, slug):

    try:
        user = User.objects.get(username=username)
    except:
        raise Http404('Utilisateur introuvable')

    try:
        shape = FreeShapeApi.objects.get(user=user, slug=slug)
    except:
        raise Http404('FreeShapeApi introuvable')

    return FileResponse(shape.get_tmp_file())
