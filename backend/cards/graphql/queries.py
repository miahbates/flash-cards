import graphene
from .types import TagType, FlashCardType
from ..models import Tag, FlashCard

class Query(graphene.ObjectType):
    all_tags = graphene.List(TagType)
    
    def resolve_all_tags(self, info):
        return Tag.objects.all()
    
    all_cards = graphene.List(FlashCardType)
    
    def resolve_all_cards(self, info):
        return FlashCard.objects.all()