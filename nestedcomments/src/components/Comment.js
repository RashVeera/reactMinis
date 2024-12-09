import React, { useState } from 'react'

const Comment = ({comment,addReply,comments,setcomments}) => {
    const [showtextarea,setshowtextarea]=useState(false)
    const [replycontent,setreplycontent]=useState("")
    const [edit,setedit]=useState(false)
    const [editvalues,seteditvalues]=useState(comment.content)


    const replyhandlesubmit =()=>{
        addReply(comment.id,replycontent)
        setshowtextarea(false)
        setreplycontent("")
    }
    const handleDelete =()=>{
        const handlerecursivereplies=(prevcomments)=>{
            return prevcomments.filter((currentcomment)=>(currentcomment.id!==comment.id))
            .map((currentcomment)=>({
                ...currentcomment,
                replies:handlerecursivereplies(currentcomment.replies)
            }))
        }

        setcomments((prevcomments)=>(handlerecursivereplies(prevcomments)))
    }

    const handleEdit=()=>{
        setedit(true)
    }

    const handleSubmit =(id,newContent)=>{

        const handlerecursiveEdits=(prevcomments)=>{
            return prevcomments.map((c)=>{
                if(c.id===id){
                    return {
                        ...c,
                        content:newContent
                    }
                }
                return {
                    ...c,
                    replies:handlerecursiveEdits(c.replies)
                }
            })
        }

        setcomments((prevcomments)=>handlerecursiveEdits(prevcomments))
        setedit(false)
    }

  return (
    <div className='maincomment'>
      {!edit ? <> <span>{comment.content}</span>
         <button className='submitBtn' onClick={()=>setshowtextarea(!showtextarea)}>{showtextarea?"Cancel":"Reply"}</button>
        <button className='submitBtn' onClick={()=>handleDelete()}>Delete</button>
        <button className='submitBtn' onClick={()=>handleEdit()}>Edit</button>


        {
            showtextarea && 
            <div className='replyContainers'>
            <textarea rows={3} cols={30} value={replycontent} onChange={(e)=>{setreplycontent(e.target.value)}}/>
            <button onClick={replyhandlesubmit}>Submit</button>
            </div>
        }
        </>:<>
        <textarea rows={3} cols={30}  value={editvalues} onChange={(e)=>{seteditvalues(e.target.value)}}/>
        <button className='submitBtn' onClick={()=>handleSubmit(comment.id,editvalues)}>Submit</button>
        </>
        
    }


        {comment.replies.map((reply)=>(
            <Comment comment={reply} addReply={addReply} comments={comments} setcomments={setcomments}/>
        ))}
    </div>
  )
}

export default Comment