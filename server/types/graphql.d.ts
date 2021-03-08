import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type TestOne = {
  __typename?: 'TestOne';
  name?: Maybe<Scalars['String']>;
};

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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Quotes: ResolverTypeWrapper<Quotes>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Criteria: ResolverTypeWrapper<Criteria>;
  CriteriaMeta: ResolverTypeWrapper<CriteriaMeta>;
  MoversResult: ResolverTypeWrapper<MoversResult>;
  Finance: ResolverTypeWrapper<Finance>;
  RegularMarketPreviousClose: ResolverTypeWrapper<RegularMarketPreviousClose>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Spark: ResolverTypeWrapper<Spark>;
  RegularMarketTime: ResolverTypeWrapper<RegularMarketTime>;
  SummaryAndSparkResult: ResolverTypeWrapper<SummaryAndSparkResult>;
  MarketSummaryAndSparkResponse: ResolverTypeWrapper<MarketSummaryAndSparkResponse>;
  Region: Region;
  TestOne: ResolverTypeWrapper<TestOne>;
  Movers: ResolverTypeWrapper<Movers>;
  SummaryAndSpark: ResolverTypeWrapper<SummaryAndSpark>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Quotes: Quotes;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Criteria: Criteria;
  CriteriaMeta: CriteriaMeta;
  MoversResult: MoversResult;
  Finance: Finance;
  RegularMarketPreviousClose: RegularMarketPreviousClose;
  Float: Scalars['Float'];
  Spark: Spark;
  RegularMarketTime: RegularMarketTime;
  SummaryAndSparkResult: SummaryAndSparkResult;
  MarketSummaryAndSparkResponse: MarketSummaryAndSparkResponse;
  TestOne: TestOne;
  Movers: Movers;
  SummaryAndSpark: SummaryAndSpark;
  Query: {};
};

export type QuotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quotes'] = ResolversParentTypes['Quotes']> = {
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteSourceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTradeDateMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceHint?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullExchangeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchangeDataDelayedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchangeTimezoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  esgPopulated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tradeable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CriteriaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Criteria'] = ResolversParentTypes['Criteria']> = {
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelsSelected?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  operators?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CriteriaMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['CriteriaMeta'] = ResolversParentTypes['CriteriaMeta']> = {
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sortField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topOperator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  criteria?: Resolver<Maybe<Array<Maybe<ResolversTypes['Criteria']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoversResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoversResult'] = ResolversParentTypes['MoversResult']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawCriteria?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  predefinedScr?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  versionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Quotes']>>>, ParentType, ContextType>;
  criteriaMeta?: Resolver<Maybe<ResolversTypes['CriteriaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Finance'] = ResolversParentTypes['Finance']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['MoversResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularMarketPreviousCloseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularMarketPreviousClose'] = ResolversParentTypes['RegularMarketPreviousClose']> = {
  raw?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fmt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SparkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spark'] = ResolversParentTypes['Spark']> = {
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previousClose?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  chartPreviousClose?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dataGranularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  close?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularMarketTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularMarketTime'] = ResolversParentTypes['RegularMarketTime']> = {
  raw?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fmt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryAndSparkResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryAndSparkResult'] = ResolversParentTypes['SummaryAndSparkResult']> = {
  exchangeTimezoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullExchangeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstTradeDateMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchangeDataDelayedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceHint?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tradeable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  regularMarketPreviousClose?: Resolver<Maybe<ResolversTypes['RegularMarketPreviousClose']>, ParentType, ContextType>;
  spark?: Resolver<Maybe<ResolversTypes['Spark']>, ParentType, ContextType>;
  regularMarketTime?: Resolver<Maybe<ResolversTypes['RegularMarketTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketSummaryAndSparkResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketSummaryAndSparkResponse'] = ResolversParentTypes['MarketSummaryAndSparkResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['SummaryAndSparkResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestOneResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestOne'] = ResolversParentTypes['TestOne']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoversResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movers'] = ResolversParentTypes['Movers']> = {
  finance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryAndSparkResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryAndSpark'] = ResolversParentTypes['SummaryAndSpark']> = {
  marketSummaryAndSparkResponse?: Resolver<Maybe<ResolversTypes['MarketSummaryAndSparkResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  summaryAndSpark?: Resolver<Maybe<ResolversTypes['SummaryAndSpark']>, ParentType, ContextType, RequireFields<QuerySummaryAndSparkArgs, 'region'>>;
  movers?: Resolver<Maybe<ResolversTypes['Movers']>, ParentType, ContextType, RequireFields<QueryMoversArgs, 'region'>>;
};

export type Resolvers<ContextType = any> = {
  Quotes?: QuotesResolvers<ContextType>;
  Criteria?: CriteriaResolvers<ContextType>;
  CriteriaMeta?: CriteriaMetaResolvers<ContextType>;
  MoversResult?: MoversResultResolvers<ContextType>;
  Finance?: FinanceResolvers<ContextType>;
  RegularMarketPreviousClose?: RegularMarketPreviousCloseResolvers<ContextType>;
  Spark?: SparkResolvers<ContextType>;
  RegularMarketTime?: RegularMarketTimeResolvers<ContextType>;
  SummaryAndSparkResult?: SummaryAndSparkResultResolvers<ContextType>;
  MarketSummaryAndSparkResponse?: MarketSummaryAndSparkResponseResolvers<ContextType>;
  TestOne?: TestOneResolvers<ContextType>;
  Movers?: MoversResolvers<ContextType>;
  SummaryAndSpark?: SummaryAndSparkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
