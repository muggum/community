import tempfile

from django.db import models
from django.contrib.auth.models import User
from django.template.loader import render_to_string

# Create your models here.
class JSCode(models.Model):
    """docstring for JSCode."""

    ZONE_CHOICES = [
        ('head', 'Head'),
        ('body_start', 'Body (Start)'),
        ('body_end', 'Body (End)'),
    ]

    zone = models.CharField(max_length=255, choices=ZONE_CHOICES)
    js_code = models.TextField(max_length=4095)
    js_file = models.FIleField(upload_to="tokenshape/api/jscodes/")




class ShapeApi(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    token_or_version = models.CharField(max_length=255)
    integrity = models.TextField(max_length=4095, null=True, blank=True)
    dashboard_url = models.URLField(null=True, blank=True)

    EASY_API_CHOICES = [
        ('bootstrap', 'Bootstrap (DeliverJS)'),
        ('fontawesome', 'FontAwesome'),
        ('leaflet', 'Leaflet'),
    ]

    easy_api = models.CharField(max_length=255, choices=EASY_API_CHOICES)

    js_code = models.TextField(max_length=4095, null=True, blank=True)

    class Meta:
        abstract = True

    def get_js_code_template_name(self):

        if not self.token_or_version:
            return None

        #if self.jsshapes.count() > 0:
        #    name = 'http_api/jsshape/jsshape.js'
        elif self.js_code:
            name = 'http_api/simple_js_code.js'
        elif self.easy_api:
            name = 'http_api/{0}.js'.format(self.easy_api)
        else:
            return None

        return name

    def get_tmp_file(self):

        self.integrity = self.integrity.split('\r\n')
        print(self.integrity)

        template_name = self.get_js_code_template_name()
        print('[Arty DEBUG] Template name : {0}'.format(template_name))

        context = {
            'shape': self,
        }

        render = render_to_string(template_name, context)

        tmp_file = tempfile.TemporaryFile()

        tmp_file.name = '{0}.js'.format(self.slug)
        tmp_file.write(render.encode('utf-8'))

        tmp_file.seek(0)

        return tmp_file


    def __str__(self):
        return "{0} : {1}".format(self.user, self.name)

class FreeShapeApi(ShapeApi):

    readme = models.TextField(max_length=4095)

class PaidShapeApi(ShapeApi):

    readme = models.TextField(max_length=4095)
    date_buy = models.DateField()
    date_expiration = models.DateField(null=True, blank=True)

class CloudShapeApi(ShapeApi):
    """ CloudShapeApi gère les abonnements """

    PER_CHOICES = [
        ('day', 'Jour'),
        ('month', 'Mois'),
        ('year', 'Année'),
    ]

    readme = models.TextField(max_length=4095)
    price = models.PositiveIntegerField()
    per = models.CharField(max_length=11, choices=PER_CHOICES)
    date_start = models.DateField()
