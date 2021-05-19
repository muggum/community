from django.shortcuts import render

# Create your views here.
def muggum(request):

    context = {}

    return render(request, 'muggum/muggum.html', context)
