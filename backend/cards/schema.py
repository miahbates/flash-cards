import graphene

from cards.graphql.mutations import CreateTag
from cards.graphql.queries import Query


class Mutation(graphene.ObjectType):
    create_tag = CreateTag.Field()
