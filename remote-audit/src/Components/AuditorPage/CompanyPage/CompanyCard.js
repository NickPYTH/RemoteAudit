import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const CompanyCard = ({name, location}) => {
    return (
        <Card sx={{ width: 275, height: 215, margin: "15px" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Компания
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: 14, marginTop: "15px" }} color="text.secondary" gutterBottom>
                    Местонахождение
                </Typography>
                <Typography variant="body2">
                    {location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Открыть</Button>
            </CardActions>
        </Card>
    );
}
