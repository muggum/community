from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Mug(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    firstname = models.CharField(max_length=31, null=True)
    lastname = models.CharField(max_length=31, null=True)

    job = models.CharField(max_length=31, null=True)

    def __str__(self):
        return self.user.username


class ServiceCategory(models.Model):

    title = models.CharField(max_length=31)
    energy = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return self.title


class Service(models.Model):

    category = models.ManyToManyField(ServiceCategory, null=True, related_name='service_set')
    title = models.CharField(max_length=31)
    description = models.TextField(max_length=2048, null=True, blank=True)

    online = models.BooleanField(default=False)
    selection = models.BooleanField(default=False)
    energy = models.PositiveSmallIntegerField(default=0)

    price = models.PositiveSmallIntegerField(default=0)
    price_fixe = models.BooleanField(default=False)

    def __str__(self):
        return "{0}".format(self.title)


class ServicePromo(models.Model):

    attached_service = models.ForeignKey(Service, on_delete=models.CASCADE)


class RealSkill(models.Model):

    user = models.ForeignKey(Mug, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)
    energy = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return "{0} ({1})".format(self.title, self.user.username)


class RealisedProject(models.Model):

    user = models.ForeignKey(Mug, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)
    link = models.URLField()
    energy = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return "{0} ({1})".format(self.title, self.user.username)


class RealLife(models.Model):

    user = models.ForeignKey(Mug, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=31)
    complement = models.CharField(max_length=31)
    link = models.URLField()
    energy = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return "{0} ({1})".format(self.title, self.user.username)
