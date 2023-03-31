import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function FormDialog( { isOpen, onClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  React.useEffect(() => {
    (isOpen) ? setOpen(true) : setOpen(false)
  }, [isOpen])

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{minWidth: '420px'}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название документа"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Статус документа"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Тип документа"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="numberOfEmployee"
            label="Номер сотрудника"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="companySign"
            label="Подпись компании"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="employeeSign"
            label="Подпись сотрудника"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleClose}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}