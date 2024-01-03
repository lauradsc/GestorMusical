from.views import ArtistaViewSet
from django.urls import path


urlpatterns = [
    path('',  ArtistaViewSet.as_view()),
    path('<int:pk>/', ArtistaViewSet.as_view())
]