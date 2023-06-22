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
  
  const rows = [
    createData('Prop 012', 'Tysons', '23', '02', '40%'),
    createData('Prop 012', 'Rubix', '56', '15', '25%'),
    createData('Prop 012', 'Phoenix', '45', '15', '25%'),
    createData('Prop 012', 'Thapar', '33', '45', '25%'),
    createData('Prop 012', 'Marian', '45', '78', '56%'),
  ];
  
    function BasicTable() {
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell >{row.fat}</TableCell>
                <TableCell >{row.carbs}</TableCell>
                <TableCell >{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

const DashboardSection_3_SS_2 = () => {
 
    return(
        <>
        <Typography variant="h2" sx={{paddingTop:'10px',}}>Occupancy By Property</Typography>
        <BasicTable />
        </>
    );
}

export default DashboardSection_3_SS_2;