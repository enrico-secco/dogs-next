"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";

function FormButton() {
    const { pending } = useFormStatus();

    return <>
        <Button disabled={pending}>{pending ? "Entrando..." : "Entrar"}</Button>
    </>
}

export default function LoginForm() {
    const [state, action] = useFormState(login, {
        ok: false,
        error: "",
        data: null
    })

    return (
        <>
            <form action={action}>
                <input type="text" name="username" placeholder="Usuário" />
                <input type="password" name="password" placeholder="Senha" />
                <FormButton />
                <p>{state.error}</p>
            </form>
        </>
    )
}