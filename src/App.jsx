import './App.css'
import HookForm from './component/hookForm/HookForm'
import RefForm from './component/refForm/RefForm'
import ReusableForm from './component/reuseableForm/ReusableForm'
import SimpleForm from './component/simpleForm/SimpleForm'
import StateFullForm from './component/stateFullForm/StateFullForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('Sign UP',data);
  }
  const handleUpdateSubmit = data =>{
    console.log('Update Data',data);
  }
  return (
    <>
     <div>
      <h1>Hellow React</h1>
      <SimpleForm></SimpleForm>
      <StateFullForm></StateFullForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm formTitle={'Sign-Up'} 
      handleSubmit={handleSignUpSubmit}
      >
        <div>
        <p>Please fill up this sign up section</p>
        </div>
      </ReusableForm>

      <ReusableForm formTitle={'Profile Update'} 
      handleSubmit={handleUpdateSubmit} 
      submitButtonText={'Update'}
      >
        <div>
        <p>Please fill up this Update section</p>
        </div>
      </ReusableForm>
     </div>
        
    </>
  )
}

export default App
