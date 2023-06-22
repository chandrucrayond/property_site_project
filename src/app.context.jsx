import { useState, React } from "react";
import { DataContext } from "./Context";

function Context(props) {
    const [propertiesList, setPropertiesList] = useState([]);

    return (
        <div>
            <DataContext.Provider value={{ propertiesList, setPropertiesList }}>
                {props.children}
            </DataContext.Provider>
        </div>
    );
}

export default Context;