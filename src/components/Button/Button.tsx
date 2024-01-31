import React, { FC, MouseEventHandler } from 'react';

type ButtonProps = {
  readonly title: string;
  readonly disabled: boolean;
  readonly handleClick: MouseEventHandler<HTMLButtonElement>;
};
export const Button: FC<ButtonProps> = ({ title, disabled, handleClick }) => {
  return (
    <button type="button" disabled={disabled} onClick={handleClick}>
      {title}
    </button>
  );
};
