import graphene

from cards.schema import Mutation as CardsMutation
from cards.schema import Query as CardsQuery


class Query(CardsQuery, graphene.ObjectType):
    health = graphene.String()

    def resolve_health(self, info):
        return "ok"


class Mutation(CardsMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
