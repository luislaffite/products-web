import React, { useState } from "react";
import '../styles/App.css';
import Pelicula from './Pelicula';
import Wrapper from "./Wrapper";
import Paginacion from "./Paginacion";
import { useEffect } from "react";

const ListadoComponent = () => {



	const [paginaActual, setPaginaActual] = useState(1);
	const [peliculas, setPeliculas] = useState([]);
	const TOTAL_POR_PAGINA = 3;

	useEffect(() => {
		buscarPeliculas();
	}, []);

	const buscarPeliculas = async() =>{
		let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

		let respuesta = await fetch(url, {
			"method": 'GET',
			"headers": {
				"Accept": 'application/json',
				"Content-Type": 'application/json',
				"Origin":'https://lucasmoy.dev/'
			}
		});

		let json = await respuesta.json();
		setPeliculas(json);
	}

		const getTotalPaginas = () => {

			let cantidadPeliculas = peliculas.length;
			return Math.ceil(cantidadPeliculas / TOTAL_POR_PAGINA);
		}

		let peliPorPagina = peliculas.slice(
			(paginaActual - 1) * TOTAL_POR_PAGINA,
			  paginaActual * TOTAL_POR_PAGINA
			);

  return (
    <div>
       <Wrapper>

		{peliPorPagina.map(pelicula => 
		
		<Pelicula titulo={pelicula.titulo} calificacion = {pelicula.calificacion}
			director = {pelicula.director} actores = {pelicula.actores} fecha = {pelicula.fecha}
			duracion={pelicula.duracion} imagen = {pelicula.img}>
			{pelicula.descripcion}
		</Pelicula>	
		)}
	  
	   <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
		setPaginaActual(pagina)
	   }}/>
	   </Wrapper>
    </div>
  );
};

export default ListadoComponent;
