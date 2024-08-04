import { Metadata } from "next";

export const metadaat: Metadata = {
    title: "Resetar senha | Dogs",
    description: "Resete sua senha no Dogs.",
}

export default async function ResetarPage() {
    return (
        <div>
            <h1 className="title">Resetar</h1>
        </div>
    );
}