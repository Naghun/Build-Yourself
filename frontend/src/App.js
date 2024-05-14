import './App.scss'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExercisePage from './pages/ExercisePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Lobby from './pages/Lobby'

function App() {
  	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element= {<HomePage />} />
					<Route path='/exercise' exact Component={ExercisePage} />
					<Route path='/about' exact Component={About} />
					<Route path='/contact' exact Component={Contact} />
					<Route path='/privacy-policy' exact Component={Privacy} />
					<Route path='/shop' exact Component={Shop} />
					<Route path='/lobby' exact Component={Lobby} />
				</Routes>
				<Footer />
			</Router>
		</div>
  	);
}

export default App;
