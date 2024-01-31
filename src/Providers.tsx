import React, { FC, ReactNode } from 'react';
import { ViewProvider } from './Providers/ViewProvider';
import { PaginationProvider } from "./Providers/PaginationProvider";

type ProvidersType = {
  readonly children: ReactNode;
};

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props;

  return(
      <ViewProvider>
          <PaginationProvider>
              {children}
          </PaginationProvider>
      </ViewProvider>
  )
};

export default Providers;
