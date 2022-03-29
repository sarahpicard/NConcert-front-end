import * as eventServices from '../../services/eventServices'
import { useEffect, useState } from 'react'

const Comments = () => {
  const [commentData, setCommentData] = useState({
    name: '',
    // should set this to current user
    comment: '',
  })

  const handleChange = (evt) => {
    setCommentData({ ...commentData, [evt.target.name]: evt.target.value })
  }

  const submitComment = (evt) => {
    evt.preventDefault()
    try {
      eventServices.createComment(commentData)
        .then(commentData => setCommentData(commentData))
    } catch (err) {
      console.log(err)
    }
  }

  const { name } = commentData
  const { comment } = commentData

  return (
    <>
      <form onSubmit={submitComment}>
        <label>Name:
          <input type="text" value={name} name="name" autoComplete="off" onChange={handleChange} />
        </label>
        <label>Comment:
          <input type="text" value={comment} name="comment" autoComplete='off' onChange={handleChange} />
        </label>
        <button type='submit'>Submit Comment</button>
      </form>

      {commentData ?
        <table>
          <thead>
            <tr>
              <th scope='col'>User</th>
              <th scope='col'>Comment</th>
              <th scope='date'>Date</th>
            </tr>
          </thead>
          <tbody>
            {console.log('name', name)}
            {/* {commentData.map(comment =>  */}
            <tr>
              <td>
                <h3>{commentData.name}</h3>
              </td>
              <td>
                <h3>{commentData.comment}</h3>
              </td>
            </tr>
            {/* )} */}
          </tbody>
        </table>
        :
        <p>no comments yet!</p>
      }
    </>
  )
}

export default Comments