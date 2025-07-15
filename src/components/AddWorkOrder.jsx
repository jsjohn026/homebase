const AddWorkOrder = (props) => {
  return (
    <div className='container' >
      <h3>Need a repair? Submit a work order here:</h3>
      <form className='add-form' method="post" onSubmit={props.handleSubmit}>

        <div className='form-control' >
          <label>Repair</label>
          <input type="text" placeholder='Request for repair' name="order" />
          <input type="text" placeholder='Additional notes' name="additionalNotes" />          
          <input type="text" placeholder='Name of person submitting request' name="submittedBy" />
          <input type="email" placeholder='Email' name="email" />
          <input type="date" name="dateAdded" />
        </div>

        <input type="submit" className='btn btn-block' name='submitBtn' value="Submit" />
      </form>
    </div>
  )
}

export default AddWorkOrder