import graphene
from .types import TagType
from ..models import Tag

class Query(graphene.ObjectType):
    all_tags = graphene.List(TagType)
    
    def resolve_all_tags(self, info):
        return Tag.objects.all()
    
