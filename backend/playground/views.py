from django.shortcuts import render
from .models import Verse, Poem

def index(request):
    poems = Verse.objects.filter(text__contains='کوکوکو').order_by()
    
    print(poems)

    return render(request, 'index.html', {'poems': list(poems)})