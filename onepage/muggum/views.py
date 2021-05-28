from django.shortcuts import render

from .models import Service, ServiceCategory, Mug

# Create your views here.
def muggum(request):

    services = Service.objects.filter(online=True).order_by('-energy').all()

    #services_categories = ServiceCategory.objects.filter(service_set__in=services).distinct('id').order_by('-energy').all()
    categories = ServiceCategory.objects.all()
    services_categories = []
    for service in services:
        for category in categories:
            if category in service.category.all():
                if category not in services_categories:
                    services_categories.append(category)

    selection = Service.objects.filter(selection=True, online=True).order_by('-energy').all()

    ekip = Mug.objects.all()

    context = {
        'services_categories': services_categories,
        'selection': selection,
        'ekip': ekip,
    }

    return render(request, 'muggum/muggum.html', context)
