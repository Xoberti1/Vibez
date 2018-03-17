import React from "react";

var data = [
    {
        "id": 1388534400000,
        "author": "Pete Hunt",
        "text": "Hey there!"
    },
    {
        "id": 1420070400000,
        "author": "Paul O’Shannessy",
        "text": "React is *great*!"
    },
    {
        "id": 1464988635157,
        "author": "ben",
        "text": "*abc*"
    },
    {
        "id": 1464988636500,
        "author": "ben",
        "text": "*abc*"
    },
    {
        "id": 1464988717637,
        "author": "evil",
        "text": "@Paul O’Shannessy, Im learning React :)"
    }
]

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            data : []
        };

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ data: this.props.data});
        }, 2000);
    }

    handleCommentSubmit(e) {
        //ToDo
        data.push(e);
    }

    render() {
        return (
            <div></div>
        )
    }
            
    // render() {
    //     return (
    //         <div className="commentBox">
    //             <h1>Basic Chat Box</h1>
    //             <CommentList data={this.state.data}/>
    //             <CommentForm onCommentSubmit={this.handleCommentSubmit}/> 
    //         </div>
    //     );
    // }
}

class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map((comment)=>{
            return (
                    <Comment author={comment.author} key={comment.id} >
                        {comment.text}
                    </Comment>
                );
        })
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            author:'',
            text:''
        };
        this.handleAuthorChange=this.handleAuthorChange.bind(this);
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleAuthorChange(e){
        console.log("handleAuthorChange event triggered");
        this.setState({
            author: e.target.value
        });
    }

    handleTextChange(e){
        console.log("handleTextChange event triggered");
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        // if(!text || !author ){
        //     return;
        // }
        this.props.onCommentSubmit({author:author,text:text});
        this.setState({author: '',text:''});
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit} >
            <input type="text" placeholder="your name" value={this.state.author} onChange={this.handleAuthorChange} />
            <span> <div/> </span>
            <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
            <input type="submit" value="Post" />
            </form>
        );
    }
}

class Comment extends React.Component {
    render() {
        console.log(this.props.children);
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
            <p className="actualComment">:      {this.props.children}</p>
            </div>
        );
    }
}

export default CommentBox;