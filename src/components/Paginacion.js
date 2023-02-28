export default function Paginacion(props) {

    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++){
            let pagina = i +1;
            resultado.push(
            <a onClick={() => props.onChange(pagina)} 
            className={props.pagina === pagina ? 'active' : ''}>
                {pagina}
                </a>
            );
        }
        return resultado;
    }

    return(
        <div className="topbar-filter">
        <label>Movies per page:</label>

        <div className="pagination2">
          <span>Pagina {props.pagina} de {props.total}:</span>
          
          {getPaginas()}

        </div>
      </div>
    );
}