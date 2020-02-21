from django.db import models


class DeliveryModel(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    contact = models.CharField(max_length=30)
    location_from = models.CharField(max_length=150)
    location_to = models.CharField(max_length=150)
    items_list = models.TextField()

    class Meta:
        verbose_name = 'Delivery data'
        verbose_name_plural = 'Delivery data'

    def __str__(self):
        return self.name


class SafeKeepingModel(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    contact = models.CharField(max_length=30)
    location_from = models.CharField(max_length=150)
    date = models.DateField()
    items_list = models.TextField()

    class Meta:
        verbose_name = 'Safekeeping data'
        verbose_name_plural = 'Safekeeping data'

    def __str__(self):
        return self.name


class WarehousingModel(models.Model):
    name = models.CharField(max_length=150)
    name_of_business = models.CharField(max_length=150)
    email = models.EmailField()
    contact = models.CharField(max_length=30)
    location_from = models.CharField(max_length=150)
    items_list = models.TextField()

    class Meta:
        verbose_name = 'Warehousing data'
        verbose_name_plural = 'Warehousing data'

    def __str__(self):
        return self.name
