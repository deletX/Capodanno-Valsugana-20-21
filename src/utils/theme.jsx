import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/brown';
import indigo from '@material-ui/core/colors/blue';
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[900],
        },
        secondary: {
            main: green[700],
        },
    },
});
theme = responsiveFontSizes(theme)

export default theme