import { Container,Button,Form } from 'react-bootstrap';
import React,{ useState,useEffect } from 'react';
const ListPost = () => {

    const [post,setPost]=useState("");
    const [content,setContent]=useState("");
    const addPost=()=>{
    console.log("ghgh");   
    fetch(' http://localhost:3000/list',
    {
        method:'POST',
body:JSON.stringify({
    post:post,
    content:content,
}),
headers:{
    'Content-type': 'application/json; charset=UTF-8',

},
})
.then((response)=>response.json())
.then((result)=>{
   setPost("");
   setContent("");
})
}
  return (
    <div>
        <Container>
       <Form onSubmit={(e)=>{
        addPost(post,content)
       }}>
       <Form.Group className="mb-3" controlId="post">
        <Form.Label>Post:</Form.Label>
        <Form.Control type="text" placeholder="post" 
        value={post} 
        onChange={(e)=>setPost(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" textarea=""
        value={content} 
        onChange={(e)=>setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button to="/ListGet">Showpost</Button>
    </Form>
    </Container>
    </div>
  )
}

export default ListPost
