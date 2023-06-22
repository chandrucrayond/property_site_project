import { useState, React } from "react";
import { DataContext } from "./Context";
import {data} from './components/PreGeneratedFormData/index.js';

function Context(props) {
    const [propertiesList, setPropertiesList] = useState(data);

    return (
        <div>
            <DataContext.Provider value={{ propertiesList, setPropertiesList }}>
                {props.children}
            </DataContext.Provider>
        </div>
    );
}

export default Context;