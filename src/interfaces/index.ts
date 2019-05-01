export type IKeyMap<T> = Record<string, T>;

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderType = SortOrder.Asc | SortOrder.Desc;
