import logo from './logo.svg';
import './App.css';
import PageWrapper from './PageWrapper';
import Peliculas from './Peliculas';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';


function App() {

	const [paginaActual, setPaginaActual]= useState(1);
	const TOTAL_FOR_PAGE = 4;

	let peliculas = peliculasJson;

	const cargarPeliculas = () =>{
		peliculas = peliculas.slice(
			(paginaActual - 1) * TOTAL_FOR_PAGE,
			paginaActual * TOTAL_FOR_PAGE
		);	
	}

	const getTotalPaginas = ()=>{
		let cantidadTotalDePeliculas = peliculasJson.length;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_FOR_PAGE);
	}

	cargarPeliculas()

  return (

	<PageWrapper>


		{peliculas.map(peliculas =>
			<Peliculas
			titulo={peliculas.titulo}
			rate={peliculas.rate}
			direction={peliculas.direction}
			actors={peliculas.actors}
			date={peliculas.date}
			duration={peliculas.duration}
			description={peliculas.description}	
			img={peliculas.img}>
			</Peliculas>
			
		)
		}

		<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={ (pagina) => {
			setPaginaActual(pagina)
		} }/>
	
		</PageWrapper>

 /*{
<Peliculas
 titulo=''
 rate=''
 director=''
 actors=''
 date=''
 duration=''

 />
  }*/
     
  );
}

export default App;
