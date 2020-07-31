 import React, { useState, useEffect } from 'react'
 import {axiosWithAuth} from '../utils/axiosWithAuth'
import { deleteClass }  from '../actions/deleteClass'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Delete = (props) => {
    const history = useHistory()
    const [ classDelete ] = useState(props.newClass)

    const deleteClass = (e) => {
        props.deleteClass(classDelete.id);
        axiosWithAuth()
        .get('api/instructor/classes')
        .then(res=>{
            props.setInstructorClasses(res.data.data)
        })
        .catch(err=>{
            return err
        })
        

    }
    return (
    
   <IconButton onClick={() => { deleteClass() }}>
        <DeleteIcon/>
  </IconButton>
  
    )

}

export default connect(null, { deleteClass })(Delete);