import React, { ReactNode, ElementType, FC } from 'react';
import styles from './ListContainer.module.scss';

type ListDataItem = {
  id: string | number;
} & Record<string, unknown>;

type ListContainerPropsType<T> = {
  readonly title: string;
  readonly data: T[];
  // readonly listLayout: ElementType;
  readonly children: (listItem: T) => ReactNode;
};

// 1
// export const ListContainer = <T extends ListDataItem>(props: ListContainerPropsType<T>) => {
//   const { data, title, children } = props;
//
//   return (
//       <div className={styles.listContainer}>
//          <div className={styles.title}>{title}</div>
//          <div className={styles.content}>{data.map((card) => children(card))}</div>
//       </div>
//   );
// };

// 2
// export const ListContainer = <T extends ListDataItem>(props: ListContainerPropsType<T>) => {
//   const { data, title, listLayout: ListLayout, children } = props;
//
//   return (
//     <ListLayout>
//       <div className={styles.title}>{title}</div>
//       <div className={styles.content}>{data.map((card) => children(card))}</div>
//     </ListLayout>
//   );
// };

// 3

type DefaultListLayoutPropsType = {
  readonly children: ReactNode;
};

const DefaultListLayout: FC<DefaultListLayoutPropsType> = ({ children }) => {
  return <div className={styles.listContainer}>{children}</div>;
};

export const withListLayout = (ListLayout = DefaultListLayout) => {
  return <T extends ListDataItem>(props: ListContainerPropsType<T>) => {
    const { data, title, children } = props;

    return (
      <ListLayout>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{data.map((card) => children(card))}</div>
      </ListLayout>
    );
  };
};
