import Logo from "../../assets/Logo.svg";
import { Header, Form } from "./styles.js";
import { kenzieHubApi } from "../../api/";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

function SignUp({ handleNavigation, authenticated}) {
    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Nome obrigatório")
            .min(3, "Mínimo 3 caracteres")
            .max(30, "Máximo 30 caracteres")
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "O nome deveconter apenas letras."),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup
            .string()
            .required("Senha obrigatória")
            .min(6, "Mínimo 6 caracteres")
            .max(16, "Máximo 16 caracteres")
            .matches(
                "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
                "A senha deve conter ao menos uma letra maiúsculoa, uma minúscula, um número e um caracter especial"
            ),
        confirmPassword: yup
            .string()
            .required("Senha obrigatória")
            .oneOf([yup.ref("password")], "As senhas não conferem"),
        course_module: yup.string().required("Selecione um módulo"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const history = useHistory();

    const handleSignUp = (data) => {
        console.log(data);

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            course_module: data.course_module,
            bio: "Lorem ipsum dolor emet",
            contact: "linkedin/in/johndoe",
        };

        kenzieHubApi
            .post("/users", userData)
            .then((response) => {
                toast.success("Conta criada com sucesso");
                history.push("/login");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Erro ao criar a conta");
            });
    };

    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <Header>
                <img src={Logo} alt="logo"></img>
                <button onClick={() => handleNavigation("/login")}>Voltar</button>
            </Header>
            <Form>
                <div>
                    <h1>Crie sua conta</h1>
                    <p>Rápido e grátis, vamos nessa!</p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome" {...register("name")} className={`${errors.name? "inputError" : ""}`}/>
                    {errors.name && <span>{errors.name.message}</span>}
                    <label>E-mail</label>
                    <input type="email" placeholder="Digite aqui seu e-mail" {...register("email")} className={`${errors.email? "inputError" : ""}`}/>
                    {errors.email && <span>{errors.email.message}</span>}
                    <label>Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha" {...register("password")} className={`${errors.password? "inputError" : ""}`}/>
                    {errors.password && <span>{errors.password.message}</span>}
                    <label>Confirmar senha</label>
                    <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} className={`${errors.confirmPassword? "inputError" : ""}`} />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    <label>Selecionar Módulo</label>
                    <select {...register("course_module")} className={`${errors.course_module? "inputError" : ""}`}>
                        <option value="default" disabled hidden>
                            Escolha o seu módulo
                        </option>
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                        <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro Módulo (Frontend utilizando React)">Terceiro Módulo</option>
                        <option value="Quarto Módulo (Introdução ao Backend)">Quarto Módulo</option>
                        <option value="Quinto Módulo (Backend Avançado)">Quinto Módulo</option>
                        <option value="Sexto Módulo (Carreira e Empregabilidade)">Sexto Módulo</option>
                    </select>
                    {errors.course_module && <span>{errors.course_module.message}</span>}
                    <button type="submit">Cadastrar</button>
                </form>
            </Form>
        </div>
    );
}

export default SignUp;
