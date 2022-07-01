import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ChartQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ChartQueryResponse = { __typename?: 'Query' } & {
  chart: { __typename?: 'ChartEntity' } & Pick<
    Types.ChartEntity,
    'id' | 'orange' | 'blue' | 'gray' | 'black' | 'createdAt' | 'updatedAt'
  >;
};

export const ChartDocument = gql`
  query chart {
    chart {
      id
      orange
      blue
      gray
      black
      createdAt
      updatedAt
    }
  }
`;
export function useChartQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ChartQueryResponse, ChartQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ChartQueryResponse, ChartQueryVariables>(ChartDocument, baseOptions);
}
export function useChartLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChartQueryResponse, ChartQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ChartQueryResponse, ChartQueryVariables>(ChartDocument, baseOptions);
}
export type ChartQueryHookResult = ReturnType<typeof useChartQuery>;
export type ChartLazyQueryHookResult = ReturnType<typeof useChartLazyQuery>;
export type ChartQueryResult = ApolloReactCommon.QueryResult<ChartQueryResponse, ChartQueryVariables>;
