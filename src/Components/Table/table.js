import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";

const TableCustomhead = ({ headers }) => {
  return (
    <TableRow>
      {headers?.map((elem) => {
        return (
          <TableCell>
            {elem}
          </TableCell>
        )
      })}
    </TableRow>
  )
}


const TableCustomRow = ({ headers, elem }) => {
  return (
    <TableRow>
      {headers.map((data) => {
        return (
          <TableCell>
            {elem[data]}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default function TableDisplay() {
  const { formData } = useSelector((state) => state.form);
  const [headers, setHeaders] = React.useState(Object.keys(formData[0]) || []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableCustomhead headers={headers} />
        </TableHead>
        <TableBody>
          {formData.map((elem) => {
            return (
              <TableCustomRow headers={headers} elem={elem} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
