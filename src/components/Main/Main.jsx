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
import InputPopup from '../InputPopup/InputPopup.jsx';

export default function Main({ tablerows }) {

  const [formIsOpen, setFormIsOpen] = React.useState(false);

  const handleFormClick = (id) => {
    setFormIsOpen(true);
    // let cell = e.target.parentNode.parentNode.parentNode;
    // console.log(tablerows);

    // if (cell.tagName.toLowerCase() !== 'td') return;

    console.log(id)


  }

  const handleCloseForm = () => {
    setFormIsOpen(false);
  }

  return (
    <div className='main'>
      <InputPopup isOpen={formIsOpen} onClose={handleCloseForm}/>
      <div className="main__table">
        <Button onClick={handleFormClick} variant="contained" sx={{ marginBottom: '50px' }} endIcon={<AddIcon />}>Добавить</Button>
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
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{row.documentName}</TableCell>
                  <TableCell align="center">{row.documentStatus}</TableCell>
                  <TableCell align="center">{row.documentType}</TableCell>
                  <TableCell align="center">{row.employeeNumber}</TableCell>
                  <TableCell align="center">{row.companySignatureName}</TableCell>
                  <TableCell align="center">{row.companySigDate}</TableCell>
                  <TableCell align="center">{row.employeeSignatureName}</TableCell>
                  <TableCell align="center">{row.employeeSigDate}</TableCell>
                  <TableCell align="center" onClick={() => handleFormClick(row.id)}><IconButton aria-label="Изменить"><EditIcon /></IconButton></TableCell>
                  <TableCell align="center"><IconButton aria-label="Удалить"><DeleteIcon /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}