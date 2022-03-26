import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function DecorativeCard() {
    return (
        <Card sx={{ maxWidth: 305 }}>
            <CardActionArea>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ArticleOutlinedIcon sx={{ fontSize: 100 }} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Отчёт за 2021 год
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Исправить замечания в первом и пятом пункте закупок офисной техники
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Принять
                </Button>
                <Button size="small" color="primary">
                    Отклонить
                </Button>
            </CardActions>
        </Card>
    );
}
