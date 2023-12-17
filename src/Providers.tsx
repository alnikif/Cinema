import React, { FC, ReactNode } from 'react';
import ThemeProvider from './Providers/ThemeProvider';
import { ViewProvider } from './Providers/ViewProvider';
import {PaginationProvider} from "./Providers/PaginationProvider";

type ProvidersType = {
  readonly children: ReactNode;
};

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props;

  return(
    <ThemeProvider>
      <ViewProvider>
          <PaginationProvider>
              {children}
          </PaginationProvider>
      </ViewProvider>
    </ThemeProvider>)
};

export default Providers;
