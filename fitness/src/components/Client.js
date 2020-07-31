import React,{ useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import ClassCard from './ClassCard'
import ClassList from './ClassList'
const data = []
const Client = props => {
  
  const [ searchString, setSearchString ] = useState('')
 
  const [ userClasses, setUserClasses ] = useState([])
        

    useEffect(() => {
      //  /api/client/classes/sessions -> for specific classes a user has signed up for
      //  /api/client/classes -> all available classes. can ad /:id for specific users/classes
                  
                 axiosWithAuth()
                  .get(`/api/client/classes `)
                  .then(res =>{
                      console.log(res.data)
                      setUserClasses(res.data.data)
                      console.log(userClasses)
                      console.log('i got new classes')})
                  .catch(err => console.log(err))
              }, [props.edit, props.delete, props.add])
  

  const searchFilter = () => {
    const filteredArray = []
    userClasses.forEach(v => {
      if (v.name.includes(searchString)){
        filteredArray.push(v)
      }
    })
    //additional search filtering?
    return filteredArray
  }

  return(
    <div className='Client'>
      <form>
        <input
          type='text'
          placeholder='search class'
          name='search'
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </form>
      {searchFilter(userClasses).map(v => <ClassCard classData={v} />)}
     <div>
   { userClasses.map ( newClass =>{
     return(<Route path='/:id'>
        <ClassList key={newClass.id} newClass={newClass}/>
      </Route>)})}
     </div>
     
    </div>
  )
}

export default Client