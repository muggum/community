from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Mug
from .models import ServiceCategory, Service, ServicePromo
from .models import RealSkill, RealisedProject, RealLife

# Register your models here.
admin.site.register(Mug)
admin.site.register(ServiceCategory)
admin.site.register(Service)
admin.site.register(ServicePromo)
admin.site.register(RealSkill)
admin.site.register(RealisedProject)
admin.site.register(RealLife)
