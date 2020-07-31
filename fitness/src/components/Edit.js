import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editClass } from '../actions/editClass'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'




const Edit = props => {
   const [ editing, setEditing ] = useState(false)
   const [ classEdit, setClassEdit ] = useState(props.newClass)
    
   const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setClassEdit({
        ...classEdit,
        [name]: value 
    })
  }

  const edit = e => {
    e.preventDefault();
    setEditing(false);
    props.editClass(classEdit, classEdit.id);
}

    return (
      <div>
        <IconButton onClick={() => {setEditing(true)}}>
          <EditIcon/>
        </IconButton>
        { editing && (
                <form>
                  <input 
                    name='name'
                    value={classEdit.name}
                    onChange={onInputChange}/>
                    <input 
                    name='type'
                    value={classEdit.type}
                    onChange={onInputChange}/>
                    <input 
                    type='time'
                    name='start_time'
                    value={classEdit.start_time}
                    onChange={onInputChange}/>
                    <input 
                    type="number"
                    name='duration'
                    value={classEdit.duration}
                    onChange={onInputChange}/>
                    <input 
                    type='number'
                    name='intensity_level'
                    value={classEdit.intensity_level}
                    onChange={onInputChange}/>
                    <input 
                    name='address'
                    value={classEdit.address}
                    onChange={onInputChange}/>
                     <input 
                    name='city'
                    value={classEdit.city}
                    onChange={onInputChange}/>
                     <input 
                     type='number'
                    name='postal'
                    value={classEdit.postal}
                    onChange={onInputChange}/>
                   <input 
                   type='number'
                    name='max_class'
                    value={classEdit.max_class}
                    onChange={onInputChange}/>
                  <button onClick={edit} 
                  className="button">Save Edits</button>
              </form>
        )
        }
        
        
      </div>
    );
  };
  const mapStateToProps = (state) => {
    
    return {
        add: state.editClassReducer.classes,
        success: state.addClassReducer.success_message
        
    }
}


  export default connect(mapStateToProps, { editClass })(Edit);