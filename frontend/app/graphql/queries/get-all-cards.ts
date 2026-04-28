import { gql } from "@apollo/client";

const GetAllCards = gql`
  query GetAllCards {
    allCards {
      id
      name
      description
      tags {
        id
        name
        color
      }
    }
  }
`;

export default GetAllCards;
