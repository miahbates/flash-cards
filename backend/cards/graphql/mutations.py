import graphene
from graphql import GraphQLError
from .types import TagType
from ..models import Tag


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
