import React from 'react';

import { HarryPotterType } from '../../../types/harryPotterTypes';
import { HarryPotterCard } from './Card/HarryPotterCard';
import { withListLayout } from '../../ListContainer/ListContainer';

export type CardsPropsType = {
  readonly data: HarryPotterType[];
  readonly title: string;
};

const HarryPotterList = withListLayout();

export const HarryPotterCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <HarryPotterList title={title} data={data}>
      {(listItem) => <HarryPotterCard key={listItem.id} characterData={listItem} />}
    </HarryPotterList>
  );
};
