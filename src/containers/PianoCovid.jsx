import React from 'react';
import {Divider, Link, Typography} from "@material-ui/core";
import PageContainer from "./PageContainer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const PianoCovid = () => {
    return (
        <PageContainer>
            <div style={{width: "100%", marginTop: 24}}>
                <Typography variant={"h1"}>
                    Piano Covid
                </Typography>
                <Alert severity="warning">
                    <AlertTitle>Work in progress</AlertTitle>
                    Questa pagina non è ancora completa
                </Alert>
                <Divider variant={"fullWidth"} style={{marginTop: 8, marginBottom: 24}}/>
                <Breadcrumbs aria-label={"breadcrumb"}>
                    <Link color={"inherit"} href={"/"}>Home</Link>
                    <Link color="textPrimary">Piano Covid</Link>
                </Breadcrumbs>
                <Typography style={{marginTop: 16, marginBottom: 8}}>
                    Qui troverete il piano covid appena sarà implementato.
                </Typography>


            </div>
        </PageContainer>
    );
};

export default PianoCovid;