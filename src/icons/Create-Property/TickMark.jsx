import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

export default function TickMark({ style, ...otherProps }) {
    return (
        <DoneIcon style={{ fontSize: '14px', ...style }} {...otherProps} />
    );
}