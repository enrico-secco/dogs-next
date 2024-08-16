import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Estatísticas | Minha Conta'
}

export default async function EstatisticasPage() {
    return (
        <div>
            <h1 className="title">Estatisticas</h1>
        </div>
    );
}