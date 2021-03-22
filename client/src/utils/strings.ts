export const isRegexMatch = (regexExpression: string, str: string): boolean =>
  new RegExp(regexExpression).test(str)

export const removeSubString = (regexExpression: string, str: string): string | undefined =>
  str.replace(regexExpression, '')
