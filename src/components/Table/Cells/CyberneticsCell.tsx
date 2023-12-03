import React from 'react';

type CyberneticsProps = {
  readonly cybernetics: string;
}

export const CyberneticsCell: React.FC<CyberneticsProps> = ({cybernetics}) => {
  return(
    <span>{cybernetics}</span>
  )
}