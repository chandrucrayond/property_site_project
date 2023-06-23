import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DashboardSection3_SS_2_Style } from "./style";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  
    function BasicTable({dashData}) {
      const classes = DashboardSection3_SS_2_Style();
    return (
      <TableContainer className={classes.table}>
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor: '#F2F4F7'}}>
              <TableCell>Property Id</TableCell>
              <TableCell >Property Name</TableCell>
              <TableCell >Total Units</TableCell>
              <TableCell >Occupied Units</TableCell>
              <TableCell >Occupancy %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashData.map((row) => (
              <TableRow
                key={row.propertyId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.propertyId}
                </TableCell>
                <TableCell >{row.propertyName}</TableCell>
                <TableCell >{row.totalUnits}</TableCell>
                <TableCell >{row.occupiedUnits}</TableCell>
                <TableCell>{`${Math.floor((row.occupiedUnits / row.totalUnits) * 100)}%`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

const DashboardSection_3_SS_2 = ({dashData}) => {
 
    return(
        <>
        <Typography variant="h2" sx={{paddingTop:'10px',}}>Occupancy By Property</Typography>
        <BasicTable dashData={dashData.occupancy}/>
        </>
    );
}

export default DashboardSection_3_SS_2;