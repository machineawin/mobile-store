import Header from "./Header"

const AddPhone = () => {
  return (
         
    <form className="add-form">
        <div className="form-control">
            <label>Phone Brand </label>
            <input placeholder='Add phone brand'></input>
        </div>
        <div className="form-control">
            <label>Phone Model</label>
            <input placeholder='Add phone model'></input>
        </div>
        <div className="form-control">
            <label>Price</label>
            <input placeholder='Add price in AUD'></input>
        </div>   
        <div>
            <input type= 'submit' value = 'Add Phone' className="btn"></input>
        </div>     
        
    </form>
    
  )
}

export default AddPhone