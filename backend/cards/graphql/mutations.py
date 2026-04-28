import graphene
from graphql import GraphQLError
from .types import TagType, FlashCardType
from ..models import Tag, FlashCard


class CreateTag(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        color = graphene.String(required=True)

    tag = graphene.Field(TagType)
    success = graphene.Boolean()

    def mutate(self, info, name, color):
        name = name.strip()
        color = color.strip()

        if not name:
            raise GraphQLError("Name is required")

        if not color:
            raise GraphQLError("Color is required")

        new_tag = Tag.objects.create(name=name, color=color)

        return CreateTag(tag=new_tag, success=True)
    
class CreateFlashCard(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        tags = graphene.List(graphene.ID)
        
    card = graphene.Field(FlashCardType)
    success = graphene.Boolean()
        
    def mutate(self, info, name, description, tags=None):
        name = name.strip()
        description = description.strip()
        
        if not name:
            raise GraphQLError("Name is required")
        
        if not description:
            raise GraphQLError("Description is required")
        
        new_card = FlashCard.objects.create(name=name, description=description)
        
        if tags:
            existing_tags = Tag.objects.filter(id__in=tags)
            new_card.tags.set(existing_tags)
        
        return CreateFlashCard(card=new_card, success=True)
            
