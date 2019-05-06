from django.db import models

# Create your models here.

class Data(models.Model):
    po = models.CharField(max_length=20,  verbose_name="PO")
    date = models.DateField(verbose_name="DATE")
    supervisor = models.CharField(max_length=20,  verbose_name="SUPERVISOR")
    description = models.TextField( verbose_name="DESCRIPTION")
    qty = models.CharField(max_length=20,  verbose_name="QTY")
    truck = models.CharField(max_length=20,  verbose_name="TRUCK") 
    location  = models.CharField(max_length=20,  verbose_name="LOCATION")
    warehouse = models.TextField( verbose_name="WAREHOUSE")

    def __str__(self):
        return self.po
