export function Pagination({ pages, currentPage, setCurrentPage, key }) {
    return (
        <div className="flex">
            <button 
            className="px-3 mx-1 bg-white text-orange-500 border border-zinc-300 disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage - 1)}
            key={key}
            disabled={currentPage === 0}
                >Anterior
            </button>
            {Array.from(Array(pages), (product, index) => {
                return ( 
                    <div>
                        <button
                        className={`${index === currentPage ? "border-2 border-orange-500" : ''} px-3 mx-1 bg-white text-orange-500 border border-zinc-300`}
                        value={index}
                        key={index}
                        onClick={(event: any) => setCurrentPage(Number(event.target.value))}>{index + 1}
                        </button>
                    </div>
                )
            })}
            <button 
            className="px-3 mx-1 bg-white text-orange-500 border border-zinc-300 disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage + 1)}
            key={key}
            disabled={currentPage === pages - 1}
                >Próxima
            </button>
        </div>
    )
}