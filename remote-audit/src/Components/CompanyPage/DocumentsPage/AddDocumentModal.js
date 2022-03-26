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

const Input = styled('input')({
    display: 'none',
});

const AddDocumentModalLayout = ({info, open, handleClose, fetchLoadDocument}) => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const createDocument = () => {
        if (name.trim() !== '' && file !== null) {
            fetchLoadDocument(file, name)
            handleClose(true)
        }
    }
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={styles.center}>
                <Card sx={{ width: 400, height: 260, margin: "15px" }}>
                    <CardContent>
                        <Typography style={{maxWidth: 250}} variant="h6" component="div">
                            Загрузка документа
                        </Typography>
                        <TextField
                            label="Название документа"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="standard"
                            style={{
                                marginBottom: 15,
                                width: 370,
                            }}
                        />
                        <CardActions>
                            <label htmlFor="contained-button-file">
                                <Input accept="*" id="contained-button-file" multiple type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                                <Button variant="contained" component="span">
                                    Выбрать файл
                                </Button>
                            </label>
                            <Button style={{marginLeft: 15}} color={'primary'} size="small">Удалить файл</Button>
                        </CardActions>
                        {file &&
                        <Typography
                            sx={{ fontSize: 14, marginTop: "15px" }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Загружен файл: {file && file.name}
                        </Typography>}
                        <CardActions>
                            <Button color={'primary'} size="small" onClick={createDocument}>Загрузить</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchLoadDocument}, dispatch);

export const AddDocumentModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDocumentModalLayout);

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