function Home() {
    return (
        <div className="
        flex 
        justify-center 
        bg-emerald-900
        ">
            <div className ="
            container 
            grid 
            grid-cols-2
            text-white 
            ">
                <div className="
                flex 
                flex-col 
                items-center 
                justify-center
                gap-4
                py-4
                ">
                    <h2 className="
                    text-5xl
                    max-sm:text-2xl
                    font-bold
                    
                    ">
                        Seja Bem Vinde!
                        </h2>
                    <p className="text-x1">
                        Aqui você encontra Medicamentos e Cosméticos!
                    </p>

                    <div className="
                    flex
                    justify-around
                    gap-4
                    ">
                        <div className="
                        
                        rounded
                        border-white
                        border-solid
                        border-2
                        p-2
                        text-white
                        ">
                            Cadastrar Produto

                        </div>
                    </div>


                </div>
 
                <div className= "flex justify-center">
                    <img
                        src="https://ik.imagekit.io/t10wpd1oka/projeto_final_bloco_03/2546639-ai(1)%201.svg?updatedAt=1740484971889"
                        alt="Imagem da Página Home"
                       className="w-2/4"
                    />
                </div>
            </div>
        </div>
    )
}
 
export default Home