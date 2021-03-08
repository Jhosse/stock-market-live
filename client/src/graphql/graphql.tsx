import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  language?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  quoteType?: Maybe<Scalars['String']>;
  quoteSourceName?: Maybe<Scalars['String']>;
  triggerable?: Maybe<Scalars['Boolean']>;
  firstTradeDateMilliseconds?: Maybe<Scalars['Int']>;
  priceHint?: Maybe<Scalars['Int']>;
  exchange?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  fullExchangeName?: Maybe<Scalars['String']>;
  marketState?: Maybe<Scalars['String']>;
  sourceInterval?: Maybe<Scalars['Int']>;
  exchangeDataDelayedBy?: Maybe<Scalars['Int']>;
  exchangeTimezoneName?: Maybe<Scalars['String']>;
  exchangeTimezoneShortName?: Maybe<Scalars['String']>;
  gmtOffSetMilliseconds?: Maybe<Scalars['Int']>;
  esgPopulated?: Maybe<Scalars['Boolean']>;
  tradeable?: Maybe<Scalars['Boolean']>;
  symbol?: Maybe<Scalars['String']>;
};

export type Criteria = {
  __typename?: 'Criteria';
  field?: Maybe<Scalars['String']>;
  labelsSelected?: Maybe<Array<Maybe<Scalars['Int']>>>;
  values?: Maybe<Array<Maybe<Scalars['Int']>>>;
  operators?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CriteriaMeta = {
  __typename?: 'CriteriaMeta';
  size?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortType?: Maybe<Scalars['String']>;
  quoteType?: Maybe<Scalars['String']>;
  topOperator?: Maybe<Scalars['String']>;
  criteria?: Maybe<Array<Maybe<Criteria>>>;
};

export type MoversResult = {
  __typename?: 'MoversResult';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  canonicalName?: Maybe<Scalars['String']>;
  rawCriteria?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  predefinedScr?: Maybe<Scalars['Boolean']>;
  versionId?: Maybe<Scalars['Int']>;
  quotes?: Maybe<Array<Maybe<Quotes>>>;
  criteriaMeta?: Maybe<CriteriaMeta>;
};

export type Finance = {
  __typename?: 'Finance';
  error?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<MoversResult>>>;
};

export type RegularMarketPreviousClose = {
  __typename?: 'RegularMarketPreviousClose';
  raw?: Maybe<Scalars['Float']>;
  fmt?: Maybe<Scalars['String']>;
};

export type Spark = {
  __typename?: 'Spark';
  symbol?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  previousClose?: Maybe<Scalars['Float']>;
  chartPreviousClose?: Maybe<Scalars['Float']>;
  dataGranularity?: Maybe<Scalars['Int']>;
  close?: Maybe<Array<Maybe<Scalars['Float']>>>;
  timestamp?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type RegularMarketTime = {
  __typename?: 'RegularMarketTime';
  raw?: Maybe<Scalars['Int']>;
  fmt?: Maybe<Scalars['String']>;
};

export type SummaryAndSparkResult = {
  __typename?: 'SummaryAndSparkResult';
  exchangeTimezoneName?: Maybe<Scalars['String']>;
  fullExchangeName?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  gmtOffSetMilliseconds?: Maybe<Scalars['Int']>;
  firstTradeDateMilliseconds?: Maybe<Scalars['Int']>;
  exchangeDataDelayedBy?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  exchangeTimezoneShortName?: Maybe<Scalars['String']>;
  quoteType?: Maybe<Scalars['String']>;
  marketState?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  priceHint?: Maybe<Scalars['Int']>;
  tradeable?: Maybe<Scalars['Boolean']>;
  exchange?: Maybe<Scalars['String']>;
  sourceInterval?: Maybe<Scalars['Int']>;
  shortName?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  triggerable?: Maybe<Scalars['Boolean']>;
  regularMarketPreviousClose?: Maybe<RegularMarketPreviousClose>;
  spark?: Maybe<Spark>;
  regularMarketTime?: Maybe<RegularMarketTime>;
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
  finance?: Maybe<Finance>;
};

export type SummaryAndSpark = {
  __typename?: 'SummaryAndSpark';
  marketSummaryAndSparkResponse?: Maybe<MarketSummaryAndSparkResponse>;
};

export type Query = {
  __typename?: 'Query';
  summaryAndSpark?: Maybe<SummaryAndSpark>;
  movers?: Maybe<Movers>;
};


export type QuerySummaryAndSparkArgs = {
  region: Region;
};


export type QueryMoversArgs = {
  region: Region;
};

export type GetMoversQueryVariables = Exact<{
  region: Region;
}>;


export type GetMoversQuery = (
  { __typename?: 'Query' }
  & { movers?: Maybe<(
    { __typename?: 'Movers' }
    & { finance?: Maybe<(
      { __typename?: 'Finance' }
      & { result?: Maybe<Array<Maybe<(
        { __typename?: 'MoversResult' }
        & Pick<MoversResult, 'id' | 'title' | 'description'>
        & { quotes?: Maybe<Array<Maybe<(
          { __typename?: 'Quotes' }
          & Pick<Quotes, 'symbol' | 'market' | 'marketState'>
        )>>> }
      )>>> }
    )> }
  )> }
);

export type GetSummaryAndSparkQueryVariables = Exact<{
  region: Region;
}>;


export type GetSummaryAndSparkQuery = (
  { __typename?: 'Query' }
  & { summaryAndSpark?: Maybe<(
    { __typename?: 'SummaryAndSpark' }
    & { marketSummaryAndSparkResponse?: Maybe<(
      { __typename?: 'MarketSummaryAndSparkResponse' }
      & { result?: Maybe<Array<Maybe<(
        { __typename?: 'SummaryAndSparkResult' }
        & Pick<SummaryAndSparkResult, 'symbol'>
      )>>> }
    )> }
  )> }
);


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