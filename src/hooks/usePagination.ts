import { useEffect, useReducer } from 'react';

import useIsMounted from './useIsMounted';

const usePagination = <T>(resolver: (page: number) => T, deps: unknown[]) => {
    const isMounted = useIsMounted();
    const [params, setPage] = useReducer((_: T, page: number) => resolver(page), 1, resolver);

    useEffect(() => (isMounted ? setPage(1) : undefined), deps);

    return [params, setPage] as const;
};

export default usePagination;