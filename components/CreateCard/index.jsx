import { Box } from "@mui/material";
import React, {useState} from "react";
import { CreateCardStyle } from "./style";

const CreateCard = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.styleCardWithHeight}>{children}</Box>
    );
}
export default CreateCard;

export const NormalCard = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.styleCard}>{children}</Box>
    );
}
