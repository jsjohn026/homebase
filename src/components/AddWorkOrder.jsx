import { useState } from 'react'
// import order from '../../../homebbackend/models/order'

const AddWorkOrder = ({ onAdd }) => {
  const [issue, setIssue] = useState('')
  const [notes, setNotes] = useState('')
  const [submitter, setSubmitter] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!issue) {
      alert('Please add an issue')
      return
    }

    const newOrder = {
      issue,
      notes,
      submitter, 
      email, 
      date: new Date().toString()
    }

    onAdd(newOrder)

    setIssue('')
    setNotes('')
    setSubmitter('')
    setEmail('')
  }
  
  return (
    <div >
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control' >
          <label>Have an issue? Submit a work order:</label>
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