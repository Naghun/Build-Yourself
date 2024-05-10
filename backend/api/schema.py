import graphene
from graphene_django import DjangoObjectType
from .models import Player, Enemy, Exercise

class PlayersType(DjangoObjectType):
    class Meta:
        model = Player
        fields = '__all__'
class EnemiesType(DjangoObjectType):
    class Meta:
        model = Player
        fields = '__all__'
class ExercisesType(DjangoObjectType):
    class Meta:
        model = Player
        fields = '__all__'


class Query(graphene.ObjectType):
    all_players = graphene.List(PlayersType)
    all_enemies = graphene.List(EnemiesType)
    all_exercises = graphene.List(ExercisesType)

    def resolve_all_players(self, info):
        return Player.objects.all()

    def resolve_all_enemies(self, info):
        return Enemy.objects.all()

    def resolve_all_exercises(self, info):
        return Exercise.objects.all()
    
schema = graphene.Schema(query=Query)