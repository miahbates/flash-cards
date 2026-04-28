import graphene

from cards.graphql.mutations import CreateFlashCard, CreateTag
from cards.graphql.queries import Query


class Mutation(graphene.ObjectType):
    create_tag = CreateTag.Field()
    create_card = CreateFlashCard.Field()
