import useStateForm from "../hook/useStateForm";

const HookForm = ()=>{
    const [name,handleNameChange] = useStateForm('Arafat');
    const [email,handleEmailChange] = useStateForm('');
    const [password,handlePasswordChange] = useStateForm('');
    const handleSubmit = e =>{
       e.preventDefault();
       console.log(name);
       console.log(email);
       console.log(password);
    }
    return(
        <div>
          <h1>Hook Form </h1>
          <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" placeholder="Name" name='name' required/>
            <br/><br/>
            <input value={email} onChange={handleEmailChange} type="email" placeholder="Email" name='email' />
            <br/><br/>
            <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password" name='password'/>
            <br/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}
export default HookForm;