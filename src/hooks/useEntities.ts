import {useEffect, useState} from "react";
import {Entities} from "../models/model.ts";
import {entities} from '../mocks/items.ts';

export function useEntities() {
    const [items, setItems] = useState<Entities[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(entities)
        }, 300);
    }, [])

    return items;
}
