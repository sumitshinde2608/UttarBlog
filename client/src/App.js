import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import Article from "./pages/Article/Article";

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/write' element={<Article />} />
		</Routes>
	</Router>
);

export default App;
