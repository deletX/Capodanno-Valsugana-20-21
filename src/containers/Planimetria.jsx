import React from 'react';
import PageContainer from "./PageContainer";
import {Divider, Link, Typography} from "@material-ui/core";
import {ImageOverlay, Map} from "react-leaflet";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Planimetria = () => {
    return (
        <PageContainer>
            <div style={{width: "100%", marginTop: 24}}>
                <Typography variant={"h1"}>
                    Planimetria
                </Typography>
                <Divider variant={"fullWidth"} style={{marginTop: 8, marginBottom: 24}}/>
                <Breadcrumbs aria-label={"breadcrumb"}>
                    <Link color={"inherit"} href={"/"}>Home</Link>
                    <Link color="textPrimary">Planimetria</Link>
                </Breadcrumbs>
                <Typography style={{marginTop: 16, marginBottom: 8}}>
                    Qui sotto trovate una mappa navigabile che mostra i 4 piani dell'Hotel Val Paradiso.
                </Typography>
                <Typography style={{marginBottom: 8}}>
                    Trovate le camere indicate con il numero ed il numero di posti letto relativi.
                </Typography>
                <Typography style={{marginBottom: 24}}>
                    Trovate inoltre indicati i percorsi, detergenti, disinfettanti, termoscanner, e tutte le info che
                    possono esservi utile nella navigazione dell'Hotel in coerenza con le misure covid che
                    implementeremo e che trovate più dettagliate nella pagina <Link href="/piano-covid"> del piano
                    covid</Link>
                </Typography>
                <Map center={[40.748, -74.180]} zoom={14}
                     style={{width: "100%", height: "75vh"}}>
                    <ImageOverlay
                        url="https://stefanogavioli.github.io/assets/img/Planimetria.svg"
                        attribution="Steppo"
                        bounds={[[40.712216, -74.22655], [40.773941, -74.12544]]}
                    />
                </Map>

            </div>
        </PageContainer>
    );
};

export default Planimetria;