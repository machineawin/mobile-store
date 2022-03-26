import Header from "./Header"

const AddPhone = () => {
  return (
    < div className="container">
        <Header title="Add Phone to Store"/>
        <form >
            <div className="form-control">
                <label>Phone Brand </label>
                <input placeholder='Add phone brand'></input>
            </div>
            <div>
                <label>Phone Model</label>
                <input placeholder='Add phone model'></input>
            </div>
            <div>
                <label>Price</label>
                <input placeholder='Add price in AUD'></input>
            </div>        
            
        </form>
    </div>
  )
}

export default AddPhone