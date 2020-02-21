from django.contrib import admin
from .models import DeliveryModel, SafeKeepingModel, WarehousingModel

admin.site.register(DeliveryModel)
admin.site.register(SafeKeepingModel)
admin.site.register(WarehousingModel)
