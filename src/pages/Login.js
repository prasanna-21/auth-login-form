import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user,setUser]=useState({
        name:"",
        password:""
        
    });
    const navigate=useNavigate();

    const {name,password}=user;
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(user)
        if(localStorage.auth){
            const {user}=JSON.parse(localStorage.getItem("auth"));
            // const {name,password}=user;
            if(name===user.name && password===user.password){
                console.log("matched")
                navigate("/movie")

            }
            else{
                alert("user name or password does not matched")
            }
        }
        else{
            alert("inavlid credential")
        }
    }
    return (
        <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control" name="name"value={name} onChange={handleChange}/>
            </div>
           
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" name="password" value={password} onChange={handleChange}/>
            </div>
            
            <button className='btn btn-primary'>Sign in</button>



        </form>
        </div>
    )
}

export default Login
