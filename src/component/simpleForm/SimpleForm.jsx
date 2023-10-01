const SimpleForm = ()=>{
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e);
        console.log("Simple Full Form :--")
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("Form Submitted");
    }
    return(
        <div>
            <h1>Simple Full Form </h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Name" type="text" name='name'/>
            <br/><br/>
            <input placeholder="Email" type="email" name='email'/>
            <br/><br/>
            <input placeholder="Password"  type="text" name='phone'/>
            <br/><br/>
           <input type="submit" value="Submit" />
          </form>
        </div>
    )
}
export default SimpleForm;


// const SimpleForm = ()=>{
//     return(
//         <div>
            
//         </div>
//     )
// }
// export default SimpleForm;