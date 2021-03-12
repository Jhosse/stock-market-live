import { Movers } from "../../../types/graphql";

export const mockMoversGB: Movers = {
  finance: {
    result: [
      {
        id: "97b9075b-c5ab-4c85-bfd3-9694a061e5d2", title: "Day Gainers - United Kingdom", description: "Stocks ordered in descending order by price percent change greater than 2.5% with respect to the previous close for United Kingdom", canonicalName: "DAY_GAINERS_GB", criteriaMeta: {
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
                17
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                100000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"desc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"and\",\"operands\":[{\"operator\":\"gt\",\"operands\":[\"percentchange\",2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"gb\"]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",100000]}]}}", start: 0, count: 6, total: 82, quotes: [
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1496214000000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0E6H.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1519286400000, exchange: "IOB", market: "gb_market", fullExchangeName: "IOB", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0YZ2.IL"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0LCZ.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 962607600000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "7DIG.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1153292400000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "ARDN.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1224486000000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "EQT.L"
          }
        ], predefinedScr: true, versionId: 1
      },
      {
        id: "01a3b7ec-c577-401f-8b19-57d6bbf5ce8e", title: "Day Losers - United Kingdom", description: "Stocks ordered in ascending order by price percent change with respect to the previous close for United Kingdom", canonicalName: "DAY_LOSERS_GB", criteriaMeta: {
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
                17
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                100000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"asc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"and\",\"operands\":[{\"operator\":\"lt\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"gb\"]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",100000]}]}}", start: 0, count: 6, total: 57, quotes: [
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1614844800000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "UHS.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0RA9.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1136361600000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "ORR.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1254380400000, exchange: "IOB", market: "gb_market", fullExchangeName: "IOB", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0RUK.IL"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 955090800000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "CLP.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1502953200000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "MACP.L"
          }
        ], predefinedScr: true, versionId: 1
      },
      {
        id: "433c5af8-f58f-4d92-8338-7d928f558a0d", title: "Most Actives - United Kingdom", description: "Stocks ordered in descending order by intraday trade volume for United Kingdom", canonicalName: "MOST_ACTIVES_GB", criteriaMeta: {
          size: 6, offset: 0, sortField: "dayvolume", sortType: "DESC", quoteType: "EQUITY", topOperator: "AND", criteria: [
            {
              field: "region", operators: [
                "EQ"
              ], values: [], labelsSelected: [
                17
              ]
            },
            {
              field: "dayvolume", operators: [
                "GT"
              ], values: [
                100000
              ], labelsSelected: []
            }
          ]
        }, rawCriteria: "{\"offset\":0,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"desc\",\"quoteType\":\"equity\",\"query\":{\"operator\":\"and\",\"operands\":[{\"operator\":\"eq\",\"operands\":[\"region\",\"gb\"]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",100000]}]}}", start: 0, count: 6, total: 475, quotes: [
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1355126400000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "PREM.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1584950400000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "SYME.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1136361600000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "ORR.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1469602800000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "ICON.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1292832000000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "CAT.L"
          },
          {
            language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1224486000000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "EQT.L"
          }
        ], predefinedScr: true, versionId: 1
      }
    ], error: undefined
  }
}
