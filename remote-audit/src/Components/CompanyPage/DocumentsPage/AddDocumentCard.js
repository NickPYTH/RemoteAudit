import * as React from "react";
import Card from "@mui/material/Card";
import {Button} from "@mui/material";


export const AddDocumentCard = ({fun}) => {
    return (
        <Card sx={{ width: 320, height: 300, margin: "15px" }}>
            <Button style={{ width: 320, height: 300 }} onClick={fun}>
                Добавить документ
            </Button>
        </Card>
    );
};
