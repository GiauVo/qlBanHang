import React from "react";
import {MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import KeyboardDateInput from "@material-ui/pickers/_shared/KeyboardDateInput";

export default function DatePicker(props){

    const { name, label, value, onChange} = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolBar variant="inline" inputVariant="outlined"
                                label={label}
                                formate="MM/dd/yyyy"
                                name={name}
                                value={value}
                                onChange={date => onChange(convertToDefEventPara(name, date))}
    />
        </MuiPickersUtilsProvider>
    )
}