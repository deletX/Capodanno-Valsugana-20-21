import React, {useState} from 'react';
import PageContainer from "./PageContainer";
import {Divider, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {white} from "color-name";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {FAQ, points, updates} from "../utils/data";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: white,
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        flexWrap: "nowrap",
        marginBottom: theme.spacing(4),

    },
    header: {
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        width: "100%",
        height: "500px",
        [theme.breakpoints.up('lg')]: {
            height: "700px",
        },
        [theme.breakpoints.down('sm')]: {
            height: "calc(100vh - 60px)",
            minHeight: "600px",
            backgroundPosition: "47% 50%",
        },
        backgroundImage: `url(/media/home_main.jpg)`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        color: "white",
        marginBottom: "13px"
    },
    scrim: {
        height: "calc(100% + 200px)",
        width: "100%",
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: "rgba(0,0,0,0.40)",
        [theme.breakpoints.down('sm')]: {
            minHeight: "calc(100vh - 60px)",
        },
        position: "relative",
    },
    mainTitle: {
        marginBottom: "1em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        [theme.breakpoints.down('sm')]: {
            "-webkit-line-clamp": 6,
        },
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            top: "10%"
        },
        position: "absolute",
        top: "20%",
        left: "20%"
    },
    title: {
        margin: "0 0 40px",
        width: "80%",
        [theme.breakpoints.down('xs')]: {
            fontSize: "30pt",
            // marginTop: "30px"
        }
    },
    cta: {
        [theme.breakpoints.down('sm')]: {
            width: "70%"
        },
        width: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",

    },
    ctaText: {
        width: "50%",
        [theme.breakpoints.down('xs')]: {
            width: "70%"
        },

    },
    buttons: {
        height: "40px",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

    body: {
        width: "92%",
        [theme.breakpoints.up('lg')]: {
            width: "60%",
        },
    },
    element: {
        "&>*": {
            margin: theme.spacing(1),
        },
        marginBottom: "20px"
    },
    profileCard: {
        width: "200px",
    },
    eventCard: {
        width: "300px",
        height: "270px",
    },
    horizontalList: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        overflowX: "auto",
    },
    dialogContent: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    section: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    downButton: {
        animationName: '$pulsate',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
    },
    "@keyframes pulsate": {
        "0%": {transform: "scale(1)", opacity: 0.8},
        "50%": {transform: "scale(1.5)", opacity: 1.0},
        "100%": {transform: "scale(1)", opacity: 0.8},
    }


}))
const MainPage = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className={classes.root}>
                <div className={classes.header}>
                    <div className={classes.scrim}>
                        <div className={classes.content}>
                            <Typography variant="h1" className={classes.title}>
                                Capodanno 20-21
                            </Typography>
                            <div className={classes.cta}>
                                <Typography className={classes.ctaText}>
                                    Come gli anni precedenti anche questo anno stiamo organizzando il capodanno in
                                    Valsugana, nella medesima struttura degli anni scorsi.
                                </Typography>
                                <Button variant="contained" color="secondary" className={classes.buttons}
                                        onClick={() => setOpen(true)}
                                >
                                    Vieni anche tu!
                                </Button>

                            </div>

                        </div>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "absolute",
                            bottom: "2%"
                        }}>
                            <ExpandMoreIcon color="primary" className={classes.downButton} style={{fontSize: 50}}/>
                        </div>
                    </div>
                </div>
            </div>
            <PageContainer>
                <Grid container spacing={3} className={classes.section}>
                    <Grid item sm={6} xs={12}>
                        <Typography variant={"h4"}>
                            A che punto siamo?
                        </Typography>
                        <Timeline align="alternate" style={{marginLeft: "-16px", marginRight: "-8px"}}>
                            {points.map((value, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            color={value.ongoing ? "primary" : value.completed ? "secondary" : undefined}
                                            variant="outlined"/>
                                        {index !== points.length - 1 && <TimelineConnector/>}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>
                                            {value.title}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: "100%",
                            flexWrap: "wrap",
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "95px"
                            }}>
                                <TimelineDot
                                    style={{height: "0px", width: "0px"}}
                                    color="primary"
                                    variant="outlined"/>
                                <Typography>In corso</Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "115px"
                            }}>
                                <TimelineDot
                                    style={{height: "0px", width: "0px"}}
                                    color="secondary"
                                    variant="outlined"/>
                                <Typography>Completato</Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "115px"
                            }}>
                                <TimelineDot
                                    style={{height: "0px", width: "0px"}}
                                    variant="outlined"/>
                                <Typography>Da svolgere</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography variant={"h4"}>
                            Aggiornamenti
                        </Typography>
                        <List>
                            {updates.map((value, index) => (
                                <ListItem alignItems="flex-start" key={index}>
                                    <ListItemAvatar>
                                        <Avatar alt={value.author} src={value.img}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.title}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {value.date}
                                                </Typography>
                                                {` — ${value.content}`}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="fullWidth"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h4"} style={{marginBottom: 8}}>
                            FAQ
                        </Typography>
                        <div>
                            {FAQ.sort((first, second) => first.disabled - second.disabled).map((value, index) => (
                                <Accordion expanded={expanded === value.title} onChange={handleChange(value.title)}
                                           disabled={value.disabled} key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls={`${value.title.replace(/\\s+/g, '-').toLowerCase()}bh-content`}
                                        id={`${value.title.replace(/\\s+/g, '-').toLowerCase()}bh-header`}
                                    >
                                        <Typography className={classes.heading}>{value.title}</Typography>
                                        <Typography
                                            className={classes.secondaryHeading}>{value.subtitle}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <span
                                                dangerouslySetInnerHTML={{__html: value.content.replace(/(?:\r\n|\r|\n)/g, '<br>')}}/>
                                            {/*{value.content.split("\n").map((i, key) => (<p key={key}>{i}</p>))}*/}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </PageContainer>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{"Vuoi venire anche tu?"}</DialogTitle>
                <DialogContentText id="alert-dialog-description">
                    <Typography className={classes.dialogContent}>
                        Se vuoi venire anche tu e sei venuto gli scorsi anni chiedi al referente del tuo gruppo dello
                        scorso
                        anno di sentire Steppo o Simone. Altrimenti, se hai i contatti, puoi sentire direttamente loro!
                    </Typography>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                    }} color="primary">OK!</Button>
                </DialogActions>
            </Dialog>
        </>

    );
};

export default MainPage;