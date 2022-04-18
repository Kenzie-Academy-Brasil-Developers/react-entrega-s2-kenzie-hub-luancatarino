import { Header, Form, Container, Content } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../api";
import { toast } from "react-toastify";

function EditTech({ setModalEdit, loadData, technology }) {
    const token = JSON.parse(localStorage.getItem("KenzieHub-Token"));
    console.log(technology.id);

    const schema = yup.object().shape({
        // title: yup.string().required("Campo obrigatório").min(2, "Mínimo 2 caracteres").max(16, "Máximo 16 caracteres"),
        status: yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleEditTech = (data) => {
        kenzieHubApi
            .put(
                `/users/techs/${technology.id}`,
                { status: data.status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                toast.success("Tecnologia editada com sucesso");
                loadData();
                setModalEdit(false);
            })
            .catch((err) => {
                // toast.error("Erro ao editar tecnologia");
            });
    };

    const handleDeleteTech = () => {
        kenzieHubApi
            .delete(`/users/techs/${technology.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                loadData();
                setModalEdit(false);
            })
            .catch((err) => {
                toast.error("Erro ao excluir tecnologia");
                console.log(err);
            });
    };

    return (
        <Container>
            <Content>
                <Header>
                    <div className="navBar">
                        <h3>Editar Tecnologia</h3>
                        <button onClick={() => setModalEdit(false)}>x</button>
                    </div>
                </Header>
                <Form>
                    <form onSubmit={handleSubmit(handleEditTech)}>
                        <label>Nome</label>
                        <input
                            type="text"
                            // className={`${errors.title ? "inputError" : ""}`}
                            placeholder={`${technology.title}`}
                            disabled
                            // {...register("title")}
                        />
                        {/* {errors.title && <span>{errors.title.message}</span>} */}
                        <label>Selecionar Nível</label>
                        <select {...register("status")} className={`${errors.status ? "inputError" : ""}`}>
                            <option selected={`${technology.status === "Iniciante" ? "selected" : ""}`}value="Iniciante">Iniciante</option>
                            <option selected={`${technology.status === "Intermediário" ? "selected" : ""}`} value="Intermediário">Intermediário</option>
                            <option selected={`${technology.status === "Avançado" ? "selected" : ""}`}value="Avançado">Avançado</option>
                        </select>
                        <div classNames="buttons">
                            <button className="btnEditTech" onClick={handleEditTech} type="submit">
                                Salvar Alterações
                            </button>
                            <button className="btnDeleteTech" onClick={handleDeleteTech}>
                                Excluir
                            </button>
                        </div>
                    </form>
                </Form>
            </Content>
        </Container>
    );
}

export default EditTech;
