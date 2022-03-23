import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";

export const AddStaffCard = ({}) => {
    return (
        <Card sx={{ width: 275, height: 175, margin: "15px" }}>
            <Button style={{ width: 275, height: 175 }}>
                Добавить сотрудника
            </Button>
        </Card>
    );
};
