# Generated by Django 4.2.13 on 2024-05-15 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_enemy_arrival_player_start_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enemy',
            name='arrival',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
