from rest_framework import serializers
from playground.models import Verse, Poem, Poet, Cat

class PoemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ['id', 'title', 'artist']
    artist = serializers.CharField(max_length=255)



class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cat
        fields = ['id', 'name']



class PoetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poet
        fields = ['id', 'name', 'description', 'cat_id']
    cat_id = CatSerializer()




class VerseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verse
        fields = ['id', 'vorder', 'position', 'text', 'poem_id']
    poem_id = PoemsSerializer()


