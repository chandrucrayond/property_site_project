import React from "react";

export let DataContext = React.createContext({
  propertiesList: [],
  setPropertiesList: () => null,
});