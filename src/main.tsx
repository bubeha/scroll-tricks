import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ScrollContainer} from "./components/ScrollContainer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ScrollContainer />
        <ScrollContainer />
    </StrictMode>,
)
