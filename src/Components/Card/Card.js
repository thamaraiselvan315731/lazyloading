import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardView(props) {

    return (
        <Card sx={{ minWidth: 50 }}>

            <CardMedia
                component="img"
                height="150"
                width="75"
                image={props.imageUrl}
                alt="Img"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.owner}
                </Typography>
            </CardContent>


        </Card>
    );
}
