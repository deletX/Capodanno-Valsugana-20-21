import React from 'react';
import PageContainer from "./PageContainer";
import {Typography} from "@material-ui/core";

const NotFound = () => {
    return (
        <PageContainer>
            <div style={{width: "100%", marginTop: 32, display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img alt="not found" src={"/broken-house.png"} style={{width: "60%", maxWidth: 333}}/>
                <Typography color="textSecondary" variant={"body2"} style={{marginBottom: 64}}>404</Typography>
                <Typography color="primary" variant="h3" align="center">
                    <b>Oops! Qualcosa è andato storto!</b>
                </Typography>
                <Typography align="center" style={{marginTop: 16}}>
                    Non siamo riusciti a trovare la pagina che cercavi :(
                </Typography>
            </div>
        </PageContainer>
    );
};

export default NotFound;