import {Button, ButtonGroup, Paper, TextField} from "@mui/material";
import styled from "@emotion/styled";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {Link} from "react-router-dom";
import {useState} from "react";
import {CompanyRegisterCard} from "../../Components/AuthPageComponents/CompanyRegisterCard";
import {CardArrowBack} from "../../Components/AuthPageComponents/CardArrowBack";

const RegisterTypeCard = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    height: 180,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
}));

export const RegisterPage = ({}) => {
    return(
        <div style={styles.wrapper}>
                    <RegisterTypeCard elevation={4}>
                        <CardArrowBack path="/"/>
                        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}>
                            Выберите кем вы являетесь
                        </div>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button>
                                <Link to="register/company" style={{textDecoration: 'none', color: 'inherit'}}>Компания</Link>
                            </Button>
                            <Button>
                                <Link to="register/auditor" style={{textDecoration: 'none', color: 'inherit'}}>Аудитор</Link>
                            </Button>
                        </ButtonGroup>
                    </RegisterTypeCard>
        </div>
    )
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f3f6f9",
        height: window.innerHeight
    }
}