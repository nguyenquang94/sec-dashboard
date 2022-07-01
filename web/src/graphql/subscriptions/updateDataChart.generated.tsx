import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type UpdateDataChartSubscriptionVariables = Types.Exact<{ [key: string]: never }>;

export type UpdateDataChartSubscriptionResponse = { __typename?: 'Subscription' } & {
  updateDataChart: { __typename?: 'ChartEntity' } & Pick<
    Types.ChartEntity,
    'id' | 'orange' | 'blue' | 'gray' | 'black' | 'createdAt' | 'updatedAt'
  >;
};

export const UpdateDataChartDocument = gql`
  subscription updateDataChart {
    updateDataChart {
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
export function useUpdateDataChartSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    UpdateDataChartSubscriptionResponse,
    UpdateDataChartSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<UpdateDataChartSubscriptionResponse, UpdateDataChartSubscriptionVariables>(
    UpdateDataChartDocument,
    baseOptions,
  );
}
export type UpdateDataChartSubscriptionHookResult = ReturnType<typeof useUpdateDataChartSubscription>;
export type UpdateDataChartSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  UpdateDataChartSubscriptionResponse
>;
