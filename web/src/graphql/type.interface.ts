export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChartEntity = Node & {
  __typename?: 'ChartEntity';
  id: Scalars['ID'];
  orange: Scalars['Float'];
  blue: Scalars['Float'];
  gray: Scalars['Float'];
  black: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum KeyTypeEnum {
  ORANGE = 'ORANGE',
  BLUE = 'BLUE',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Get current chart data */
  updateChart: ChartEntity;
};

export type MutationupdateChartArgs = {
  input: UpdateValueInput;
};

/** Node */
export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Get current chart data */
  chart: ChartEntity;
};

export type Subscription = {
  __typename?: 'Subscription';
  updateDataChart: ChartEntity;
};

export type UpdateValueInput = {
  type: KeyTypeEnum;
  value: Scalars['Float'];
};
