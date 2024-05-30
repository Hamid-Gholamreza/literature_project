from django.urls import path
from . import views

urlpatterns = [

    path('cats', views.CatView.as_view(), name='poets'),
    path('cats/<int:id>', views.cat_detail, name='poets-detail'),

    path('poems', views.PoemsView.as_view(), name='poems'),
    path('poems/<int:id>', views.PoemDetailView.as_view(), name='poems-detail'),

    path('poets', views.PoetView.as_view(), name='poets'),
    path('poets/<int:id>', views.PoetDetailView.as_view(), name='poets-detail'),

    path('verses', views.VerseListView.as_view(), name='verses'),
    path('verses/<int:id>', views.verse_detail, name='verses-detail'),
]
