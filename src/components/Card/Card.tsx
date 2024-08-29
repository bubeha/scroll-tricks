import {PropsWithChildren} from "react";

import './Card.css'

type Props = PropsWithChildren<{
    title?: string;
}>

export function Card({title, children}: Props) {
    return (
        <div className="card">
            {title && <h3>{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
