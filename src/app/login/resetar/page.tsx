import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resetar senha | Dogs",
    description: "Resete sua senha no Dogs.",
}

type ResetarPageProps = {
    searchParams: {
        key: string;
        login: string;
    }
};

export default async function ResetarPage({ searchParams }: ResetarPageProps) {
    return (
        <div className="animeLeft">
            <h1 className="title">Resetar sua senha</h1>
            <LoginResetarForm
                keyToken={searchParams.key}
                login={searchParams.login}
            />
        </div>
    );
}