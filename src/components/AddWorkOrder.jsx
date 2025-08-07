import { useState } from 'react'

const AddWorkOrder = (props) => {
  const[issue, setIssue] = useState('')
  
  return (
    <div className='container' >
      <h3>Have an issue that needs to be looked at? Submit a work order here:</h3>

      <form className='add-form' onSubmit={props.handleSubmit}>
        <div className='form-control' >
          <label>Issue</label>
          <input 
            type="text" 
            placeholder='Request for repair' 
            name="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='Additional notes or location' 
            name="notes" 
          />          
          <input 
            type="text" 
            placeholder='Person submitting request' 
            name="submittedBy" 
          />
          <input 
            type="email" 
            placeholder='Email' 
            name="submitterEmail" 
          />
        </div>

        <input type="submit" className='btn btn-block' name='submitBtn' value="Submit" />
      </form>

    </div>
  )
}

export default AddWorkOrder