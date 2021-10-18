import {useRef} from "react";
import {useLazyQuery} from 'react-apollo';

export function useMemoizedQuery(query, options,) {
  let cachedData = useRef(undefined)

  const [action, queryResult, ...rest] = useLazyQuery(query, options)

  if (
    queryResult.loading !== true &&
    queryResult.data !== undefined &&
    // Check for empty object due to https://github.com/apollographql/apollo-client/issues/6876
    Object.keys(queryResult.data).length > 0
  ) {
    cachedData.current = queryResult.data
  }

  return [action, {...queryResult, data: cachedData.current}, ...rest];
}
