import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GroupsIcon from "@mui/icons-material/Groups";
import {Link, Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";
import PersonIcon from '@mui/icons-material/Person';

const SideMenuListLayout = ({info, logout}) => {
    if (info.profileType===null)
        return (<Redirect to="" />)
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#f3f6f9" }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <Link
                                to="auditor-profile"
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText primary="Профиль" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CorporateFareIcon />
                            </ListItemIcon>
                            <Link
                                to="companies"
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText primary="Компании" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <Link
                                to="staff"
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
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
                            <Link
                                to=""
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText primary="Выйти" onClick={()=>logout()}/>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            logout
        },
        dispatch
    );

export const SideMenuList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideMenuListLayout);

