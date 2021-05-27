from django.db import models

# Create your models here.
class ServiceCategory(models.Model):

    title = models.CharField(max_length=31)
    energy = models.PositiveSmallIntegerField(default=0)

    def __str_(self):
        return self.title

class Service(models.Model):

    category = models.ForeignKey(ServiceCategory, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=31)
    description = models.TextField(max_length=2048, null=True, blank=True)

    online = models.BooleanField(default=False)
    selection = models.BooleanField(default=False)
    energy = models.PositiveSmallIntegerField(default=0)

    price = models.PositiveSmallIntegerField(default=0)
    price_fixe = models.BooleanField(default=False)

    def __str_(self):
        return "{0} ({1})".format(self.title, self.category)

class ServicePromo(models.Model):

    attached_service = models.ForeignKey(Service, on_delete=models.CASCADE)

class RealSkill(models.Model):

    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)

class RealisedProject(models.Model):

    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)
    link = models.URLField()

class RealLife(models.Model):

    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)
    link = models.URLField()
