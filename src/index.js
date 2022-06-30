import { createRoot } from "react-dom/client";
import AuthContext from "./AuthContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Detail";
import Biklak from "./Biklak";
import "./style.css";
const container = document.getElementById("root");
const root = createRoot(container);
const petFinderKey = "ggfwdw7rdCC53YAohrfVzIm2EVr4PucAyPyn5ZXMos00xHd5cd";
const petFinderSecret = "UzK0CbLaAKpeS58xAK1JauQmGxxwuibTx7PbmXPV";

const App = () => {
	const theme = useState("#ff4e60");
	const [results, setResults] = useState(null);
	// const accessToken = useContext(AuthContext);
	// const [authToken, setAuthToken] = useState("");
	// useEffect(() => {
	// 	// Fetching access token
	// 	(async () => {
	// 		const params = new URLSearchParams();
	// 		params.append("grant_type", "client_credentials");
	// 		params.append("client_id", petFinderKey);
	// 		params.append("client_secret", petFinderSecret);

	// 		const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
	// 			method: "POST",
	// 			body: params,
	// 		}).then((data) => data.json());
	// 		const { access_token } = res;
	// 		// console.log(await access_token);
	// 		setAuthToken(access_token)
	// 	})();
	// }, []);
	// useEffect(() => {
	// 	console.log(accessToken);
	// 	//Fetching animals
	// 	if (accessToken === null) {
	// 		console.log(`Niepoprawny access token`);
	// 		return;
	// 	}

		// const fetchPets = async () => {
		// 	const petResults = await fetch("https://api.petfinder.com/v2/animals", {
		// 		headers: {
		// 			Authorization: `Bearer ${accessToken}`,
		// 		},
		// 	});
		// 	const json = await petResults.json();
		// 	setResults(json.animals);
		// };
		// fetchPets();
		// console.log(`Dane od petfinder:  ${results}`);
	// }, [accessToken, results]);

	return (
		<StrictMode>
			{/* <AuthContext.Provider> */}
				<ThemeContext.Provider value={theme}>
					<BrowserRouter>
						<header>
							<Link to='/'> Adopt Me! </Link>
						</header>
						<Routes>
							<Route path='/details/:id' element={<Details />} />
							<Route path='/Biklak' element={<Biklak />} />
							<Route path='/' element={<SearchParams />} />
						</Routes>
					</BrowserRouter>
				</ThemeContext.Provider>
			{/* </AuthContext.Provider> */}
		</StrictMode>
	);
};

root.render(<App />);
