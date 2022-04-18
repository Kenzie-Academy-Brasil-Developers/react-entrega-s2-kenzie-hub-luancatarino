import { Header, Form, Container, Content } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../api";
import { toast } from "react-toastify";

function RegisterTech({ setModalAdd, loadData }) {
    const token = JSON.parse(localStorage.getItem("KenzieHub-Token"));

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório").min(2, "Mínimo 2 caracteres").max(16, "Máximo 16 caracteres"),
        status: yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRegisterTech = (data) => {
        kenzieHubApi
            .post(
                `/users/techs`,
                {
                    title: data.title,
                    status: data.status,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                toast.success("Tecnologia adicionada com sucesso");
                loadData();
                setModalAdd(false);
            })
            .catch((err) => {
                toast.error("Erro ao cadastrar tecnologia");
            });
    };

    return (
        <Container>
            <Content>
                <Header>
                    <div className="navBar">
                        <h3>Cadastrar Tecnologia</h3>
                        <button onClick={() => setModalAdd(false)}>x</button>
                    </div>
                </Header>
                <Form>
                    <form onSubmit={handleSubmit(handleRegisterTech)}>
                        <label>Nome</label>
                        <input
                            type="text"
                            className={`${errors.title ? "inputError" : ""}`}
                            placeholder="Digite aqui a tecnologia"
                            {...register("title")}
                        />
                        {errors.title && <span>{errors.title.message}</span>}
                        <label>Selecionar Nível</label>
                        <select {...register("status")} className={`${errors.status ? "inputError" : ""}`}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button className="btnAddTech" type="submit">
                            Cadastrar Tecnologia
                        </button>
                    </form>
                </Form>
            </Content>
        </Container>
    );
}

export default RegisterTech;
