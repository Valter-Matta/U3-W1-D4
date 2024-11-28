import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComment extends Component {
	state = {
		author: "",
		content: "",
	};
	render() {
		return (
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Utente</Form.Label>
					<Form.Control type="email" placeholder="Nome" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
			</Form>
		);
	}
}

export default AddComment;
