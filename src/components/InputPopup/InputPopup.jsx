import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { inputs } from '../../utils/constants.jsx';

export default function FormDialog( { handleAddRowClick, handleEditRowClick, isOpen, onClose, handleChange, values, isEditClick, isValid }) {

  const ifFormValue = (value) => {
    if ((value.id === 'companySigDate') || (value.id === 'employeeSigDate')) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogContent sx={{maxWidth: '420px'}}>
          {inputs.filter(ifFormValue).map((input) =>  (
            <TextField key={input.id} {...input} value={values[input.name]} onChange={handleChange} autoFocus margin="dense" fullWidth variant="standard"/>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Отменить</Button>
          <Button disabled={!isValid} onClick={isEditClick ? handleEditRowClick : handleAddRowClick}>{isEditClick ? 'Изменить' : 'Добавить'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}