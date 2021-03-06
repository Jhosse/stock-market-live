export default {
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
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"GT\",\"operands\":[\"percentchange\",3.0]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",15000]}]}}", start: 0, count: 6, total: 164, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1252503000000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BAYP"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1565011800000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "HKIB"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1280323800000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GEAGY"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1287149400000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BKRKF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1475155800000, exchange: "NGM", market: "us_market", fullExchangeName: "NasdaqGM", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "FLGT"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1559827800000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "GSX"
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
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"ASC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"LT\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",20000]}]}}", start: 0, count: 6, total: 362, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1563543000000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "MDLA"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1592487000000, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "OPEN"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1574260200000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "XNYIF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1607610600000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "RLLCF"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1459431000000, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "RIOT"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1519828200000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "LNSTY"
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
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",5000000]}]}}", start: 0, count: 6, total: 186, quotes: [
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1536759000000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NIO"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1072189800000, exchange: "PNK", market: "us_market", fullExchangeName: "Other OTC", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "TSNP"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 526656600000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "BCS"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1601472600000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "PLTR"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 345479400000, exchange: "NMS", market: "us_market", fullExchangeName: "NasdaqGS", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "AAPL"
          },
          {
            language: "US", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1358519400000, exchange: "NYQ", market: "us_market", fullExchangeName: "NYSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "America/New_York", exchangeTimezoneShortName: "EST", gmtOffSetMilliseconds: -18000000, esgPopulated: false, tradeable: true, symbol: "NCLH"
          }
        ], predefinedScr: true, versionId: 6
      }
    ], error: null
  }
}
