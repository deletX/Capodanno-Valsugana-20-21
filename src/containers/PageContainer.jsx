import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

    },
    children: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            width: "90%",
        },
        [theme.breakpoints.up("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "60%",
        },
        // marginBottom: theme.spacing(10),
    }
}));

const PageContainer = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            <div className={classes.children}>
                {props.children}
            </div>
        </Paper>
    );
};


export default PageContainer;