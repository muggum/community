from django.contrib import admin

from .models import FreeShapeApi, PaidShapeApi, CloudShapeApi

# Register your models here.
admin.site.register(FreeShapeApi)
admin.site.register(PaidShapeApi)
admin.site.register(CloudShapeApi)
