import {PropsWithChildren, useEffect, useRef} from 'react';

type Props = PropsWithChildren<{}>

export function ScrollContainer({children}: Props) {
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        console.log('rendered')
    }, []);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}
