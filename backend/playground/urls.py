from django.urls import path
from . import views

urlpatterns = [

    path('cats', views.cat, name='poets'),
    path('cats/<int:id>', views.cat_detail, name='poets-detail'),

    path('poems', views.poems, name='poems'),
    path('poems/<int:id>', views.poems_detail, name='poems-detail'),

    path('poets', views.poet, name='poets'),
    path('poets/<int:id>', views.poet_detail, name='poets-detail'),

    path('verses', views.verse, name='verses'),
    path('verses/<int:id>', views.verse_detail, name='verses-detail'),
]
