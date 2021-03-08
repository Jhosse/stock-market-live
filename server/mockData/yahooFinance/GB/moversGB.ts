import { Movers } from "../../../types/graphql";

export const mockMoversGB: Movers = {
  finance: {
    result: [
      {
        id: "ec5bebb9-b7b2-4474-9e5c-3e258b61cbe6", title: "Day Gainers - US", description: "Stocks ordered in descending order by price percent change greater than 3% with respect to the previous close", canonicalName: "DAY_GAINERS", criteriaMeta: {
          size: 6, offset: 0, sortField: "percentchange", sortType: "DESC", quoteType: "EQUITY", topOperator: "AND", criteria: [
            {
              field: "percentchange", operators: [
                "GT"
              ], values: [
                3
              ], labelsSelected: []
            },
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                53
              ]
            },
            {
              field: "intradaymarketcap", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                1,
                2,
                3
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                15000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"GT\",\"operands\":[\"percentchange\",3.0]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",15000]}]}}", start: 0, count: 6, total: 372, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1013610600000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GME"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1609857000000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "APTPF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1609857000000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NWITY"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1201703400000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "JSHLY"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1201703400000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "JMHLY"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1164119400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "AER"
          }
        ], predefinedScr: true, versionId: 6
      },
      {
        id: "8ecefa87-a8b0-434a-9b39-e061a0baef9b", title: "Day Losers - US", description: "Stocks ordered in ascending order by price percent change with respect to the previous close", canonicalName: "DAY_LOSERS", criteriaMeta: {
          size: 6, offset: 0, sortField: "percentchange", sortType: "ASC", quoteType: "EQUITY", topOperator: "AND", criteria: [
            {
              field: "percentchange", operators: [
                "LT"
              ], values: [
                -2.5
              ], labelsSelected: []
            },
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                53
              ]
            },
            {
              field: "intradaymarketcap", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                1,
                2,
                3
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                20000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"ASC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"LT\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",20000]}]}}", start: 0, count: 6, total: 449, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1337088600000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GCPEF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1214314200000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "DLPTF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1609857000000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GNENF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1522243800000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BILI"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1610116200000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "CRWOF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1287581400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "TAL"
          }
        ], predefinedScr: true, versionId: 4
      },
      {
        id: "437465ef-980e-4d8c-a860-de7cbfbab373", title: "Most Actives - US", description: "Stocks ordered in descending order by intraday trade volume", canonicalName: "MOST_ACTIVES", criteriaMeta: {
          size: 6, offset: 0, sortField: "dayvolume", sortType: "DESC", quoteType: "EQUITY", topOperator: "AND", criteria: [
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                53
              ]
            },
            {
              field: "intradaymarketcap", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                1,
                2,
                3
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                5000000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",5000000]}]}}", start: 0, count: 6, total: 204, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1536759000000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NIO"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: -252322200000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GE"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 345479400000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "AAPL"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1387377000000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "AMC"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1601472600000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "PLTR"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 76253400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "F"
          }
        ], predefinedScr: true, versionId: 6
      }
    ], error: null
  }
}
