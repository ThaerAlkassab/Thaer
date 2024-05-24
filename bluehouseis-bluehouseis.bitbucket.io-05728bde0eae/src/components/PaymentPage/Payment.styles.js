import { makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    paymentType:{
        background: "rgba(90,90,90,.1)",
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding:"0 20px",
        border: "1px solid rgba(90,90,90,.2)",
        height: "30px",
        cursor:"pointer",
    }
}));


export default useStyles