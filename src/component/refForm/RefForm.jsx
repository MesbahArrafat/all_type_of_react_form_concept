import { useEffect, useRef } from "react";

const RefForm = ()=>{
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log("One object in a state holding all the input value:--")
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return(
        <div>
           <h1>One object in a state holding all the input value</h1> 
           <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Name" name='name' required/>
            <br/><br/>
            <input ref={emailRef} type="email" placeholder="Email" name='email' />
            <br/><br/>
            <input ref={passwordRef} type="password" placeholder="Password" name='password'/>
            <br/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}
export default RefForm;