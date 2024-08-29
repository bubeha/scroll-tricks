import {ScrollContainer} from "./ScrollContainer";
import {useEntities} from "../hooks/useEntities.ts";
import {Entities} from "../models/model.ts";
import {Card} from "../components/Card/Card.tsx";

export function App() {
    const items = useEntities();

    const scrollHandler = (entities: Entities) => (wrapper: HTMLElement) => {
        console.log(entities, wrapper)
    }

    return <div style={{backgroundColor: '#fafafa', display: "flex", gap: '20px', minHeight: '100vh'}}>
        {items.map((entities, index) =>
            <Card title={`Card #${index}`}>
                <ScrollContainer key={index} scrollTo={scrollHandler(entities)}>
                    <ul>
                        {entities.map((element) => <li key={element.id} className={`${element.condition ? 'active' : ''}`}>{element.title}</li>)}
                    </ul>
                </ScrollContainer>
            </Card>
        )}
    </div>
}
