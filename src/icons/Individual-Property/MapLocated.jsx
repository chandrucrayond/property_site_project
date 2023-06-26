import React from 'react';

export default function MapLocated() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="43.68" height="51.196" viewBox="0 0 43.68 51.196">
            <defs>
                <filter id="Union_3" x="0" y="0" width="43.68" height="51.196" filterUnits="userSpaceOnUse">
                    <feOffset dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Group_96071" data-name="Group 96071" transform="translate(9 5)">
                <g transform="matrix(1, 0, 0, 1, -9, -5)" filter="url(#Union_3)">
                    <path id="Union_3-2" data-name="Union 3" d="M10.148,31.887A98.88,98.88,0,0,1,3.89,22.822C1.782,19.314,0,15.787,0,12.838A12.854,12.854,0,0,1,12.838,0h.06c.285,0,.571.011.857.032A12.862,12.862,0,0,1,25.68,12.838c0,2.949-1.782,6.477-3.89,9.985a100.756,100.756,0,0,1-6.258,9.064,3.421,3.421,0,0,1-5.384,0Z" transform="translate(9 5)" fill="#5078e1" />
                </g>
                <path id="icons8-home-address" d="M18.272,6.917a.845.845,0,0,0-.524.182l-4.655,3.666a1.664,1.664,0,0,0-.632,1.305v6.465a.831.831,0,0,0,.83.83h2.491a.831.831,0,0,0,.83-.83V15.215a.831.831,0,0,1,.83-.83H19.1a.831.831,0,0,1,.83.83v3.321a.831.831,0,0,0,.83.83h2.491a.831.831,0,0,0,.83-.83V12.071a1.659,1.659,0,0,0-.632-1.3L18.8,7.1A.844.844,0,0,0,18.272,6.917Z" transform="translate(-5.544 -1.386)" fill="#fff" />
            </g>
        </svg>

    );
}
