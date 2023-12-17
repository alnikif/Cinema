import React, { ReactNode } from 'react';
import { StarWarsCard } from './Card/StarWarsCard';
import { StarWarsType } from '../../../types/starWarsTypes';
// import { ListContainer } from '../../ListContainer/ListContainer';
import { withListLayout } from '../../ListContainer/ListContainer';

export type CardsPropsType = {
  readonly data: StarWarsType[];
  readonly title: string;
};

const StarWarsListLayout = ({ children }: { readonly children: ReactNode }) => <div>{children}</div>;

// HOC High Order Components
// const StarWarsList = withListLayout(StarWarsListLayout);
const StarWarsList = withListLayout();

// export const StarWarsCards: React.FC<CardsPropsType> = ({ data, title }) => {
//   return (
//     <ListContainer
//       title='The Star Wars'
//       data={data}
//       listLayout={StarWarsListLayout}
//     >
//       {(listItem) => (
//         <StarWarsCard key={listItem.id} characterData={listItem} />
//       )}
//     </ListContainer>
//   );
// }

export const StarWarsCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <StarWarsList title="The Star Wars" data={data}>
      {(listItem) => <StarWarsCard key={listItem.id} characterData={listItem} />}
    </StarWarsList>
  );
};
