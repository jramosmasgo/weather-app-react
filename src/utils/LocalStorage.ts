export const WriteLocalStorage = (nameKey: string, value: any) => {
  if (localStorage.getItem(nameKey)) localStorage.removeItem(nameKey);
  localStorage.setItem(nameKey, JSON.stringify(value));
};

export const GetDataObjectLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
