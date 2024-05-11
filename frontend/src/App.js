import './App.scss'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

function App() {
  	return (
		<body>
			<div className="App">
				<Router>
				<Navigation />
					<Routes>
						<Route path='/' element= {<HomePage />} />
						<Route path='/exercise' exact Component={ExercisePage} />
					</Routes>
				</Router>
			</div>
		</body>
  	);
}

export default App;
