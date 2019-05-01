import { IKeyMap } from '../interfaces';

export type ParamValue = string | number | boolean | undefined;

export type IKeyValue<T = ParamValue | ParamValue[]> = IKeyMap<T>;

export function encodeURIIfNeeded(uri: string): string {
  try {
    if (decodeURI(uri) === uri) {
      return uri;
    }
    return encodeURI(decodeURIComponent(uri));
  } catch (error) {
    return uri;
  }
}

export function stringifyQueryParams(params: IKeyValue) {
  if (!params) {
    return '';
  }

  return Object.keys(params)
    .map(key => {
      if (!Array.isArray(params[key])) {
        const param = params[key] as ParamValue
        const value = param === undefined || param === null ? '' : param.toString();
        return value ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : `${encodeURIComponent(key)}`;
      }

      const stringArray = (params[key] as ParamValue[]).reduce(
        (acc: string[], item) => (item ? [...acc, item.toString()] : acc),
        []
      );
      return stringArray
        .map(value =>
          value ? `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}` : `${encodeURIComponent(key)}[]`
        )
        .join('&');
    })
    .join('&');
}

export function parseQueryParams(params: string): IKeyValue<string> {
  if (!params) {
    return {};
  }

  const pairs = decodeURIComponent(params.replace(/^\?/, '')).split('&');
  const mergedPairs = pairs.reduce((acc: IKeyMap<string | string[]>, pair) => {
    const [key, value] = pair.split('=');
    if (value === undefined) {
      return acc;
    }

    const isArrayParam = key.endsWith('[]');
    const valueToSet = isArrayParam ? [decodeURIComponent(value)] : decodeURIComponent(value);
    const paramName = isArrayParam ? key.slice(0, -2) : key;
    const shouldUseArray = isArrayParam && Array.isArray(acc[paramName]);

    return {
      ...acc,
      [paramName]: shouldUseArray ? [...acc[paramName], ...valueToSet] : valueToSet
    };
  }, {});

  return mergedPairs;
}
