import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

export default function TickMark({ style, ...otherProps }) {
    return (
        <DoneIcon style={{ fontSize: '15px', ...style }} {...otherProps} />
    );
}