import React from 'react';

type ImageCellProps = {
  readonly image: string;
};

export const ImageCell: React.FC<ImageCellProps> = ({ image }) => {
  return (
    <div>
      <img src={image} alt="image" />
    </div>
  );
};
