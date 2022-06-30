import { useParams } from "react-router-dom";
import { Component, useContext } from "react";
import Carousel from "./Carousel";
import ErrorBoundares from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
	state = { loading: true, showModal: false };

	async componentDidMount() {
		const res = await fetch(`/petsapi?id=${this.props.params.id}`);
		const json = await res.json();
		console.log(await json);
		this.setState(Object.assign({ loading: false }, json.pets[0]));
	}

	toggleModal = () => this.setState({ showModal: !this.state.showModal });

	render() {
		if (this.state.loading) {
			return <h2>loading....</h2>;
		}
		const { animal, breed, city, state, description, name, images, showModal } =
			this.state;

		return (
			<div className='details'>
				<Carousel images={images} />
				<div>
					<h1>{name}</h1>
					<h2>
						{animal} - {breed} - {city}, {state}
					</h2>

					<button
						onClick={this.toggleModal}
						style={{ backgroundColor: this.props.theme }}>
						Adopt {name}
					</button>

					<p>{description}</p>
					{showModal ? (
						<Modal>
							<div>
								<h1>Would you like to adopt {name}?</h1>
								<div className='buttons'>
									<a href='https://bit.ly/pet-adopt'>Yes</a>
									<button onClick={this.toggleModal}>No</button>
								</div>
							</div>
						</Modal>
					) : null}
				</div>
			</div>
		);
	}
}
const WrappedDetails = () => {
	const params = useParams();
	const [theme] = useContext(ThemeContext);
	// console.log(params.path)
	return (
		<ErrorBoundares>
			<Details theme={theme} params={params} />;
		</ErrorBoundares>
	);
};
export default WrappedDetails;
