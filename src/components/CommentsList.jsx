import React from 'react'

function CommentsList({comments}) {
  return (
    <div>
      {comments.map((comment)=> {
          return (
            <div>
              <p>{comment.author}</p>
              <p>{comment.comment}</p>
              <p>{comment.rate}</p>
              <button onClick={async()=>{
                let res = await fetch(
                  `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                  {
                    method: "DELETE",
                    headers: {
                      Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzUzNDE2MjYsImV4cCI6MTY3NjU1MTIyNn0.bPwPGuwUuH1beV7mOeR0Y1s_UlFQnOtBnktkiW1JB5I",
                        "Content-Type": "application/json"
                    },
                  }
                );
                let data = await res.json();
                console.log(data)
              }}>Delete</button>
            </div>
          )
      }
      )}
    </div>
  )
}

export default CommentsList