from django.shortcuts import render

# Create your views here.
def muggum(request):

    services_categories = [
        'Selection',
        'Besoin d\'un Codeur',
        'Plus de Visibilité',
        'Art Graphique',
        'Art Digital',
    ]

    selection = [
        'Item',
        'Item',
        'Item',
        'Item',
        'Item',
        'Item',
        'Item',
    ]

    context = {
        'services_categories': services_categories,
        'selection': selection,
    }

    return render(request, 'muggum/muggum.html', context)
