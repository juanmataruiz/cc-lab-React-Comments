import React from 'react';
import Comment from './Comment.js'

class CommentList extends React.Component {

    render() {

      const commentComponents = this.props.data.map((comment, index) => {
        return <Comment author={comment.author} key={index}>{comment.text}</Comment>
      })

      return (
          <div className="comment-list">
            {commentComponents}
          </div>
      )

    }
}

export default CommentList;