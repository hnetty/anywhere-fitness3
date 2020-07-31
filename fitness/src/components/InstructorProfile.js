import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'
import Instructor from "./Instructor"
import AddClass from './AddClass'


function InstructorProfile (props) {
    const [deleted, setDeleted]=useState(false)

    const [ instructorClasses, setInstructorClasses ] = useState([])
        
    console.log(props)

    useEffect(() => {
        //  /api/client/classes/sessions -> for specific classes a user has signed up for
        //  /api/client/classes -> all available classes. can ad /:id for specific users/classes
                    
                   axiosWithAuth()
                    .get(`api/instructor/classes`)
                    .then(res =>{
                        console.log(res.data.data)
                        setInstructorClasses(res.data.data)
                        console.log('i got new classes')})
                    .catch(err => console.log(err))
                }, [deleted])
   console.log(props.add,props.edit,props.delete)
    return (
      <div>  
          <div>
              <h2>Home Page</h2>
          </div>
              <div onClick={()=>{setInstructorClasses([])}}>
               HI I explode
              </div>
        <div>
            <AddClass />
        </div>
        <div className='class-list'>
            {instructorClasses.map(newClass => {
                return <Instructor key={newClass.id} setInstructorClasses={setInstructorClasses} setDeleted={setDeleted} newClass={newClass}/>})
            }
        </div>
    </div> 
        )
    }



const mapStateToProps = (state) => {
    return {
    edit: state.editClassReducer.classes,
    delete: state.deleteClassReducer.class,
    add: state.addClassReducer.classes
}
}


export default connect(mapStateToProps, {})(InstructorProfile)