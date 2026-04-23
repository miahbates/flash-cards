from graphene_django import DjangoObjectType

from cards.models import Tag


class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = ("id", "name", "color")
