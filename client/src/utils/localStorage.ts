export const setItemInLocalStorage = (token: string) => localStorage.setItem('authToken', token);

export const getItemInLocalStorage = (): string | null => localStorage.getItem('authToken');
