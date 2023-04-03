import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Typography } from '@mui/material';


export default function InfoToolTip({ isInfoTooltipOpen, onClose }) {

  return (
    <React.Fragment>
      <Dialog
        open={isInfoTooltipOpen.isOpen}
        onClose={onClose}
      >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <DangerousIcon sx={{ color: 'red', fontSize: '100px' }} />
          <Typography sx={{paddingTop: '20px', textAlign: 'center'}}variant="body1" gutterBottom>{isInfoTooltipOpen.text}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}