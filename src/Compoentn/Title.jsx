import {Box,Typography } from '@mui/material';

const Title = ({first, second}) => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography style={{padding: '30px 0'}}  variant='h4'>{first} <span style={{color:'#cddc39'}}>{second}</span> </Typography>
        </Box>
    );
};  

export default Title;