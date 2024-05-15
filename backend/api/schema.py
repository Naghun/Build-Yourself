import graphene
from graphene_django import DjangoObjectType
from .models import Player, Enemy, Exercise, Timeline

class PlayersType(DjangoObjectType):
    class Meta:
        model = Player
        fields = '__all__'
class EnemiesType(DjangoObjectType):
    class Meta:
        model = Enemy
        fields = '__all__'
class ExercisesType(DjangoObjectType):
    class Meta:
        model = Exercise
        fields = '__all__'
class TimelineType(DjangoObjectType):
    class Meta:
        model = Timeline
        fields = '__all__'


class Query(graphene.ObjectType):
    all_players = graphene.List(PlayersType)
    all_enemies = graphene.List(EnemiesType)
    all_exercises = graphene.List(ExercisesType)
    all_timelines = graphene.List(TimelineType)
    specific_player = graphene.Field(PlayersType, name=graphene.String())
    specific_enemy = graphene.Field(EnemiesType, name=graphene.String())
    specific_timeline = graphene.Field(TimelineType, name=graphene.String())

    def resolve_all_players(self, info):
        return Player.objects.all()
    
    def resolve_specific_player(self, info, name):
        return Player.objects.get(name=name)

    def resolve_all_enemies(self, info):
        return Enemy.objects.all()
    
    def resolve_specific_enemy(self, info, name):
        return Enemy.objects.get(name=name)

    def resolve_all_exercises(self, info):
        return Exercise.objects.all()
    
    def resolve_all_timelines(self, info):
        return Timeline.objects.all()
    
    def resolve_specific_timeline(self, info, name):
        return Timeline.objects.get(player__name=name)
    
schema = graphene.Schema(query=Query)