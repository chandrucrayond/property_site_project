import { useRouteError,Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import {ErrorOutline,} from '@mui/icons-material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page" sx={{ height: '100%',
      position : 'relative',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      
      <h4>
      {error && error.stack}

      </h4>
    </Box>
  );
}