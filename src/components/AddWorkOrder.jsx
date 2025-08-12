import { useState } from 'react'

const AddWorkOrder = (props) => {
  const [issue, setIssue] = useState('')
  const [notes, setNotes] = useState('')
  const [submitter, setSubmitter] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()


  }
  
  return (
    <div className='container' >
      <h3>Have an issue that needs to be looked at? Submit a work order here:</h3>

      <form className='add-form' onSubmit={onSubmit}>
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
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />          
          <input 
            type="text" 
            placeholder='Person submitting request' 
            name="submittedBy" 
            value={submitter}
            onChange={(e) => setSubmitter(e.target.value)}
          />
          <input 
            type="email" 
            placeholder='Email' 
            name="submitterEmail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input type="submit" className='btn btn-block' name='submitBtn' value="Submit" />
      </form>

    </div>
  )
}

export default AddWorkOrder