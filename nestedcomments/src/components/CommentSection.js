import React, { useState } from 'react'
import {initialComments} from "./comments"
import Comment from './Comment'

const CommentSection = () => {
    const [comments,setcomments]=useState(initialComments)
    const [maincomment,setmaincomment]=useState("")
    const addReply=(commentId,content)=>{
        const addRecursiveReply=(comments)=>{
           return comments.map((comment)=>{
                if(comment.id===commentId){
                    return {
                        ...comment,
                        replies:[
                            ...comment.replies,
                            {
                                id:Date.now(),
                                content,
                                replies:[]
                            }
                        ]
                    }
                }

                return {
                    ...comment,
                    replies:addRecursiveReply(comment.replies)
                }
            })
             
        }

        setcomments(addRecursiveReply(comments))
    }

    const handlemaincomment =()=>{
        setcomments((prevcomments)=>{
            if(maincomment==="") return prevcomments;
            return [
                ...prevcomments,
                {
                    id:Date.now(),
                    content:maincomment,
                    replies:[]
                }
            ]
        })
        setmaincomment("")

    }
  return (
    <div>
        <h2>CommentSection</h2>
        <div className='maincomments'>
        <textarea value={maincomment} onChange={(e)=>{setmaincomment(e.target.value)}} rows={5} cols={100}/>
        <button  onClick={handlemaincomment}>Submit</button>
        </div>
        {comments.map((comment)=>(
            <Comment key={comment.id} comments={comments} setcomments={setcomments} comment={comment} addReply={addReply}/>
        ))}
        </div>
  )
}

export default CommentSection