import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Quotes = {
  __typename?: 'Quotes';
  language: Scalars['String'];
  region: Scalars['String'];
  quoteType: Scalars['String'];
  quoteSourceName?: Maybe<Scalars['String']>;
  triggerable: Scalars['Boolean'];
  firstTradeDateMilliseconds?: Maybe<Scalars['Int']>;
  priceHint: Scalars['Int'];
  exchange: Scalars['String'];
  market: Scalars['String'];
  fullExchangeName: Scalars['String'];
  marketState: Scalars['String'];
  sourceInterval: Scalars['Int'];
  exchangeDataDelayedBy: Scalars['Int'];
  exchangeTimezoneName: Scalars['String'];
  exchangeTimezoneShortName: Scalars['String'];
  gmtOffSetMilliseconds: Scalars['Int'];
  esgPopulated: Scalars['Boolean'];
  tradeable: Scalars['Boolean'];
  symbol: Scalars['String'];
};

export type Criteria = {
  __typename?: 'Criteria';
  field: Scalars['String'];
  labelsSelected: Array<Maybe<Scalars['Int']>>;
  values: Array<Maybe<Scalars['Int']>>;
  operators: Array<Maybe<Scalars['String']>>;
};

export type CriteriaMeta = {
  __typename?: 'CriteriaMeta';
  size: Scalars['Int'];
  offset: Scalars['Int'];
  sortField: Scalars['String'];
  sortType: Scalars['String'];
  quoteType: Scalars['String'];
  topOperator: Scalars['String'];
  criteria: Array<Maybe<Criteria>>;
};

export type MoversResult = {
  __typename?: 'MoversResult';
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  canonicalName: Scalars['String'];
  rawCriteria: Scalars['String'];
  start: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Int'];
  predefinedScr: Scalars['Boolean'];
  versionId: Scalars['Int'];
  quotes: Array<Maybe<Quotes>>;
  criteriaMeta: CriteriaMeta;
};

export type Finance = {
  __typename?: 'Finance';
  error?: Maybe<Scalars['String']>;
  result: Array<Maybe<MoversResult>>;
};

export type RegularMarketPreviousClose = {
  __typename?: 'RegularMarketPreviousClose';
  raw: Scalars['Float'];
  fmt: Scalars['String'];
};

export type Spark = {
  __typename?: 'Spark';
  symbol: Scalars['String'];
  end: Scalars['Int'];
  start: Scalars['Int'];
  previousClose: Scalars['Float'];
  chartPreviousClose: Scalars['Float'];
  dataGranularity: Scalars['Int'];
  close: Array<Maybe<Scalars['Float']>>;
  timestamp: Array<Maybe<Scalars['Int']>>;
};

export type RegularMarketTime = {
  __typename?: 'RegularMarketTime';
  raw: Scalars['Int'];
  fmt: Scalars['String'];
};

export type SummaryAndSparkResult = {
  __typename?: 'SummaryAndSparkResult';
  exchangeTimezoneName: Scalars['String'];
  fullExchangeName: Scalars['String'];
  symbol: Scalars['String'];
  gmtOffSetMilliseconds: Scalars['Int'];
  firstTradeDateMilliseconds?: Maybe<Scalars['Int']>;
  exchangeDataDelayedBy: Scalars['Int'];
  language: Scalars['String'];
  exchangeTimezoneShortName: Scalars['String'];
  quoteType: Scalars['String'];
  marketState: Scalars['String'];
  market: Scalars['String'];
  priceHint: Scalars['Int'];
  tradeable: Scalars['Boolean'];
  exchange: Scalars['String'];
  sourceInterval: Scalars['Int'];
  shortName?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  triggerable: Scalars['Boolean'];
  regularMarketPreviousClose: RegularMarketPreviousClose;
  spark: Spark;
  regularMarketTime: RegularMarketTime;
};

export type MarketSummaryAndSparkResponse = {
  __typename?: 'MarketSummaryAndSparkResponse';
  error?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<SummaryAndSparkResult>>>;
};

export enum Region {
  Us = 'US',
  Gb = 'GB',
  Hk = 'HK'
}

export type Movers = {
  __typename?: 'Movers';
  finance: Finance;
};

export type SummaryAndSpark = {
  __typename?: 'SummaryAndSpark';
  marketSummaryAndSparkResponse: MarketSummaryAndSparkResponse;
};

export type Query = {
  __typename?: 'Query';
  summaryAndSpark: SummaryAndSpark;
  movers: Movers;
  allMovers: Array<Maybe<Movers>>;
};


export type QuerySummaryAndSparkArgs = {
  region: Region;
};


export type QueryMoversArgs = {
  region: Region;
};


export type QueryAllMoversArgs = {
  regions: Array<Maybe<Region>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetAllMoversQueryVariables = Exact<{
  regions: Array<Maybe<Region>> | Maybe<Region>;
}>;


export type GetAllMoversQuery = (
  { __typename?: 'Query' }
  & { allMovers: Array<Maybe<(
    { __typename?: 'Movers' }
    & { finance: (
      { __typename?: 'Finance' }
      & { result: Array<Maybe<(
        { __typename?: 'MoversResult' }
        & Pick<MoversResult, 'id' | 'title' | 'description'>
        & { quotes: Array<Maybe<(
          { __typename?: 'Quotes' }
          & Pick<Quotes, 'symbol' | 'market' | 'marketState' | 'tradeable' | 'exchange' | 'quoteType'>
        )>> }
      )>> }
    ) }
  )>> }
);

export type GetMoversQueryVariables = Exact<{
  region: Region;
}>;


export type GetMoversQuery = (
  { __typename?: 'Query' }
  & { movers: (
    { __typename?: 'Movers' }
    & { finance: (
      { __typename?: 'Finance' }
      & { result: Array<Maybe<(
        { __typename?: 'MoversResult' }
        & Pick<MoversResult, 'id' | 'title' | 'description'>
        & { quotes: Array<Maybe<(
          { __typename?: 'Quotes' }
          & Pick<Quotes, 'symbol' | 'market' | 'marketState'>
        )>> }
      )>> }
    ) }
  ) }
);

export type GetSummaryAndSparkQueryVariables = Exact<{
  region: Region;
}>;


export type GetSummaryAndSparkQuery = (
  { __typename?: 'Query' }
  & { summaryAndSpark: (
    { __typename?: 'SummaryAndSpark' }
    & { marketSummaryAndSparkResponse: (
      { __typename?: 'MarketSummaryAndSparkResponse' }
      & { result?: Maybe<Array<Maybe<(
        { __typename?: 'SummaryAndSparkResult' }
        & Pick<SummaryAndSparkResult, 'symbol'>
      )>>> }
    ) }
  ) }
);


export const GetAllMoversDocument = gql`
    query GetAllMovers($regions: [Region]!) {
  allMovers(regions: $regions) {
    finance {
      result {
        id
        title
        description
        quotes {
          symbol
          market
          marketState
          tradeable
          exchange
          quoteType
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllMoversQuery__
 *
 * To run a query within a React component, call `useGetAllMoversQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMoversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMoversQuery({
 *   variables: {
 *      regions: // value for 'regions'
 *   },
 * });
 */
export function useGetAllMoversQuery(baseOptions: Apollo.QueryHookOptions<GetAllMoversQuery, GetAllMoversQueryVariables>) {
        return Apollo.useQuery<GetAllMoversQuery, GetAllMoversQueryVariables>(GetAllMoversDocument, baseOptions);
      }
export function useGetAllMoversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMoversQuery, GetAllMoversQueryVariables>) {
          return Apollo.useLazyQuery<GetAllMoversQuery, GetAllMoversQueryVariables>(GetAllMoversDocument, baseOptions);
        }
export type GetAllMoversQueryHookResult = ReturnType<typeof useGetAllMoversQuery>;
export type GetAllMoversLazyQueryHookResult = ReturnType<typeof useGetAllMoversLazyQuery>;
export type GetAllMoversQueryResult = Apollo.QueryResult<GetAllMoversQuery, GetAllMoversQueryVariables>;
export const GetMoversDocument = gql`
    query GetMovers($region: Region!) {
  movers(region: $region) {
    finance {
      result {
        id
        title
        description
        quotes {
          symbol
          market
          marketState
        }
      }
    }
  }
}
    `;

/**
 * __useGetMoversQuery__
 *
 * To run a query within a React component, call `useGetMoversQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoversQuery({
 *   variables: {
 *      region: // value for 'region'
 *   },
 * });
 */
export function useGetMoversQuery(baseOptions: Apollo.QueryHookOptions<GetMoversQuery, GetMoversQueryVariables>) {
        return Apollo.useQuery<GetMoversQuery, GetMoversQueryVariables>(GetMoversDocument, baseOptions);
      }
export function useGetMoversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoversQuery, GetMoversQueryVariables>) {
          return Apollo.useLazyQuery<GetMoversQuery, GetMoversQueryVariables>(GetMoversDocument, baseOptions);
        }
export type GetMoversQueryHookResult = ReturnType<typeof useGetMoversQuery>;
export type GetMoversLazyQueryHookResult = ReturnType<typeof useGetMoversLazyQuery>;
export type GetMoversQueryResult = Apollo.QueryResult<GetMoversQuery, GetMoversQueryVariables>;
export const GetSummaryAndSparkDocument = gql`
    query GetSummaryAndSpark($region: Region!) {
  summaryAndSpark(region: $region) {
    marketSummaryAndSparkResponse {
      result {
        symbol
      }
    }
  }
}
    `;

/**
 * __useGetSummaryAndSparkQuery__
 *
 * To run a query within a React component, call `useGetSummaryAndSparkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSummaryAndSparkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSummaryAndSparkQuery({
 *   variables: {
 *      region: // value for 'region'
 *   },
 * });
 */
export function useGetSummaryAndSparkQuery(baseOptions: Apollo.QueryHookOptions<GetSummaryAndSparkQuery, GetSummaryAndSparkQueryVariables>) {
        return Apollo.useQuery<GetSummaryAndSparkQuery, GetSummaryAndSparkQueryVariables>(GetSummaryAndSparkDocument, baseOptions);
      }
export function useGetSummaryAndSparkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSummaryAndSparkQuery, GetSummaryAndSparkQueryVariables>) {
          return Apollo.useLazyQuery<GetSummaryAndSparkQuery, GetSummaryAndSparkQueryVariables>(GetSummaryAndSparkDocument, baseOptions);
        }
export type GetSummaryAndSparkQueryHookResult = ReturnType<typeof useGetSummaryAndSparkQuery>;
export type GetSummaryAndSparkLazyQueryHookResult = ReturnType<typeof useGetSummaryAndSparkLazyQuery>;
export type GetSummaryAndSparkQueryResult = Apollo.QueryResult<GetSummaryAndSparkQuery, GetSummaryAndSparkQueryVariables>;