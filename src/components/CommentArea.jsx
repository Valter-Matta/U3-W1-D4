import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
	state = {
		comments: [],
	};
	getComment = () => {
		fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" +
				this.props.bookid,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGM2NThhZDEyOTAwMTU4NzZiYzYiLCJpYXQiOjE3MzI4MDQwNDMsImV4cCI6MTczNDAxMzY0M30.EWXbQuO-JEpLCAbmodPXu95I99rRN4wh2rk6XdBnpWo",
				},
			},
		)
			.then(result => {
				if (result.ok) {
					// console.log(result.json);
					return result.json();
				} else {
					throw new Error("errore nella fetch");
				}
			})
			.then(arrayOfComment => {
				console.log(arrayOfComment);
				this.setState({ comments: arrayOfComment });
			})
			.catch(err => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.getComment();
	}
	render() {
		return (
			<>
				<h1>elenco commenti</h1>

				<CommentList comments={this.state.comments} />
				<h1>aggiungi un commento</h1>
				<AddComment />
			</>
		);
	}
}

export default CommentArea;
