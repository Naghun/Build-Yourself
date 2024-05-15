# Generated by Django 4.2.13 on 2024-05-15 12:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_player_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='start_date',
        ),
        migrations.AlterField(
            model_name='timeline',
            name='start_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
    ]