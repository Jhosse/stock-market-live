export enum Region {
  US = 'US',
  GB = 'GB',
  HK = 'HK'
}

export type AuthenticatedUser = {
  id: string
  username: string
  email: string
}
