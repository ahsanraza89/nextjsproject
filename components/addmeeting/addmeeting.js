import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addKaro, createUser } from "@/store/slices/user";

export default  ({addKaro})=>{
 
 let dispatch = useDispatch();
  
    let nameRef = useRef();
    let cityRef = useRef();

   const addData = ()=>{
     let user = {
      name : nameRef.current.value,
      city : cityRef.current.value
     }
   dispatch(createUser(user));

   }
    return <div>
        <>
  {/* Button trigger modal */}

  {/* Modal */}
  <div
    className="modal fade"
   id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          
          <input ref={nameRef} placeholder="Name"></input>
          <input ref={cityRef} placeholder="City"></input>

        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button onClick={addData} type="button" className="btn btn-primary">
            Save changes
          </button>
         
        </div>
      </div>
    </div>
  </div>
</>

    </div>
}