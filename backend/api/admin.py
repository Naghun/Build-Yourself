from django.contrib import admin
from .models import Player, Enemy, ExerciseType, Exercise, Timeline

class PlayerAdmin(admin.ModelAdmin):
    list_display = ['name', 'strength', 'intelligence', 'mental', 'arms', 'legs', 'stomach', 'back', 'picture']

class EnemyAdmin(admin.ModelAdmin):
    list_display = ['name', 'strength', 'intelligence', 'mental', 'arms', 'legs', 'stomach', 'back', 'picture', 'arrival']

class ExerciseTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'intensity']

class ExerciseAdmin(admin.ModelAdmin):
    list_display = ['name', 'difficulty', 'picture']
    filter_horizontal = ['exercise_type']

class TimelineAdmin(admin.ModelAdmin):
    list_display = ['player', 'start_date', 'current_day']

admin.site.register(Player, PlayerAdmin)
admin.site.register(Enemy, EnemyAdmin)
admin.site.register(ExerciseType, ExerciseTypeAdmin)
admin.site.register(Exercise, ExerciseAdmin)
admin.site.register(Timeline, TimelineAdmin)
