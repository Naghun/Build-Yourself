from django.utils import timezone
from django.utils.deprecation import MiddlewareMixin
from .models import Player, Timeline

class SetStartDateMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.user.is_authenticated:
            player_name = request.user.username
            try:
                timeline = Timeline.objects.get(player__name=player_name)
            except Timeline.DoesNotExist:
                timeline = None
                
            if timeline and timeline.start_date is None:
                timeline.start_date = timezone.now()
                timeline.save()