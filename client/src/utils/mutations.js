import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtTitle:String,$postcode:Int,$thoughtText:String,$maplink:String,$state:String) {
    addThought(thoughtTitle:$thoughtTitle,postcode:$postcode,thoughtText:$thoughtText,maplink:$maplink,state:$state) {
      _id
      thoughtTitle
      postcode
      thoughtText
      maplink
      thoughtAuthor
      createdAt
      state
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtTitle
      postcode
      thoughtText
      maplink
      thoughtAuthor
      createdAt
      state
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
