import {PropsWithChildren, useEffect, useRef} from 'react';

import './ScrollContainer.css';

type Props = PropsWithChildren<{
    scrollTo: (wrapper: HTMLElement) => void
}>

export function ScrollContainer({children, scrollTo}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            scrollTo(ref.current);
        }
    }, []);

    return (
        <div ref={ref} className="scroll-container">
            {children}
        </div>
    );
}
