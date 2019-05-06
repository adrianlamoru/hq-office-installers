# Generated by Django 2.2.1 on 2019-05-04 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('po', models.CharField(max_length=20, verbose_name='PO')),
                ('date', models.DateField(verbose_name='DATE')),
                ('supervisor', models.CharField(max_length=20, verbose_name='SUPERVISOR')),
                ('description', models.TextField(max_length=20, verbose_name='DESCRIPTION')),
                ('qty', models.CharField(max_length=20, verbose_name='QTY')),
                ('truck', models.CharField(max_length=20, verbose_name='TRUCK')),
                ('location', models.CharField(max_length=20, verbose_name='LOCATION')),
                ('warehouse', models.TextField(max_length=20, verbose_name='WAREHOUSE')),
            ],
        ),
    ]