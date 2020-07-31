import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add'
import { Fab, TextField, Button, Typography } from '@material-ui/core'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import{useParams} from 'react-router-dom'

const ClassList = props => {
  const { newClass } = props
  const [ classData, setClassData ] = useState([])
  const {id} = useParams();
  
  const onClickEvent = (id) =>{
     
    axiosWithAuth()
    .put(`api/client/classes/sessions/${id}`)
    .then(res =>{
        console.log(res.data.classes)
        setClassData(id)
        
        
    })
        
    .catch(err => console.log(err))

  }
  return(
    <div className='classCard'>
   <Card variant='outlined' > 
            <CardHeader
            title={newClass.name}
            subheader={newClass.type}/>
            <CardContent>
                <Typography  component='p'>
                {newClass.start_time}
                </Typography>
                <Typography  component='p'>
                {newClass.duration}
                </Typography>
                <Typography  color="textSecondary" component="p">
                {newClass.intensity_level}
                </Typography>
                <Typography  component='p'>
                {newClass.address}
                </Typography>
                <Typography component='p'>
                {newClass.city}, {newClass.postal}
                </Typography>
                <Typography  component='p'>
                {newClass.current_attendees}
                </Typography>
                <Typography  component='p'>
                {newClass.max_class}
                </Typography>
                <Fab onClick={() => props.addItem(props.classes)} className="ClientAddClass" style={{marginTop:'0.5rem'}}>
                  <AddIcon />
                </Fab>   
            </CardContent>
           </Card>
            
    </div>
  )
}
 export default ClassList