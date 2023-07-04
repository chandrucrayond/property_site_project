import { makeStyles } from "@mui/styles";

export const ViewProperties_Section2_Table_Style = makeStyles((theme) => ({
    tableHead: {
        color: '#4E5A6B',
        // fontSize: '13px !important',
    },

    activeStatus: {
        color: '#5AC782 !important',
    },

    inactiveStatus: {
        color: '#FF4B4B !important',
    },

    propType: {
        fontStyle: 'normal !important',
        fontVariant: 'normal !important',
        fontWeight: 'bold !important',
        fontSize: '12px !important',
        lineHeight: '16px !important',
        fontFamily: 'Nunito Sans !important',
        letterSpacing: '-0.1px !important',
        color: '#FFFFFF !important',
        borderRadius: '4px !important',

        padding: '2px',
        width: 'fit-content',
    },
    apartmentType: {
        backgroundColor: '#78B1FE  !important',
    },

    houseType: {
        backgroundColor: '#5AC782 !important',
    },

    plotType: {
        backgroundColor: '#FF4B4B !important',
    },

    popoverContainer: {
        '& .MuiPaper-elevation': {
            boxShadow: '0px 8px 24px #0717411F !important',
          borderRadius: '12px !important',
        },
    },      

    statusContainer: {
        display: 'grid !important',
        gridTemplateColumns: '1fr 10px !important',
        alignItems: 'center !important',
    },

    editIconContainer: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
    },

    listItemButton: {
        padding: '6px 30px !important',
        paddingLeft: '10px !important',
    },

    dividerInEdit: {
        width: '75% !important',
        color: '#E4E8EE !important',
        margin: '0 auto !important'
    },
    editListText: {
        color: '#071741 !important'
    },
}));