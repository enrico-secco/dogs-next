export default async function FotoIdPage({ params }: { params: { id: number } }) {
    return (
        <div>
            <h1 className="title">FotoId: {params.id}</h1>
        </div>
    );
}