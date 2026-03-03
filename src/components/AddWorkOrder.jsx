import { useState } from 'react'

const AddWorkOrder = ({ onAdd }) => {
  const initialState = {
    issue: '',
    notes: '',
    submittedBy: '',
    submitterEmail: ''
  }
  
  const [formData, setFormData] = useState(initialState)
  const [attachments, setAttachments] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()

    if (!formData.issue) {
      alert('Please add an issue')
      return
    }

    const data = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    data.append('date', new Date().toString())
    
    attachments.forEach((file) => {
      data.append('attachments', file)
    })

    onAdd(data)

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
          <input 
            type="file"
            multiple
            onChange={(e) => setAttachments((prev) => [...prev, ...Array.from(e.target.files)])}
          />
        </div>

        <input type="submit" className='btn btn-block' value="Submit" />
      </form>

    </>
  )
}

export default AddWorkOrder