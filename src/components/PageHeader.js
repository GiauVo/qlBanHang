import React from "react";
import {Card, createMuiTheme, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        padding: theme.spacing(2),
        display: 'inline-block',
        color: '#3c33b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4)
    }
}))

export default function PageHeader(props){

    const classes = useStyles();
    const {title, subTitle, icon} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}