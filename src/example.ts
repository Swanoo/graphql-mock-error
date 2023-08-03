import { gql } from 'graphql-tag'

export const GET_USER = gql`
    query GetUser($id: String!) {
        getUser(id: $id) {
            id
            events {
                startDate
                endDate
            }
        }
    }
`