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

export const NormalCardZeroBottom = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.styleCardZeroBottom}>{children}</Box>
    );
}

export const NormalCardZeroTop = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.styleCardZeroTop}>{children}</Box>
    );
}

export const NormalCardNoRadius = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.styleCardNoRadius}>{children}</Box>
    );
}


export const ViewCard = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.ViewCard}>{children}</Box>
    );
}


export const AppHeaderCard = ({children}) => {
    const classes = CreateCardStyle();
    return(
    <Box className={classes.AppHeaderCard}>{children}</Box>
    );
}