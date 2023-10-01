import { useState } from "react"

const StateFullForm = ()=>{
    const[name,setName] = useState(null);
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);    
    const[error,setError] = useState('');    

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6)
        {
            setError("Password must be 6 characters or long.")
        }
        else
        {
           setError('');
           console.log("State Full Form :--")
           console.log(name,email,password);
        }
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    return(
        <div>
            <h1>State Full Form</h1>
            <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" placeholder="Name" name='name' required/>
            <br/><br/>
            <input onChange={handleEmailChange} type="email" placeholder="Email" name='email' required/>
            <br/><br/>
            <input onChange={handlePasswordChange} type="password" placeholder="Password" name='password'required/>
            <br/><br/>
           <input type="submit" value="Submit" />
           {
            error && <p>{error}</p>
           }
          </form>
        </div>
    )
}
export default StateFullForm;