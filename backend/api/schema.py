import graphene
from graphene_django import DjangoObjectType
from .models import Player, Enemy, Exercise, ExerciseType

class PlayersType(DjangoObjectType):
    class Meta:
        model = Player
        fields = ("id", "name" , "strength", "intelligence", "mental", "arms", "legs", "stomach", "back", 'picture')


class Query(graphene.ObjectType):
    all_players = graphene.List(PlayersType)
    def resolve_all_players(self, info):
        return Player.objects.all()

schema = graphene.Schema(query=Query)