import React, { FC, ReactNode } from 'react';
import ThemeProvider from './Providers/ThemeProvider';

type ProvidersType = {
  readonly children: ReactNode;
};

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
