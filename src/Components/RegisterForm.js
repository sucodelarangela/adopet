// components
import Button from "./Button";

// dependencies / hooks
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [visiblePassword, setVisiblePassword] = useState({
		password: false,
		passwordRetry: false,
	});

	const handlePasswordType = (passwordInput) => {
		setVisiblePassword({
			...visiblePassword,
			[passwordInput]: visiblePassword[passwordInput] ? false : true,
		});
	};

	// destructuring useForm
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
		navigate("/login");
	};

	return (
		<motion.section
			className="register"
			initial={{ width: 0 }}
			animate={{ width: "auto", transition: { duration: 0.5 } }}
			exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
		>
			<img src="logo-blue.svg" alt="" />
			<p>
				Ainda não tem cadastro? <br /> Então, antes de buscar seu melhor amigo,
				precisamos de alguns dados:
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Nome</label>
				<input
					id="name"
					type="text"
					{...register("name", {
						required: "É necessário informar seu nome",
						maxLength: {
							value: 25,
							message: "O número máximo de caracteres é 25",
						},
					})}
					placeholder="Digite seu nome completo"
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}

				<label htmlFor="email">E-mail</label>
				<input
					id="email"
					type="email"
					{...register("email", {
						required: "É necessário informar um endereço de email",
						pattern:
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
					placeholder="Escolha seu melhor email"
				/>
				{errors.email && (
					<p className="error">
						{errors.email.message || "Por favor, verifique o email digitado"}
					</p>
				)}

				<label htmlFor="pass-create">Senha</label>
				<span>
					<span
						onClick={() => handlePasswordType("password")}
						className="pass__view"
					></span>
					<input
						id="pass-create"
						type={visiblePassword.password ? "text" : "password"}
						{...register("password", {
							required: "Crie uma senha",
							pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
						})}
						placeholder="Crie uma senha"
					/>
				</span>
				{errors.password && (
					<p className="error">
						{errors.password.message ||
							"A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"}
					</p>
				)}

				<label htmlFor="pass-confirm">Confirme sua senha</label>
				<span>
					<span
						onClick={() => handlePasswordType("passwordRetry")}
						className="pass__view"
					></span>
					<input
						id="pass-confirm"
						type={visiblePassword.passwordRetry ? "text" : "password"}
						{...register("confirm_password", {
							required: "Repita a senha criada acima",
							validate: (value) => {
								if (watch("password") !== value) {
									return "As senhas não batem";
								}
							},
						})}
						placeholder="Repita a senha criada acima"
					/>
				</span>
				{errors.confirm_password && (
					<p className="error">{errors.confirm_password.message}</p>
				)}

				<Button type="submit" children="Cadastrar" />
			</form>
		</motion.section>
	);
};

export default RegisterForm;
