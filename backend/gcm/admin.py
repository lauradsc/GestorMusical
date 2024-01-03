from django.contrib import admin
from .models import Artista

# Register your models here.

models_list = [Artista]
admin.site.register(models_list)