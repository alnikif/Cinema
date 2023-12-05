import React, { FC, ReactNode } from 'react';
import ThemeProvider from './Providers/ThemeProvider';
import { ViewProvider } from './Providers/ViewProvider';

type ProvidersType = {
  readonly children: ReactNode;
};

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props;

  return(
    <ThemeProvider>
      <ViewProvider>
        {children}
      </ViewProvider>
    </ThemeProvider>)
};

export default Providers;
