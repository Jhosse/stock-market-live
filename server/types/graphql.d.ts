import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T;
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
  Movers: Movers;
  SummaryAndSpark: SummaryAndSpark;
  Query: {};
};

export type QuotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quotes'] = ResolversParentTypes['Quotes']> = {
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quoteType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quoteSourceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTradeDateMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceHint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  exchange?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullExchangeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceInterval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  exchangeDataDelayedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  exchangeTimezoneName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  esgPopulated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tradeable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CriteriaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Criteria'] = ResolversParentTypes['Criteria']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelsSelected?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  operators?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CriteriaMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['CriteriaMeta'] = ResolversParentTypes['CriteriaMeta']> = {
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sortField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quoteType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topOperator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  criteria?: Resolver<Array<Maybe<ResolversTypes['Criteria']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoversResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoversResult'] = ResolversParentTypes['MoversResult']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canonicalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawCriteria?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  predefinedScr?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  versionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quotes?: Resolver<Array<Maybe<ResolversTypes['Quotes']>>, ParentType, ContextType>;
  criteriaMeta?: Resolver<ResolversTypes['CriteriaMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Finance'] = ResolversParentTypes['Finance']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Array<Maybe<ResolversTypes['MoversResult']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularMarketPreviousCloseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularMarketPreviousClose'] = ResolversParentTypes['RegularMarketPreviousClose']> = {
  raw?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fmt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SparkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spark'] = ResolversParentTypes['Spark']> = {
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previousClose?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  chartPreviousClose?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataGranularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  close?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  timestamp?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularMarketTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularMarketTime'] = ResolversParentTypes['RegularMarketTime']> = {
  raw?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fmt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryAndSparkResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryAndSparkResult'] = ResolversParentTypes['SummaryAndSparkResult']> = {
  exchangeTimezoneName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullExchangeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstTradeDateMilliseconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchangeDataDelayedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quoteType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceHint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tradeable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exchange?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceInterval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  triggerable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  regularMarketPreviousClose?: Resolver<ResolversTypes['RegularMarketPreviousClose'], ParentType, ContextType>;
  spark?: Resolver<ResolversTypes['Spark'], ParentType, ContextType>;
  regularMarketTime?: Resolver<ResolversTypes['RegularMarketTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketSummaryAndSparkResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketSummaryAndSparkResponse'] = ResolversParentTypes['MarketSummaryAndSparkResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['SummaryAndSparkResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoversResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movers'] = ResolversParentTypes['Movers']> = {
  finance?: Resolver<ResolversTypes['Finance'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryAndSparkResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryAndSpark'] = ResolversParentTypes['SummaryAndSpark']> = {
  marketSummaryAndSparkResponse?: Resolver<ResolversTypes['MarketSummaryAndSparkResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  summaryAndSpark?: Resolver<ResolversTypes['SummaryAndSpark'], ParentType, ContextType, RequireFields<QuerySummaryAndSparkArgs, 'region'>>;
  movers?: Resolver<ResolversTypes['Movers'], ParentType, ContextType, RequireFields<QueryMoversArgs, 'region'>>;
  allMovers?: Resolver<Array<Maybe<ResolversTypes['Movers']>>, ParentType, ContextType, RequireFields<QueryAllMoversArgs, 'regions'>>;
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
  Movers?: MoversResolvers<ContextType>;
  SummaryAndSpark?: SummaryAndSparkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
