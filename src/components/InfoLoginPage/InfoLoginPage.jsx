import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './InfoLoginPage.css';

export default function InfoLoginPage( { onAuthorization } ) {
    return (
        <main className="infoLoginPage">


            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', maxWidth: '396px', gap: '20px', margin: '0px 20px 0px 20px' }}>

                <Typography variant="h1" gutterBottom sx={{ textAlign: 'center', fontSize: '30px' }}>Привет!</Typography>
                <Typography variant="p" gutterBottom sx={{ textAlign: 'center', fontSize: '16px' }}>Чтобы продолжить, необходимо авторизоваться.</Typography>

                <Button onClick={onAuthorization} type='submit' variant="contained" sx={{ height: '56px', fontSize: '16px', marginTop: '50px' }}>Авторизоваться</Button>
            </Box>
        </main>
    )
}