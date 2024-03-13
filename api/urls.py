from django.urls import path
from rest_framework import routers
from .views import Todoview,TodoDetail


urlpatterns = [
    path('todo/', Todoview.as_view(), name='todo'),
    path('todo/<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]
