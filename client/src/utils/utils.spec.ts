import { updateMapKeyArrayPair, isRegexMatch, removeSubString } from './index'

/**
 * MOCKS
 */
const mapKeyMock = 'Day Gainers'
const mapContentMock = [
  {
    language: "GB", region: "EN-US", quoteType: "EQUITY", quoteSourceName: "Delayed Quote", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1496214000000, exchange: "LSE", market: "gb_market", fullExchangeName: "LSE", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0E6H.L"
  },
  {
    language: "GB", region: "EN-US", quoteType: "EQUITY", triggerable: false, priceHint: 2, firstTradeDateMilliseconds: 1519286400000, exchange: "IOB", market: "gb_market", fullExchangeName: "IOB", marketState: "REGULAR", sourceInterval: 15, exchangeDataDelayedBy: 20, exchangeTimezoneName: "Europe/London", exchangeTimezoneShortName: "GMT", gmtOffSetMilliseconds: 0, esgPopulated: false, tradeable: false, symbol: "0YZ2.IL"
  }
]

/**
 * TESTS
 */
describe('Utils', () => {
  describe('isRegexMatch', () => {
    it('should return true if match', () => {
      expect(isRegexMatch('test', 'this is a test')).toBeTruthy()
    })

    it('should return false if doesn\'t match', () => {
      expect(isRegexMatch('one', 'this is a test')).toBeFalsy()
    })
  })

  describe('removeSubString', () => {
    it('should remove match', () => {
      expect(removeSubString('_market', 'gb_market')).toEqual('gb')
    })

    it('should not remove anything', () => {
      expect(removeSubString('test', 'gb_market')).toEqual('gb_market')
    })
  })

  describe('updateMapKeyArrayPair', () => {
    it('should create a map', () => {
      const result = updateMapKeyArrayPair(mapKeyMock, mapContentMock, new Map())

      expect(result.has(mapKeyMock)).toBeTruthy()
      expect(result.size).toBe(1)
      expect(result.get(mapKeyMock)?.length).toBe(2)
    })

    it('should update the map', () => {
      const newMap = updateMapKeyArrayPair(mapKeyMock, mapContentMock, new Map())
      const updatedMap = updateMapKeyArrayPair(mapKeyMock, mapContentMock, newMap)

      expect(updatedMap.has(mapKeyMock)).toBeTruthy()
      expect(updatedMap.size).toBe(1)
      expect(updatedMap.get(mapKeyMock)?.length).toBe(4)
    })
  })
})
