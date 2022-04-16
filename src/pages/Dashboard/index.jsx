import Logo from "../../assets/Logo.svg";
import { Header, User, Container, Content } from "./styles.js";
import { kenzieHubApi } from "../../api";
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

function Dashboard({ authenticated, setAuthenticated }) {
    const [user, setUser] = useState({});
    const [techs, setTechs] = useState([]);

    const history = useHistory()

    const back = () => {
        localStorage.clear();
        history.push("/login");
    };

    const userId = JSON.parse(localStorage.getItem("KenzieHub-User"));
    console.log(userId);

    useEffect(() => {
        kenzieHubApi.get(`/users/${userId}`).then((response) => {
            const newUser = {
                name: response.data.name,
                course: response.data.course_module,
            };
            setUser(newUser);
            setTechs(response.data.techs);
        });
    }, []);

    console.log(techs);

    
//     if (!authenticated) {
//         return <Redirect to="/login" />;
//    }

    return (
        <Container>
            <Header>
                <img src={Logo} alt="logo"></img>
                <button onClick={back}>Sair</button>
            </Header>
            <hr />
            <User>
                <h1>Olá, {user.name}</h1>
                <p>{user.course}</p>
            </User>
            <hr />
            <Content>
                <div className="addTech">
                    <h2>Tecnologias</h2>
                    <button>+</button>
                </div>
                <div className="techs"></div>
            </Content>
        </Container>
    );
}

export default Dashboard;
