import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const StaffCard = ({ name, surname, secondName }) => {
    return (
        <Card sx={{ width: 275, height: 175, margin: "15px" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    ФИО
                </Typography>
                <Typography variant="h5" component="div">
                    {name} {surname} {secondName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Работает
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Открыть</Button>
            </CardActions>
        </Card>
    );
};
