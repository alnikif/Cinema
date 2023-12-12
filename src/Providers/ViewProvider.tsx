import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';

export enum PageViews {
  table = 'table',
  card = 'card'
}

export const views = [
  { key: PageViews.card, title: 'Card view' },
  { key: PageViews.table, title: 'Table view' }
];

export const DEFAULT_VIEW = PageViews.card;

export type ViewContextType = {
  view: PageViews;
  setView: (nextView: PageViews) => void;
};

const defaultViewContext = {
  view: DEFAULT_VIEW,
  setView: () => {
    //
  }
};

export const ViewContext = createContext<ViewContextType>(defaultViewContext);

type ProvidersType = {
  readonly children: ReactNode;
};

export const ViewProvider: FC<ProvidersType> = (props) => {
  const { children } = props;

  const [view, setView] = useState<PageViews>(defaultViewContext.view);

  const viewContextValue = useMemo(
    () => ({
      view,
      setView
    }),
    [view]
  );

  return <ViewContext.Provider value={viewContextValue}>{children}</ViewContext.Provider>;
};
