from graphene_django import DjangoObjectType

from cards.models import Tag, FlashCard


class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = ("id", "name", "color")
        
class FlashCardType(DjangoObjectType):
    
    class Meta:
        model = FlashCard
        fields = ("id", "name", "description", "tags")
