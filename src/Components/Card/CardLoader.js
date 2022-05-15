import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import MoreVertIcon from '@mui/icons-material/MoreVert';
//import { useParams } from 'react-router-dom';


export default function CardLoader() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title=""
            // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"

            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">

                </IconButton>
                <IconButton aria-label="share">

                </IconButton>

            </CardActions>

        </Card>
    );
}
