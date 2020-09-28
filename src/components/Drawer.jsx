import {Divider, SwipeableDrawer, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Home, Map, MeetingRoom, Warning} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        margin: theme.spacing(1),
    },
    title: {
        marginBottom: theme.spacing(1),
    }
}));

const Drawer = (props) => {

    const classes = useStyles();
    const history = useHistory();
    const goTo = (addr) => () => {
        props.onClose()
        history.push(addr)
    }
    return (
        <SwipeableDrawer onClose={props.onClose} onOpen={props.onOpen} open={props.open} anchor="left">
            <div className={classes.list}>
                <Typography variant={"h4"} className={classes.title}>Menu</Typography>
                <Divider variant="fullWidth"/>
                <List>
                    <ListItem button onClick={goTo("/")}>
                        <ListItemIcon> <Home/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button onClick={goTo("/planimetria")}>
                        <ListItemIcon> <Map/></ListItemIcon>
                        <ListItemText primary="Planimetria"/>
                    </ListItem>
                    <ListItem button onClick={goTo("/piano-covid")}>
                        <ListItemIcon> <Warning/></ListItemIcon>
                        <ListItemText primary="Piano Covid"/>
                    </ListItem>
                    <ListItem button disabled onClick={goTo("/camere")}>
                        <ListItemIcon> <MeetingRoom/></ListItemIcon>
                        <ListItemText primary="Camere"/>
                    </ListItem>
                </List>
            </div>
        </SwipeableDrawer>
    )
}

export default Drawer