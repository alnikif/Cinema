import React from 'react';

type ApprenticesCellProps = {
  readonly apprentices?: string[];
};

export const ApprenticesCell: React.FC<ApprenticesCellProps> = ({apprentices}) => {
  if (Array.isArray(apprentices)) {
    return (
      <div>
          {apprentices.map((apprentice) => (
            <span key={apprentice}>{apprentice}</span>
          ))}
      </div>
    );
  } else {
    return null
  }
}