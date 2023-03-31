import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Preloader( { isOpen } ) {
  return (
    <Box  sx={{ display: 'flex' }}>
      <CircularProgress variant={isOpen ? 'indeterminate' : 'determinate'}/>
    </Box>
  );
}