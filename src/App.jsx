import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
	const API_URL = "https://jsonplaceholder.typicode.com";
	const [resource, setResource] = useState("users");
	const [data, setData] = useState([]);

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
			<Form
				resource={resource}
				setResource={setResource}
			/>
			{/* <List
				data={data}
				setData={setData}
			/> */}
			<Table
				data={data}
			/>
		</>
	);
}

export default App;
