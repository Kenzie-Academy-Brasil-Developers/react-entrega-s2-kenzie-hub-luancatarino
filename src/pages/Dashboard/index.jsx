import Logo from "../../assets/Logo.svg";
import { Header, User, Container, Content, Card } from "./styles.js";
import { kenzieHubApi } from "../../api";
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import RegisterTech from "../RegisterTech";
import EditTech from "../EditTech";

function Dashboard({ authenticated, setAuthenticated }) {
    const [user, setUser] = useState({});
    const [techs, setTechs] = useState([]);
    const [technology, setTechnology] = useState({});
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const history = useHistory();

    const back = () => {
        localStorage.clear();
        history.push("/");
        setAuthenticated(false);
    };

    const userId = JSON.parse(localStorage.getItem("KenzieHub-User"));

    const loadData = () => {
        kenzieHubApi.get(`/users/${userId}`).then((response) => {
            const newUser = {
                name: response.data.name,
                course: response.data.course_module,
            };
            setUser(newUser);
            setTechs(response.data.techs);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    if (!authenticated) {
        return <Redirect to="/" />;
    }

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
                    <button onClick={() => setModalAdd(true)}>+</button>
                    {modalAdd && <RegisterTech setModalAdd={setModalAdd} loadData={loadData} />}
                </div>
                <div className="techs">
                    {techs.map((tech) => {
                        function handleTech() {
                            setTechnology(tech);
                            setModalEdit(true);
                        }

                        return (
                            <Card key={tech.id} onClick={() => handleTech()}>
                                <h4>{tech.title}</h4>
                                <p>{tech.status}</p>
                            </Card>
                        );
                    })}
                    {modalEdit && <EditTech setModalEdit={setModalEdit} loadData={loadData} technology={technology} />}
                </div>
            </Content>
        </Container>
    );
}

export default Dashboard;
