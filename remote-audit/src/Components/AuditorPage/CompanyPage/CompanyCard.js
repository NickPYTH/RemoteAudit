import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

export const CompanyCard = ({ name, location, fun }) => {
    return (
        <Card sx={{ width: 275, height: 215, margin: "15px" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Компания
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography
                    sx={{ fontSize: 14, marginTop: "15px" }}
                    color="text.secondary"
                    gutterBottom
                >
                    Местонахождение
                </Typography>
                <Typography variant="body2">{location}</Typography>
            </CardContent>
            <CardActions>
                <Link to="company-info" style={{textDecoration: 'none'}}>
                    <Button size="small" onClick={()=> {
                        fun(name)
                    }}>Открыть</Button>
                </Link>
            </CardActions>
        </Card>
    );
};
