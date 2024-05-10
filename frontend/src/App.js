import './App.scss'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  	return (
		<div className="App">
			<body>
			<Router>
				{/* <Navigation /> */}
					<Routes>
						<Route path='/' element= {<HomePage />} />
						<Route path='/exercise' exact Component={ExercisePage} />
					</Routes>
				</Router>
			</body>
		</div>
  	);
}

export default App;
