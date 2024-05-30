from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Poem, Verse, Cat, Poet
from .serializers import PoemsSerializer, VerseSerializer, PoetSerializer, CatSerializer




class CatView(generics.ListAPIView):
    queryset = Cat.objects.all().order_by()
    serializer_class = CatSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name']

@api_view()
def cat_detail(request, id):
    cat = get_object_or_404(Cat, pk=id)
    serializer = CatSerializer(cat)
    return Response(serializer.data)

class CatDetailView(generics.RetrieveAPIView):
    """
    Retrieve a cat instance.
    """
    queryset = Cat.objects.all()
    serializer_class = CatSerializer
    lookup_field = 'id'


class PoemsView(generics.ListAPIView):
    queryset = Poem.objects.select_related('artist')
    serializer_class = PoemsSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['artist']
    search_fields = ['title']

class PoemDetailView(generics.RetrieveAPIView):
    """
    Retrieve a poem instance.
    """
    queryset = Poem.objects.all()
    serializer_class = PoemsSerializer
    lookup_field = 'id'



class PoetView(generics.ListAPIView):
    queryset = Poet.objects.prefetch_related('cat_id').all()
    serializer_class = PoetSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name']

class PoetDetailView(generics.RetrieveAPIView):
    queryset = Poet.objects.all()
    serializer_class = PoetSerializer
    lookup_field = 'id'





class VerseListView(generics.ListAPIView):
    """
    List verses with optional filtering.
    """
    queryset = Verse.objects.select_related('poem_id')
    serializer_class = VerseSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['text', 'poem_id']
    search_fields = ['text']
    ordering_fields = ['poem_id']

    def get(self, request, *args, **kwargs):
        text = self.request.GET.get('text')
        if text:
            filtered_queryset = self.queryset.filter(text__icontains=text)
            
            serializer = VerseSerializer(filtered_queryset, many=True)
            return Response(serializer.data)
        else:
            return super().get(request, *args, **kwargs)
            
@api_view()
def verse_detail(request, id):
    query_set = Verse.objects.filter(poem_id=id)
    serializer = VerseSerializer(query_set, many=True)
    return Response(serializer.data)