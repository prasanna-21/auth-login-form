import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phoneNo:""
        
    });
    const [professions,setProfessions]=useState(["developer","tester"])
    const {name,email,password,phoneNo}=user;

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleProfession=(e)=>{
        setProfessions([e.target.value])
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name==="" || email==="" || password==="" || phoneNo===""){
            alert('please fill the all fields')
        }
        else{
            console.log(user,professions)
            localStorage.setItem("auth",JSON.stringify({user,professions}))
        // alert("registration completed")
            navigate("/login")

        }
        
    }
    return (
        <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control" name="name" value={name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control"name="email" value={email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control"name="password" value={password} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone No</label>
                <input type="number" id="phone" className="form-control"name="phoneNo" value={phoneNo} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="profession">Professions</label>
                <select  id="profession" className="form-control" name="professions" value="" onChange={(e)=>handleProfession(e)}>
                    <option value="">admin</option>
                    {professions.map((profession,i)=>(
                            <option key={i} value={profession} >{profession}</option>))}
                </select>
            </div>
            <button className='btn btn-primary'>Sign Up</button>



        </form>
        </div>
    )
}

export default Register
