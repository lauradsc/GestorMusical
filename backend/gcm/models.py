from django.db import models

# Create your models here.

class Artista(models.Model):
    ArtistaID = models.AutoField(primary_key=True)
    Nome = models.CharField(max_length=100)
    Tipo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Tipo_documento = models.CharField(max_length=100)
