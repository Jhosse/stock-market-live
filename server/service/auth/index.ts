import jwt from 'jsonwebtoken'
import { publicKey } from '../../env'
import { AuthenticatedUser } from '../../types/customTypes'

export const authenticateUser = async (token: string): Promise<AuthenticatedUser | undefined> => {
  if (!token) return

  const cleanToken = token.replace('Bearer ', '').trim();
  const { id, username, email } = jwt.verify(cleanToken, publicKey, { algorithms: ['RS256'] }) as AuthenticatedUser
  return { id, username, email }
}
