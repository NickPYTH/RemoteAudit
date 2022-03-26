import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {Link, Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {fetchCreateInvite} from "../../store/actions/companyActions";

const CompanySideMenuListLayout = ({info, company_info, logout, fetchCreateInvite}) => {
    console.log(company_info)
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
                                to="company-profile"
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
                                <ArticleIcon />
                            </ListItemIcon>
                            <Link
                                to="company-documents"
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText primary="Документы" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AddBoxIcon />
                            </ListItemIcon>
                            <Link
                                to="company-documents"
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                    height: "100%",
                                    color: "inherit",
                                }}
                            >
                            {
                                company_info.inviteCode ?
                                    <ListItemText primary={"Ваш код "+company_info.inviteCode} />
                                    :
                                    <ListItemText onClick={()=> {
                                        fetchCreateInvite()
                                    }} primary={"Пригласить"} />
                            }
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
    const company_info = state.companyReducer
    return { info, company_info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            logout,
            fetchCreateInvite
        },
        dispatch
    );

export const CompanySideMenuList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanySideMenuListLayout);

