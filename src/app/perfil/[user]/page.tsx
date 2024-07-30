export default async function PerfilUserPage({ params }: { params: { user: string } }) {
    return (
        <div>
            <h1 className="title">Usuário: {params.user}</h1>
        </div>
    );
}