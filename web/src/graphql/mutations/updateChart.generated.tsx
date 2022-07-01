import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type UpdateChartMutationVariables = Types.Exact<{
  input: Types.UpdateValueInput;
}>;

export type UpdateChartMutationResponse = { __typename?: 'Mutation' } & {
  updateChart: { __typename?: 'ChartEntity' } & Pick<
    Types.ChartEntity,
    'id' | 'orange' | 'blue' | 'gray' | 'black' | 'createdAt' | 'updatedAt'
  >;
};

export const UpdateChartDocument = gql`
  mutation updateChart($input: UpdateValueInput!) {
    updateChart(input: $input) {
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
export function useUpdateChartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateChartMutationResponse, UpdateChartMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateChartMutationResponse, UpdateChartMutationVariables>(
    UpdateChartDocument,
    baseOptions,
  );
}
export type UpdateChartMutationHookResult = ReturnType<typeof useUpdateChartMutation>;
export type UpdateChartMutationResult = ApolloReactCommon.MutationResult<UpdateChartMutationResponse>;
export type UpdateChartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateChartMutationResponse,
  UpdateChartMutationVariables
>;
