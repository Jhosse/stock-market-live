export const isRegexMatch = (regexExpression: string, str: string): boolean => new RegExp(regexExpression).test(str)
