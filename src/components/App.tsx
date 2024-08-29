import {ScrollContainer} from "./ScrollContainer";
import {useEntities} from "../hooks/useEntities.ts";
import {Entities} from "../models/model.ts";
import {Card} from "../components/Card/Card.tsx";

export function App() {
    const items = useEntities();

    const scrollHandler = (entities: Entities) => (wrapper: HTMLElement) => {
        const containerRect = wrapper.getBoundingClientRect();
        const index = entities.findIndex(({condition}) => condition);

        if (index <= 0) {
            return
        }

        const [ul] = wrapper.children;
        const elementRect = ul.children[index - 1].getBoundingClientRect();

        wrapper.scrollTo({
            top: elementRect.top - containerRect.top - elementRect.height / 2,
            behavior: "smooth"
        })
    }

    return <div style={{backgroundColor: '#fafafa', display: "flex", gap: '20px', minHeight: '100vh'}}>
        {items.map((entities, index) =>
            <Card title={`Card #${index}`} key={index}>
                <ScrollContainer scrollTo={scrollHandler(entities)}>
                    <ul>
                        {entities.map((element) => <li key={element.id} className={`${element.condition ? 'active' : ''}`}>
                            {element.title}
                        </li>)}
                    </ul>
                </ScrollContainer>
            </Card>
        )}
    </div>
}
