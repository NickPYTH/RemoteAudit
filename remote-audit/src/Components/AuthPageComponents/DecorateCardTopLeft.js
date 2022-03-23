import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function DecorateCardTopLeft() {
    return (
        <List
            sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CheckCircleOutlineIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Какой" secondary="Февраль 9, 2022" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CheckCircleOutlineIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Нибудь" secondary="Февраль 7, 2022" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CheckCircleOutlineIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Текст" secondary="Февраль 20, 2022" />
            </ListItem>
        </List>
    );
}
