from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'message': 'CSRF cookie set'})

class CustomGraphQLView(GraphQLView):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

