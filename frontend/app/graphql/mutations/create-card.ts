import { gql } from "@apollo/client";

const CreateCard = gql`
  mutation CreateCard($name: String!, $description: String!, $tags: [ID]) {
    createCard(name: $name, description: $description, tags: $tags) {
      card {
        id
        name
        description
        tags {
          id
          name
          color
        }
      }
      success
    }
  }
`;

export default CreateCard;
