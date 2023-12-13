import React from 'react';

type GenderCellProps = {
    readonly gender: string;
};

export const GenderCell: React.FC<GenderCellProps> = ({ gender }) => {
    return <div>{gender}</div>;
};