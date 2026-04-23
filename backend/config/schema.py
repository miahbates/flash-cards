import graphene

from cards.schema import Query as CardsQuery


class Query(CardsQuery, graphene.ObjectType):
    health = graphene.String()

    def resolve_health(self, info):
        return "ok"


schema = graphene.Schema(query=Query)
