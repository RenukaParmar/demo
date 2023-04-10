import { Container,Button,Form } from 'react-bootstrap';
import React,{ useState,useEffect } from 'react';
const UserRegister = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState(""); 
    const addUserData=()=>{
    console.log(name,email,password);   
    fetch(' http://localhost:3000/users',
    {
        method:'POST',
body:JSON.stringify({
    name:name,
    email:email,
    password:password,
}),
headers:{
    'Content-type': 'application/json; charset=UTF-8',

},
})
.then((response)=>response.json())
.then((result)=>{
    setName('');
    setEmail('');
    setPassword('');
})
}
  return (
    <div>
        <Container>
       <Form onSubmit={(e)=>{
        addUserData(name,email,password)
       }}>
       <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="username" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default UserRegister
