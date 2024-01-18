
import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject';
import NoProjectSelect from './components/NoProjectSelect';
import SideBar from './components/SideBar';


function App() {
  const [projectState,setProjectState] = useState({
    selectedProject:undefined,
    projects:[]
  });
  
  function handleSelectedProject(){
    setProjectState((prevState)=>{
      return ({
        ...prevState,
        selectedProject:null
      })
    })
  }

  function handleCancle(){
    setProjectState((prevState)=>{
      return ({
        ...prevState,
        selectedProject:undefined
      })
    })
  }

  function handleAddProject(projectData){
    
    setProjectState((prevState)=>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
       return {
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects,newProject]
       }
    })
  }
  console.log(projectState);
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handleSelectedProject={handleSelectedProject} projects={projectState.projects}/>
      {projectState.selectedProject===undefined?<NoProjectSelect handleSelectedProject={handleSelectedProject}/>:''}
      {projectState.selectedProject===null?<NewProject handleAddProject={handleAddProject} handleCancle={handleCancle}/>:''}
    </main>
  );
}

export default App;
