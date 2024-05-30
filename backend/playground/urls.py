from django.urls import path
from . import views

urlpatterns = [
    path('poems', views.poems, name='poems'),
    path('poems/<int:id>', views.poems_detail, name='poems-detail'),

    path('verses', views.verse, name='verses'),
    path('verses/<int:id>', views.verse_detail, name='verses-detail'),
]
