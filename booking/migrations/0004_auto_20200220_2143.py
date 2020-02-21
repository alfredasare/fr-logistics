# Generated by Django 3.0.3 on 2020-02-20 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0003_deliveryform_safekeepingform_warehousingform'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=30)),
                ('location_from', models.CharField(max_length=150)),
                ('location_to', models.CharField(max_length=150)),
                ('items_list', models.TextField()),
            ],
            options={
                'verbose_name': 'Delivery data',
                'verbose_name_plural': 'Delivery data',
            },
        ),
        migrations.CreateModel(
            name='SafeKeepingModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=30)),
                ('location_from', models.CharField(max_length=150)),
                ('date', models.DateField()),
                ('items_list', models.TextField()),
            ],
            options={
                'verbose_name': 'Safekeeping data',
                'verbose_name_plural': 'Safekeeping data',
            },
        ),
        migrations.CreateModel(
            name='WarehousingModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('name_of_business', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=30)),
                ('location_from', models.CharField(max_length=150)),
                ('items_list', models.TextField()),
            ],
            options={
                'verbose_name': 'Warehousing data',
                'verbose_name_plural': 'Warehousing data',
            },
        ),
        migrations.DeleteModel(
            name='DeliveryForm',
        ),
        migrations.DeleteModel(
            name='SafeKeepingForm',
        ),
        migrations.DeleteModel(
            name='WareHousingForm',
        ),
    ]
