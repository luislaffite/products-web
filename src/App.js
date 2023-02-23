import logo from './logo.svg';
import './App.css';
import PageWrapper from './PageWrapper';
import Peliculas from './Peliculas';
import peliculasJson from './peliculas.json';


function App() {

	let peliculas = peliculasJson ;

 

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
