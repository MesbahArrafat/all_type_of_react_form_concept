const ReusableForm = ({formTitle,handleSubmit,submitButtonText='Submit',children})=>{
    const handleLocalSubmit = e => {
      e.preventDefault();
      const data = {
        name : e.target.name.value,
        email : e.target.email.value,
        password : e.target.password.value
      }
      handleSubmit(data);
    }
  
    return(
        <div>
            <h1>Reuseable Component Form for {formTitle}</h1>
            {children}
         <form onSubmit={handleLocalSubmit}>
            <input placeholder="Name" type="text" name='name'/>
            <br/><br/>
            <input placeholder="Email" type="email" name='email'/>
            <br/><br/>
            <input placeholder="Password"  type="password" name='password'/>
            <br/><br/>
           <input type="submit" value={submitButtonText} />
          </form>
        </div>
    )
}
export default ReusableForm;