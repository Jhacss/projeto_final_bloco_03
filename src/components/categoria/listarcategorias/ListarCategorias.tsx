import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";



function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias/', setCategorias); 
        } catch (error: any) {
            alert('Erro ao buscar temas');
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {categorias.map((categorias) => ( 
                            <CardCategorias key={categorias.id} categoria={categorias} />
                        ))}
        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListarCategorias;