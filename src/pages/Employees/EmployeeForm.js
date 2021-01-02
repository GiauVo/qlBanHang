import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useForm, Form} from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'}
]

const initialFValues ={
    id: 0,
    fullName:'',
    email:'',
    address:'',
    mobile:'',
    gender:'male',
    storeId:'',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {
    const validate = (fieldValues = values ) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if('email' in fieldValues)
            if(fieldValues.email) {
                temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ?"":"Email is not valid."
            } else {
                temp.email = "This field is required."
            }
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if('storeId' in fieldValues)
            temp.storeId = fieldValues.storeId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    } = useForm(initialFValues, true, validate);

    const handleSubmit= e => {
        e.preventDefault()
        if(validate())
            window.alert("testing")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                     name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />

                    <Controls.Select
                        name="storeId"
                        label="Store"
                        value={values.storeId}
                        onChange={handleInputChange}
                        options={employeeService.getStoreCollection()}
                        error={errors.storeId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.CheckBox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            />

                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}