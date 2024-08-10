"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
    const { pending } = useFormStatus();

    return <>
        <Button disabled={pending}>{pending ? "Enviando email..." : "Recuperar senha"}</Button>
    </>
}

export default function LoginPerdeuForm() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href.replace('perdeu', 'resetar'));
    }, []);

    const [state, action] = useFormState(passwordLost, {
        ok: false,
        error: "",
        data: null
    });

    return (
        <>
            <form action={action} className={styles.form}>
                <Input label="Usuário / Email" name="login" type="text" />
                <input type="hidden" name="url" value={url} />
                <ErrorMessage error={state.error} />
                {state.ok ?
                    <p style={{ color: '#4c1' }}>Email enviado com sucesso.</p>
                    :
                    <FormButton />
                }
            </form>
        </>
    )
}