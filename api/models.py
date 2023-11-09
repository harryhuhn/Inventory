from django.db import models

class Item(models.Model):
    partNumber = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    BT = models.CharField(max_length=255, null=True, blank=True)
    PTR = models.CharField(max_length=255, null=True, blank=True)
    CAC = models.CharField(max_length=255, null=True, blank=True)
