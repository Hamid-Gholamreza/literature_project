from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Poem, Verse, Cat, Poet
from .serializers import PoemsSerializer, VerseSerializer, PoetSerializer, CatSerializer



# def index(request):
#     poems = Verse.objects.filter(text__contains='کوکوکو').order_by()
    
#     print(poems)

#     return render(request, 'index.html', {'poems': list(poems)})


@api_view()
def cat(request):
    query_set = Cat.objects.all().order_by()
    serializer = CatSerializer(query_set, many=True)
    return Response(serializer.data)

@api_view()
def cat_detail(request, id):
    cat = get_object_or_404(Cat, pk=id)
    serializer = CatSerializer(cat)
    return Response(serializer.data)


@api_view()
def poems(request):
    query_set = Poem.objects.select_related('artist').all()
    serializer = PoemsSerializer(query_set, many=True)
    return Response(serializer.data)

@api_view()
def poems_detail(request, id):
    poems = get_object_or_404(Poem, pk=id)
    serializer = PoemsSerializer(poems)
    return Response(serializer.data)



@api_view()
def poet(request):
    query_set = Poet.objects.prefetch_related('cat_id').all()
    serializer = PoetSerializer(query_set, many=True)
    return Response(serializer.data)

@api_view()
def poet_detail(request, id):
    poet = get_object_or_404(Poet, pk=id)
    serializer = PoetSerializer(poet)
    return Response(serializer.data)




@api_view()
def verse(request):
    query_set = Verse.objects.select_related('poem_id').all()
    serializer = VerseSerializer(query_set, many=True)
    return Response(serializer.data)

@api_view()
def verse_detail(request, id):
    query_set = Verse.objects.filter(poem_id=id)
    serializer = VerseSerializer(query_set, many=True)
    return Response(serializer.data)