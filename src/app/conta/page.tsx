import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Minha Conta'
}

export default async function ContaPage() {
    return (
        <div>
            <h1 className="title">Conta</h1>
        </div>
    );
}