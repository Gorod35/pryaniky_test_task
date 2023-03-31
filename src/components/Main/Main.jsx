import * as React from 'react';
import './Main.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function Main({ tablerows }) {
  return (
    <div className='main'>
      <div className="main__table">
        <Button variant="contained" sx={{ marginBottom: '50px' }} endIcon={<AddIcon />}>Добавить</Button>
        <TableContainer component={Paper} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '80vw' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Название документа</TableCell>
                <TableCell align="center">Статус документа</TableCell>
                <TableCell align="center">Тип документа</TableCell>
                <TableCell align="center">Номер сотрудника</TableCell>
                <TableCell align="center">Подпись компании</TableCell>
                <TableCell align="center">Дата подписи компании</TableCell>
                <TableCell align="center">Подпись сотрудника</TableCell>
                <TableCell align="center">Дата подписи сотрудника</TableCell>
                <TableCell align="center">Изменить запись</TableCell>
                <TableCell align="center">Удалить запись</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tablerows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{row.documentName}</TableCell>
                  <TableCell align="center">{row.documentStatus}</TableCell>
                  <TableCell align="center">{row.documentType}</TableCell>
                  <TableCell align="center">{row.employeeNumber}</TableCell>
                  <TableCell align="center">{row.companySignatureName}</TableCell>
                  <TableCell align="center">{row.companySigDate}</TableCell>
                  <TableCell align="center">{row.employeeSignatureName}</TableCell>
                  <TableCell align="center">{row.employeeSigDate}</TableCell>
                  <TableCell align="center"><IconButton aria-label="delete"><EditIcon /></IconButton></TableCell>
                  <TableCell align="center"><IconButton aria-label="delete"><DeleteIcon /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}