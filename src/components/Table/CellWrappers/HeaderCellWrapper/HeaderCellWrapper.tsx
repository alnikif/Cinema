import React, { ReactNode } from 'react';
import styles from './HeaderCellWrapper.module.scss';

type HeaderCellWrapperPropsType = {
  readonly children: ReactNode | ReactNode[];
  readonly width?: number;
};

export const HeaderCellWrapper: React.FC<HeaderCellWrapperPropsType> = ({ width, children }) => {
  return (
    <div className={styles.CellContainer} style={{ width }}>
      {children}
    </div>
  );
};
