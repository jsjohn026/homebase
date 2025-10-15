import { useState } from 'react'

const AddWorkOrder = ({ onAdd }) => {
  const initialState = {
    issue: '',
    notes: '',
    submittedBy: '',
    submitterEmail: ''
  }
  
  const [formData, setFormData] = useState(initialState)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!formData.issue) {
      alert('Please add an issue')
      return
    }

    const newOrder = {
      ...formData, 
      date: new Date().toString()
    }

    onAdd(newOrder)

    setFormData(initialState)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  return (
    <>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control' >
          <label>Have an issue? Submit a work order:</label>
          <input 
            type="text" 
            placeholder='Request for repair' 
            name="issue"
            value={formData.issue}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder='Additional notes or location' 
            name="notes" 
            value={formData.notes}
            onChange={handleChange}
          />          
          <input 
            type="text" 
            placeholder='Person submitting request' 
            name="submittedBy" 
            value={formData.submittedBy}
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder='Email' 
            name="submitterEmail" 
            value={formData.submitterEmail}
            onChange={handleChange}
          />
        </div>

        <input type="submit" className='btn btn-block' value="Submit" />
      </form>

    </>
  )
}

export default AddWorkOrder