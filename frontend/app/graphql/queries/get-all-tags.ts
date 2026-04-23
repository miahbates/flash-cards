import { gql } from "@apollo/client";

const GetAllTags = gql`
  query GetAllTags {
    allTags {
      id
      name
      color
    }
  }
`;

export default GetAllTags;
