from rest_framework import serializers
from playground.models import Verse, Poem, Poet, Cat

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cat
        fields = ['id', 'name']
    name = serializers.CharField()


class PoemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ['id', 'title', 'artist']
    artist = serializers.CharField(max_length=255)


class PoetSerializer(serializers.ModelSerializer):
    cat_id = CatSerializer(read_only=True, many=True)

    class Meta:
        model = Poet
        fields = ['id', 'name', 'description', 'cat_id']


class VerseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verse
        fields = ['id', 'vorder', 'position', 'text', 'poem_id']
        many=True
    poem_id = PoemsSerializer()