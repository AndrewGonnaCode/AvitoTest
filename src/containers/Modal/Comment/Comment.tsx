import React from 'react'

interface CommentProps{
    date:string,
    text:string,
}


const Comment:React.FC<CommentProps> = (props) => {
    return (
        <div className="comment">
            <div className="comment__date">
                <p>{dateCreater(props.date)}</p>
            </div>
            <div className="comment__text">
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}

function dateCreater(date:string) {
    return new Date(date).toLocaleString().split(',')[0];
}

export default Comment
