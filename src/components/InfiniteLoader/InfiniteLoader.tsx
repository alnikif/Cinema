import React, { FC, useEffect, useState } from 'react';

import styles from './InfiniteLoader.module.scss'

const NOOP = () => {
    //
};

export type InfiniteMarkPropsType = {
    readonly parent?: Element | null;
    readonly offset?: number | `${number}` | `${number}px` | `${number}%`;
    readonly onReached?: () => void;
    readonly onLeave?: () => void;
};

const InfiniteLoader: FC<InfiniteMarkPropsType> = (props) => {
    const { parent, offset, onReached = NOOP, onLeave = NOOP } = props;

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [ref, setRef] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref || (!parent && !ref.offsetParent)) {
            return undefined;
        }

        const margin = Number.isNaN(Number(offset)) ? offset : `${offset}px`;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: parent || ref.offsetParent,
                rootMargin: `0px 0px ${margin || '0px'} 0px`,
                threshold: 1
            }
        );

        observer.observe(ref);

        return () => {
            setIsIntersecting(false);
            observer.unobserve(ref);
        };
    }, [ref, parent]);

    useEffect(() => {
        if (isIntersecting) {
            onReached();
        } else {
            onLeave();
        }
    }, [isIntersecting]);

    return <div ref={setRef} className={styles.trigger} />;
};

export default InfiniteLoader;