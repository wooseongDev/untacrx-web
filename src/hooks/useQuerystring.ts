type ObjectType = { [key: string]: string };
type QuerystringType<T = ObjectType> = ObjectType & T;

interface IUseQuerystring {
  search: string;
}

export default function useQuerystring<T>({ search }: IUseQuerystring) {
  const searchParams = new URLSearchParams(search);

  const keyValueArray = Array.from(searchParams.entries());

  const querystring = keyValueArray.reduce(
    (prev, [key, value]) => ({ ...prev, [key]: decodeURI(value) }),
    {} as QuerystringType<T>,
  );

  return { querystring };
}
