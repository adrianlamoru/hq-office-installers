# Generated by Django 2.2.1 on 2019-05-05 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hq_form', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='description',
            field=models.TextField(verbose_name='DESCRIPTION'),
        ),
        migrations.AlterField(
            model_name='data',
            name='warehouse',
            field=models.TextField(verbose_name='WAREHOUSE'),
        ),
    ]
