# Generated by Django 4.2.13 on 2024-05-15 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_timeline'),
    ]

    operations = [
        migrations.AddField(
            model_name='enemy',
            name='arrival',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='start_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
