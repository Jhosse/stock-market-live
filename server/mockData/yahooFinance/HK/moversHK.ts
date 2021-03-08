
import { Movers } from "../../../types/graphql";

export const mockMoversHK: Movers = {
  finance: {
    result: [
      {
        id: "93505957-f2ce-4666-8f7c-91275819b5f6", title: "Day Gainers - Hong Kong", description: "Stocks ordered in descending order by price percent change greater than 2.5% with respect to the previous close for Hong Kong", canonicalName: "DAY_GAINERS_HK", criteriaMeta: {
          size: 6, offset: 0, sortField: "percentchange", sortType: "DESC", quoteType: "EQUITY", topOperator: "AND", criteria: [
            {
              field: "percentchange", operators: [
                "GT"
              ], values: [
                2.5
              ], labelsSelected: []
            },
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                19
              ]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"desc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"and\",\"operands\":[{\"operator\":\"gt\",\"operands\":[\"percentchange\",2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"hk\"]}]}}", start: 0, count: 6, total: 239, quotes: [
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1293499800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "1555.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1496194200000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "3860.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1473643800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "3893.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 946949400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "1168.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 964402200000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "8050.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1530667800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "1592.HK"
          }
        ], predefinedScr: true, versionId: 0
      },
      {
        id: "5d940688-4853-49bd-a3b3-849ca743ad8c", title: "Day Losers - Hong Kong", description: "Stocks ordered in ascending order by price percent change with respect to the previous close for Hong Kong", canonicalName: "DAY_LOSERS_HK", criteriaMeta: {
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
                19
              ]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"asc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"and\",\"operands\":[{\"operator\":\"lt\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"hk\"]}]}}", start: 0, count: 6, total: 1063, quotes: [
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "2995.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1127957400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "8089.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1127957400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "0263.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1059355800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "3886.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1518485400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "1183.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 947122200000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "0068.HK"
          }
        ], predefinedScr: true, versionId: 0
      },
      {
        id: "9dbdb8ef-d0c2-446f-baab-be6997a20be8", title: "Most Actives - Hong Kong", description: "Stocks ordered in descending order by intraday trade volume for Hong Kong", canonicalName: "MOST_ACTIVES_HK", criteriaMeta: {
          size: 6, offset: 0, sortField: "dayvolume", sortType: "DESC", quoteType: "EQUITY", topOperator: "EQUAL_TO", criteria: [
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                19
              ]
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"desc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"eq\",\"operands\":[\"region\",\"hk\"]}}", start: 0, count: 6, total: 3577, quotes: [
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1194917400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "3800.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1533691800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "0788.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1127957400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "0273.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1094779800000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "0493.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1149125400000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "3988.HK"
          },
          {
            language: "HK", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, firstTradeDateMilliseconds: 1161912600000, priceHint: 3, exchange: "HKG", market: "hk_market", fullExchangeName: "HKSE", marketState: "PREPRE", sourceInterval: 15, exchangeDataDelayedBy: 0, exchangeTimezoneName: "Asia/Hong_Kong", exchangeTimezoneShortName: "HKT", gmtOffSetMilliseconds: 28800000, esgPopulated: false, tradeable: false, symbol: "1398.HK"
          }
        ], predefinedScr: true, versionId: 0
      }
    ], error: null
  }
}
