import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupsIcon from '@mui/icons-material/Groups';
import {Link} from "react-router-dom";

export const SideMenuList = ({}) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#f3f6f9' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CorporateFareIcon />
                            </ListItemIcon>
                            <Link to="companies" style={{textDecoration: 'none',width:'100%', height:'100%', color: 'inherit'}}>
                                <ListItemText primary="Компании" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <Link to="staff" style={{textDecoration: 'none',width:'100%', height:'100%', color: 'inherit'}}>
                                <ListItemText primary="Сотрудники" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a">
                            <ListItemText primary="Выйти" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
