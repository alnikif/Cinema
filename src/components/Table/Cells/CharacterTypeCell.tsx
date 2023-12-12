import React from 'react';

type CharacterTypeCellProps = {
  readonly wizard: boolean;
};

export const CharacterTypeCell: React.FC<CharacterTypeCellProps> = ({ wizard }) => {
  return <div>{wizard ? 'wizard' : 'muggle'}</div>;
};
