import { Component } from "react";

class CommentArea extends Component {
	SaveComment = () => {
		fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" +
				this.props.book.asin,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGM2NThhZDEyOTAwMTU4NzZiYzYiLCJpYXQiOjE3MzI3OTQ5ODksImV4cCI6MTczNDAwNDU4OX0.UFWaxf0mris7KIn60gZHktQKuiOt0bkHu8d7EWh4Amo",
				},
				body: JSON.stringify({
					comment: "string",
					rate: "string",
					elementId: "string",
				}),
			},
		)
			.then(result => {
				if (result.ok) {
					console.log(result);
				} else {
					throw new Error("errore nella fetch");
				}
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export default CommentArea;
