import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import { Fab, TextField, Button, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ClassList from './ClassList';

const ClassCard = props => {

  const [ classList, setClassData ] = useState([])
  const history = useHistory()
  return(
    <div className='classCard'>
      <Card>
           <CardHeader
            title={props.classData.name}
            subheader={props.classData.type}/>
            <CardContent>
                <Typography  component='p'>
                {props.classData.start_time}
                </Typography>
                <Typography  component='p'>
                {props.classData.duration}
                </Typography>
                <Typography  color="textSecondary" component="p">
                {props.classData.intensity_level}
                </Typography>
                <Typography  component='p'>
                {props.classData.address}
                </Typography>
                <Typography component='p'>
                {props.classData.city}, {props.classData.postal}
                </Typography>
                <Typography  component='p'>
                {props.classData.current_attendees}
                </Typography>
                <Typography  component='p'>
                {props.classData.max_class}
                </Typography>
                <Fab onClick={() =>{history.push('/classes/:id')}} className="ClientAddClass" style={{marginTop:'0.5rem'}}>
                  <AddIcon />
                </Fab>   
            </CardContent>
           </Card>
           <div>
             
           </div>
    </div>
  )
}

export default ClassCard