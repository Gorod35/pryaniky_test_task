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
import { InitialValues, inputs } from '../../utils/constants.jsx';

export default function Main({ tablerows, onAddRow, onDeleteRow, onEditRow, isSuccess }) {

  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [isEditClick, setIsEditClick] = React.useState(false);
  const [rowId, setRowId] = React.useState();
  const [isValid, setIsValid] = React.useState(false);

  const [values, setValues] = React.useState(InitialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    (values.documentName && values.documentStatus) ? setIsValid(true) : setIsValid(false);

  }

  const handleEditClick = (id) => {
    setRowId(id);
    setFormIsOpen(true);
    setIsEditClick(true);
    const found = tablerows.find(obj => {
      return obj.id === id;
    })
    setValues(found);
  }

  const handleAddClick = () => {
    setFormIsOpen(true);
  }

  const handleCloseForm = () => {
    setFormIsOpen(false);
    isEditClick
      &&
      setValues(InitialValues)
    setIsEditClick(false);
  }

  const handleAddRowClick = () => {
    onAddRow(values);
    handleCloseForm();
    setValues(InitialValues)
  }

  const handleDeleteRowClick = (id) => {
    onDeleteRow(id);
  }

  const handleEditRowClick = () => {
    onEditRow(rowId, values);
    handleCloseForm();
  }



  return (
    <div className='main'>
      <InputPopup handleAddRowClick={handleAddRowClick} handleEditRowClick={handleEditRowClick} isOpen={formIsOpen} onClose={handleCloseForm} tablerows={tablerows} handleChange={handleChange} values={values} isEditClick={isEditClick} isValid={isValid} />
      <div className="main__table">
        <Button onClick={handleAddClick} variant="contained" sx={{ marginBottom: '50px' }} endIcon={<AddIcon />}>Добавить</Button>
        <TableContainer component={Paper} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '81.25vw' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {inputs.map((input) => (
                  <TableCell align="center">{input.label}</TableCell>
                ))}
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
                  <TableCell align="center" onClick={() => handleEditClick(row.id)}><IconButton aria-label="Изменить"><EditIcon /></IconButton></TableCell>
                  <TableCell align="center" onClick={() => handleDeleteRowClick(row.id)}><IconButton aria-label="Удалить"><DeleteIcon /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}