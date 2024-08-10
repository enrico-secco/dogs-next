import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recuperar senha | Dogs",
    description: "Recupere sua senha no Dogs.",
}

export default async function PerdeuPage() {
    return (
        <div>
            <h1 className="title">Perdeu</h1>
            <LoginPerdeuForm />
        </div>
    );
}