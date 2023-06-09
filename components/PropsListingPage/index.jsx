import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';

export default function PropsListingPage() {

    return (
        <Box id="error-page" sx={{
            height: '100%',
            position: 'relative',
            top: '20vh',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h2>Welcome to the properties listing dashboard page</h2>
        </Box>
    );
}