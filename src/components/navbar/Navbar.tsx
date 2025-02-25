import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-emerald-900 text-white'>
                <div className="container flex justify-between items-center text-lg">
                    
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://ik.imagekit.io/t10wpd1oka/projeto_final_bloco_03/logo_farmacia%201.png?updatedAt=1740487447746"
                            alt="Imagem logo farmácia"
                            className="w-40" // Ajuste o tamanho conforme necessário
                        />
                    </div>
                   
                    {/* Barra de pesquisa */}
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="  Pesquisar..." className="w-[500px] p-1 border rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-950" />
                        <MagnifyingGlass size={30} />
                    </div>

                    {/* Menu de navegação */}
                    <div className='flex gap-6 items-center'>
                        Categorias
                        Cadastrar Categoria
                        <User size={30} />
                        <ShoppingCart size={30} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
