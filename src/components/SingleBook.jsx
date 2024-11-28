import { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<>
				<Card
					onClick={() => this.setState({ selected: !this.state.selected })}
					style={{ border: this.state.selected ? "3px solid red" : "none" }}
				>
					<Card.Img variant="top" src={this.props.book.img} />
					<Card.Body>
						<Card.Title style={{ color: "black" }}>
							{this.props.book.title}
						</Card.Title>
						<p className=" text-center">{this.props.book.price}</p>
					</Card.Body>
				</Card>
				{/* {this.state.selected && <CommentArea />} */}
			</>
		);
	}
}

export default SingleBook;
