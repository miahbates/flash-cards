import { gql } from "@apollo/client";

const CreateTag = gql`
  mutation CreateTag($name: String!, $color: String!) {
    createTag(name: $name, color: $color) {
      tag {
        id
        name
        color
      }
      success
    }
  }
`;

export default CreateTag;
