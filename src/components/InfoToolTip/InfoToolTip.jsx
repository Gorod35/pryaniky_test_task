import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Typography } from '@mui/material';


export default function InfoToolTip({ isOpen, onClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  React.useEffect(() => {
    isOpen ? setOpen(true) : setOpen(false);
  }, [isOpen]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <DangerousIcon sx={{ color: 'red', fontSize: '100px' }} />
          <Typography sx={{paddingTop: '20px', textAlign: 'center'}}variant="body1" gutterBottom>Вы ввели неверный логин или пароль. Попробуйте ещё раз.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}