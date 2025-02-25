import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-emerald-900 text-white'>
                <div className="container flex justify-between items-center text-lg">
                    
                    {/* Logo */}
                    <div className="flex items-center">
                    <Link to='/home' className="text-2xl font-bold">
                        <img
                            src="https://ik.imagekit.io/t10wpd1oka/projeto_final_bloco_03/logo_farmacia%201.png?updatedAt=1740487447746"
                            alt="Imagem logo farmácia"
                            className="w-40" // Ajuste o tamanho conforme necessário
                        />
                    </Link>
                    </div>
                   
                    {/* Barra de pesquisa */}
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="  Pesquisar..." className="w-[500px] p-1 border rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-950" />
                        <MagnifyingGlass size={30} />
                    </div>

                    {/* Menu de navegação */}
                    <div className='flex gap-6 items-center'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>

                    <Link to= '/cadastrarcategoria'> 
                    <a className="hover:underline" href="">Cadastrar Categoria</a>
                    </Link>
                        <User size={30} />
                        <ShoppingCart size={30} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
