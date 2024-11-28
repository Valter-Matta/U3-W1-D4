import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
	render() {
		return this.props.comments.map((comment, i) => {
			return (
				<>
					<ListGroup>
						<ListGroup.Item className="d-flex align-items-center justify-content-between p-3 w-100">
							{i}
							<div>
								<SingleComment key={comment._id} comment={comment} />
							</div>
						</ListGroup.Item>
					</ListGroup>
				</>
			);
		});
	}
}
export default CommentList;
