from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Player, Timeline

@receiver(post_save, sender=User)
def create_player(sender, instance, created, **kwargs):
    if created:
        player = Player.objects.create(
            user=instance,
            name=instance.username,
            picture = 'Naghun.png'
        )
        Timeline.objects.create(player=player)