import React, { useRef } from 'react'
import Input from '../components/Input.jsx';
import '../styles/newproject.css'
function NewProject({handleAddProject}) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef(); 
  
  function onSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const project ={
      title:enteredTitle,
      description:enteredDescription,
      duedate:enteredDueDate
    }
    handleAddProject(project)
  }
  

  return (
    <div className='project-container'>
        <menu>
            <li><button id='cancle-btn'>Cancle</button></li>
            <li><button onClick={onSave} id='save-btn'>Save</button></li>
        </menu>
        <div>
         <Input ref={title} label='Title'/>
         <Input ref={description} label='Description' textarea/>
         <Input type='date' ref={dueDate} label='Due Date'/>
        </div>
    </div>
  )
}

export default NewProject