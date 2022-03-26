import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, CardActions, Modal, TextField} from "@mui/material";
import {bindActionCreators} from "redux";
import {fetchLoadDocument} from "../../../store/actions/companyActions";
import {connect} from "react-redux";
import Card from "@mui/material/Card";
import * as React from "react";
import styled from "@emotion/styled";
import {useState} from "react";
import CardContent from "@mui/material/CardContent";
import {fetchAddCompany} from "../../../store/actions/auditorActions";


const AddCompanyModalLayout = ({info, open, handleClose, fetchAddCompany}) => {
    const [code, setCode] = useState('')
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={styles.center}>
                <Card sx={{ width: 295, height: 140, margin: "15px" }}>
                    <CardContent>
                        <TextField
                            label="Введите код"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            variant="standard"
                            style={{
                                marginBottom: 15,
                                width: 265,
                            }}
                        />
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                            <Button style={{marginLeft: 15}} color={'primary'} size="small" onClick={()=> {
                                fetchAddCompany(code)
                                handleClose(true)
                            }}>Добавить</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    const info = state.companyReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchAddCompany}, dispatch);

export const AddCompanyModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCompanyModalLayout);

const styles = {
    center:
        {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
        }
};