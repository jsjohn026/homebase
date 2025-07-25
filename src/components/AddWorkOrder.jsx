const AddWorkOrder = (props) => {
  
  return (
    <div className='container' >
      <h3>Need a repair? Submit a work order here:</h3>

      <form className='add-form' onSubmit={props.handleSubmit}>
        <div className='form-control' >
          <label>Repair</label>
          <input 
            type="text" 
            placeholder='Request for repair' 
            name="repair"
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
            name="email" 
          />
          <input 
            type="date" 
            name="dateAdded" 
          />
        </div>

        <input type="submit" className='btn btn-block' name='submitBtn' value="Submit" />
      </form>

    </div>
  )
}

export default AddWorkOrder