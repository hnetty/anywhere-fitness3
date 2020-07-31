import React, { useState } from 'react'
import { addClass } from '../actions/actions'
import { Fab, TextField, Button, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import Modal from 'react-modal'




const initalClass = {
    name: '',
    type: '',
    start_time: '',
    duration: '',
    intensity_level: '',
    address: '',
    city: '',
    postal: '',
    current_attendees: '',
    max_class: '',
}

const AddClass = (props) => {
    const [ newClass, setNewClass ] = useState(initalClass)
    const [ modalOpen, setModalOpen ]= useState(false)


    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
    
        setNewClass({
            ...newClass,
            [name]: value 
        })
    }

    const addNewClass = (e) => {
        e.preventDefault();
        setModalOpen(false)
        setNewClass(initalClass)
        props.addClass(newClass)
    }

    const closeModal = () => {
        setModalOpen(false)
        window.location.reload()

    }



    return (
        <Fab 
            onClick={() => {setModalOpen(true)}} 
                color="primary" 
                aria-label="add">
            <AddIcon />

        <Modal className='addClassModal' isOpen={modalOpen}>
                <form className='addClassForm'>
                    <div>{props.success}</div>
                    <h2>Add New Class</h2>
                  
                    <TextField style={{marginTop:'1rem'}}
                            type='text'
                            name='name'
                            value={newClass.name}
                            placeholder='Class Title'
                            onChange={onInputChange}
                            />
                             <TextField style={{marginTop:'1rem'}}
                            type='text'
                            name='type'
                            value={newClass.type}
                            placeholder='What are you Teachinggit'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            type='text'
                            name='start_time'
                            value={newClass.start_time}
                            placeholder='Start Time'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            type='minutes'
                            name='duration'
                            value={newClass.duration}
                            placeholder='Durration'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            type='number'
                            name='intensity_level'
                            value={newClass.intensity_level}
                            placeholder='Intensity Level'
                            onChange={onInputChange}
                            maxNumber='5'
                            />
                        <TextField style={{marginTop:'1rem'}}
                            type='text'
                            name='address'
                            value={newClass.address}
                            placeholder='Street Address'
                            onChange={onInputChange}
                            />
                              <TextField style={{marginTop:'1rem'}}
                               type='text'
                            name='city'
                            value={newClass.city}
                            placeholder='city'
                            onChange={onInputChange}
                            />
                                 <TextField style={{marginTop:'1rem'}}
                            type='number'
                            name='postal'
                            value={newClass.postal}
                            placeholder='Postal'
                            onChange={onInputChange}
                            />
                          
                            <TextField style={{marginTop:'1rem'}}
                            type='number'
                            name='max_class'
                            value={newClass.max_class}
                            placeholder='Max Attendees'
                            onChange={onInputChange}
                            />
                            
                        <Button style={{marginTop:'1rem'}} variant='outlined' onClick={addNewClass}>Submit</Button>
                        
                        <IconButton onClick={() => {closeModal()}}>
                            <CloseIcon/>
                        </IconButton>
                        
                    </form>
                </Modal>        
            </Fab>
         )
        }

const mapStateToProps = (state) => {
    
    return {
        add: state.addClassReducer.classes,
        success: state.addClassReducer.success_message
        
    }
}

export default connect(mapStateToProps, {addClass})(AddClass)