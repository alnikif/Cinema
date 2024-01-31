import React, { ReactNode } from 'react';
import { StarWarsCard } from './Card/StarWarsCard';
import { StarWarsType } from '../../../types/starWarsTypes';
import { withListLayout } from '../../ListContainer/ListContainer';

export type CardsPropsType = {
  readonly data: StarWarsType[];
  readonly title: string;
};

// const StarWarsListLayout = ({ children }: { readonly children: ReactNode }) => <div>{children}</div>;

const StarWarsList = withListLayout();

export const StarWarsCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <StarWarsList title="The Star Wars" data={data}>
      {(listItem) => <StarWarsCard key={listItem.id} characterData={listItem} />}
    </StarWarsList>
  );
};
