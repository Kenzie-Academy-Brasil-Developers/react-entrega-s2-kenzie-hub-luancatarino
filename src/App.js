import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes />
            <ToastContainer
                position="top-right"
                autoClose={1200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ backgroundColor: "#343b41", color: "#f8f9fa"}}
            />
        </>
    );
}

export default App;
