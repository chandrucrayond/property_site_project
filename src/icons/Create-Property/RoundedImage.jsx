import React from 'react';
import { Avatar } from '@mui/material';

const RoundedImage = ({ backgroundColor }) => {
    const avatarStyle = {
        backgroundColor: backgroundColor,
    };

    return <Avatar variant="rounded" style={avatarStyle} />;
};

export default RoundedImage;