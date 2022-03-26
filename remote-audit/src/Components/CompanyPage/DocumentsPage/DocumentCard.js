import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import './styles.css'

export const DocumentCard = ({ name, comment, last_edit_by, last_edit_date, status }) => {
    const [height, setHeight] = useState(305)
    const [commentOpen, setCommentOpen] = useState(false)
    return (
        <Card className={commentOpen ? 'cardOpen' : 'cardClose'} sx={{ width: 320, height, margin: "15px" }}>
            <div style={{position: 'absolute', background: status==='in_work'?'#ffc007':'#198753', height: 50, width: 50, borderRadius: "1px 5px 1px 25px", marginLeft: 270}} />
            <CardContent>
                <Typography style={{maxWidth: 250, height: 50}} variant="h6" component="div">
                    {name}
                </Typography>

                <Typography
                    sx={{ fontSize: 14, marginTop: "15px" }}
                    color="text.secondary"
                    gutterBottom
                >
                    Статус
                </Typography>
                <Typography variant="body2">{status==='in_work'?'На проверке':'Принят'}</Typography>

                <Typography
                    sx={{ fontSize: 14, marginTop: "15px" }}
                    color="text.secondary"
                    gutterBottom
                >
                    Дата обновления замечаний
                </Typography>
                <Typography variant="body2" sx={{ height: 15 }}>{last_edit_date}</Typography>

                <Typography
                    sx={{ fontSize: 14, marginTop: "15px" }}
                    color="text.secondary"
                    gutterBottom
                >
                    Последние изменения сделал
                </Typography>
                <Typography variant="body2">{last_edit_by}</Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Скачать</Button>
                <Button size="small" onClick={()=>{
                    setHeight(()=>{
                        if (!commentOpen)
                            return 400
                        else
                            return 300
                    })
                    setCommentOpen(prev=>!prev)
                }}>{commentOpen ? 'Скрыть замечания':'Просмотреть замечания'}</Button>
            </CardActions>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Замечания
                </Typography>
                <Typography variant="body2">{!comment?'Пусто':comment}</Typography>
            </CardContent>
        </Card>
    );
};
