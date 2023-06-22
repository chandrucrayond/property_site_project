import React from 'react';

export default function RoundIcon({ fill, opacity, width, height }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 186 186">
            <path id="Subtraction_3" data-name="Subtraction 3" d="M93,186a92.565,92.565,0,0,1-52-15.883A93.273,93.273,0,0,1,7.308,129.2,92.877,92.877,0,0,1,15.883,41,93.272,93.272,0,0,1,56.8,7.308,92.878,92.878,0,0,1,145,15.883,93.272,93.272,0,0,1,178.692,56.8a92.878,92.878,0,0,1-8.575,88.2A93.272,93.272,0,0,1,129.2,178.692,92.418,92.418,0,0,1,93,186ZM93,33.623A59.378,59.378,0,1,0,152.378,93,59.444,59.444,0,0,0,93,33.623Z" transform="translate(0 0)" fill={fill} opacity={opacity} />
        </svg>
    );
}