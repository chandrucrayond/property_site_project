import { useState, React } from "react";
import { DataContext } from "./Context";
import {data} from './components/PreGeneratedFormData/index.js';
import { mandatoryField } from "./components/PreGeneratedFormData/mandatoryField";

function Context(props) {
    const [propertiesList, setPropertiesList] = useState(data);
    const [errorList, setErrorList] = useState(mandatoryField);
    return (
        <div>       
            <DataContext.Provider value={{ propertiesList, setPropertiesList, errorList, setErrorList }}>
                {props.children}
            </DataContext.Provider>
        </div>
    );
}

export default Context;