import { Movers } from "../../../types/graphql";

export const mockMoversUS: Movers = {
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
              ], labelsSelected: [0]
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
              ], labelsSelected: [0]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"GT\",\"operands\":[\"percentchange\",3.0]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",15000]}]}}", start: 0, count: 6, total: 666, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1252503000000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BAYP"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1565011800000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "HKIB"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1446125400000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "PRPL"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1570800600000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "VIR"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 340464600000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "HP"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 846599400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NOV"
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
              ], labelsSelected: [0]
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
              ], labelsSelected: [0]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"ASC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"LT\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",20000]}]}}", start: 0, count: 6, total: 162, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1563543000000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "MDLA"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1594992600000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "ALXO"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1607092200000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "SEER"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1607697000000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "CERT"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1519828200000, priceHint: 2, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "LNSTY"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1358519400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NCLH"
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
              ], labelsSelected: [0]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",5000000]}]}}", start: 0, count: 6, total: 356, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1536759000000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NIO"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1601472600000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "PLTR"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 345479400000, priceHint: 2, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "AAPL"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 526656600000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BCS"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: -252322200000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GE"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1358519400000, priceHint: 2, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "CLOSED", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NCLH"
          }
        ], predefinedScr: true, versionId: 6
      }
    ], error: undefined
  }
}
