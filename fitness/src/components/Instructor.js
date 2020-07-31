import React,{useEffect,useRef} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Edit from './Edit';
import Delete from './Delete';




function Instructor (props) {

    const { newClass, setInstructorClasses } = props
    
    return (
        <div>
            <Card variant='outlined' > 
            <CardHeader
            title={newClass.name}
            subheader={newClass.type}/>
            <CardContent>
                <Typography  component='p'>
                {newClass.start_time}
                </Typography>
                <Typography component='p'>
                {newClass.duration}
                </Typography>
                <Typography color="textSecondary" component="p">
                {newClass.intensity_level}
                </Typography>
                <Typography component='p'>
                {newClass.address}
                </Typography>
                <Typography  component='p'>
                {newClass.city}, {newClass.postal}
                </Typography>
                <Typography  component='p'>
                {newClass.current_attendees}
                </Typography>
                <Typography component='p'>
                {newClass.max_class}
                </Typography>
                <div className="instrucorAddClass">
                <Edit newClass={props.newClass}/>
                <Delete newClass={props.newClass} setInstructorClasses={setInstructorClasses} setDeleted={props.setDeleted}/>
                </div>   
            </CardContent>
           </Card>
            
        </div>
    )

}

export default Instructor