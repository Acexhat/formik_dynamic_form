import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: '100vh'
    },
    paperRoot: {
        backgroundColor: "#fec5bb",
        height: "60%",
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem"
    },
    gridroot: {
        width: "90% !important",
        marginBottom: "1.5rem",
        justifyContent: "space-around"
    },
    headerTitle: {
        marginBottom: "1rem !important",
        fontWeight: "800 !important"
    }
});
export default useStyles