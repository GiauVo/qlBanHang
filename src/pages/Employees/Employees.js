import React, {useEffect, useState} from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees(props){
    const classes = useStyles();

    const [lstEmployee, setListEmployee] = useState([{id: 1544 , name: ""}]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/employee")
            .then(res => res.json())
            .then(response => {
                var arr = [{id: 1, name: "H1"}, {id: 2, name: "H2"}]
                if(response.length > 0) {
                    console.log("response",response)
                    setListEmployee(response);
                }

            })
            .catch(error => console.log(error));
    }, []);
    console.log(lstEmployee);
    return (

/*        <>
        <PageHeader
            title="New Employee"
            subTitle="Form design with validation"
            icon={<PeopleAltIcon fontSize="large"/>}
        />
       <Paper className={classes.pageContent}>
            <EmployeeForm/>
        </Paper>
        </>*/

        <h2>{lstEmployee[0].name}</h2>
    )
}