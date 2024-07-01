from django.contrib import admin
from .models import Verse, Cat, Poem, Poet



class VerseAdmin(admin.ModelAdmin):
    autocomplete_fields = ['poem_id']
    list_display = ['text','poem_id','vorder','position']
    list_per_page = 16
    list_select_related = ['poem_id']
    list_filter = ['poem_id']
    search_fields = ['text']
    collapse_filter = True


class PoemAdmin(admin.ModelAdmin):
    list_display = ['title','artist']
    list_filter = ['artist']
    search_fields = ['title']

class CatAdmin(admin.ModelAdmin):
    fields = ['name', 'poet_id']
    list_display = ['name', 'poet_id', 'parent_id']
    list_filter = ['poet_id', 'name']
    search_fields = ['name']

admin.site.register(Cat, CatAdmin)

admin.site.register(Poem, PoemAdmin)

admin.site.register(Poet)

admin.site.register(Verse, VerseAdmin)
