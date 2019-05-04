export type IKeyMap<T> = Record<string, T>;
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Subtract<T, K> = Omit<T, keyof K>;

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderType = SortOrder.Asc | SortOrder.Desc;
