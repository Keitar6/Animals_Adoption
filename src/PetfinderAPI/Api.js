const petFinderKey = "ggfwdw7rdCC53YAohrfVzIm2EVr4PucAyPyn5ZXMos00xHd5cd";
const petFinderSecret = "UzK0CbLaAKpeS58xAK1JauQmGxxwuibTx7PbmXPV";

const AuthToken = async (req, res) => {
	const params = new URLSearchParams();
	params.append("grant_type", "client_credentials");
	params.append("client_id", petFinderKey);
	params.append("client_secret", petFinderSecret);

	const Petres = await fetch("https:/api.petfinder.com/v2/oauth2/token", {
		method: "POST",
		body: params,
	});
	const data = await Petres.json();
	res.send(data);
};
export default AuthToken;
