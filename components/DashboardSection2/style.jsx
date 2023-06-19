import { makeStyles } from "@mui/styles";

export const DashboardSection2Style = makeStyles((theme) => ({
    GraphCard: {
        background: '#FFFFFF !important',
        boxShadow: '0px 3px 30px #5C86CB2E !important',
        borderRadius: '4px !important',
        height: '350px',
        padding: '15px',
        "& .recharts-default-legend": { 
            display: "grid",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            gridTemplateColumns: "auto auto",
            gridTemplateRows: "auto auto",
            columnGap: "60px",
            rowGap: "10px",
        },

        "& .recharts-legend-item": {
            display: "flex !important",
            alignSelf: "flex-start !important",
            alignItems: "end !important",
            justifyContent: "flex-start !important",
        },
        "& .recharts-surface": {
            display: 'flex !important',
            alignItems: 'end !important',
            bottom: '20px !important',
            position: "relative !important",
            bottom: '1px !important',
        },
        "& .recharts-legend-item-text>h3": {
            position: "relative",
            display: 'flex',    
            right: '18px',
            bottom: '5px',
        }

    },
    graphHeading: {
    
    },
}));