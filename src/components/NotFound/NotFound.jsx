import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './NotFound.css';

export default function NotFound( { onBack } ) {
    return (
        <main className="infoLoginPage">


            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', maxWidth: '396px', gap: '20px', margin: '0px 20px 0px 20px' }}>

                <Typography variant="h1" gutterBottom sx={{ textAlign: 'center', fontSize: '30px' }}>404</Typography>
                <Typography variant="p" gutterBottom sx={{ textAlign: 'center', fontSize: '16px' }}>Страница, которую вы ищете, не существует</Typography>

                <Button onClick={onBack} type='submit' variant="contained" sx={{ height: '56px', fontSize: '16px', marginTop: '50px' }}>Вернуться</Button>
            </Box>
        </main>
    )
}