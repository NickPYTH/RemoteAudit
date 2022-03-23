import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";

export const AddCompanyCard = ({}) => {
    return (
        <Card sx={{ width: 275, height: 215, margin: "15px" }}>
            <Button style={{ width: 275, height: 215 }}>
                Добавить команию <br /> по полученному коду
            </Button>
        </Card>
    );
};
