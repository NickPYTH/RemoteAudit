import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const CardArrowBack = ({path}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'start', marginBottom: 15, width: '100%'}}>
            <Button variant="text" style={{margin: 5}}>
                <Link to={path} style={{textDecoration: 'none', color: 'inherit', display: "flex", alignItems: 'center'}}>
                    <ArrowBackOutlinedIcon />
                    <span style={{marginLeft: 5, marginTop: 2}}>Назад</span>
                </Link>
            </Button>
        </div>
    )
}