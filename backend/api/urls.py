from django.urls import path
from .schema import schema
from .views import set_csrf_token, CustomGraphQLView

urlpatterns = [
    path('graphql/', CustomGraphQLView.as_view(graphiql=True, schema=schema), name='graphql'),
    path('set-csrf-token/', set_csrf_token, name='set-csrf-token'),
]
