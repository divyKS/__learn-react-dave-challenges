import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
	const API_URL = "https://jsonplaceholder.typicode.com";
	const [resource, setResource] = useState("users");
	const [data, setData] = useState([]);
	
	const chosenResource = async (e) => {
		setResource(e.target.textContent);
	}

	useEffect(()=>{
		const getData = async () => {
			try{
				const response = await fetch(`${API_URL}/${resource}`);
				const result = await response.json();
				setData(result);
			} catch (e){
				console.log(e.message);
			}
		}
		getData();
	}, [resource])

	return( 
		<>
			<Form />
			<List />
			<header>
				<button onClick={(e)=>chosenResource(e)}>users</button>
				<button onClick={(e)=>chosenResource(e)}>posts</button>
				<button onClick={(e)=>chosenResource(e)}>comments</button>
			</header>
			<main>
				<ul>
					{data.map(object=>{
						return <li key={object.id}>{JSON.stringify(object)}</li>
					})}
				</ul>	
			</main>
		</>
	);
}

export default App;
