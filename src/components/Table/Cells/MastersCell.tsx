import React from 'react';

type MastersCellProps = {
  readonly masters?: string[];
};

export const MastersCell: React.FC<MastersCellProps> = ({masters}) => {
  if (Array.isArray(masters)) {
    return (
      <div>
        {masters.map((master) => (
          <span key={master}>{master}</span>
        ))}
      </div>
    );
  } else {
    return null
  }
}