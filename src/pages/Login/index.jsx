import Logo from "../../assets/Logo.svg";
import { Header, Form } from "./styles.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { kenzieHubApi } from "../../api/";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

function Login({ authenticated, setAuthenticated }) {
    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        password: yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const history = useHistory();

    const handleSignUp = () => {
        history.push("/signup");
    };
    const handleLogin = async (data) => {
        const response = await kenzieHubApi.post("/sessions", data).catch((err) => {
            toast.error("E-mail ou senha inválidos");
        });
        const { user, token } = response.data;
        console.log(response.data.token);
        localStorage.clear();
        localStorage.setItem("KenzieHub-Token", JSON.stringify(token));
        localStorage.setItem("KenzieHub-User", JSON.stringify(user.id));
        toast.success("Login realizado com sucesso");
        setAuthenticated(true);
        history.push("/Dashboard");
    };

    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <Header>
                <img src={Logo} alt="logo"></img>
            </Header>
            <Form>
                <div>
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="Digite aqui seu e-mail"
                        {...register("email")}
                        className={`${errors.email ? "inputError" : ""}`}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite aqui sua senha"
                        {...register("password")}
                        className={`${errors.password ? "inputError" : ""}`}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <button type="submit">Entrar</button>
                    <p>Ainda não possui uma conta?</p>
                </form>
                <button onClick={handleSignUp} className="btnSignUp">
                    Cadastre-se
                </button>
            </Form>
        </div>
    );
}

export default Login;
