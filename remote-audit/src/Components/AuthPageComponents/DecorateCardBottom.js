import * as React from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function DecorateCardBottom() {
    const [value, setValue] = React.useState([
        "2022-03-13T19:00:00.000Z",
        "2022-03-25T19:00:00.000Z",
    ]);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}
