import React from 'react'
import '../styles/sidebar.css'
import Button from './Button';
function SideBar({handleSelectedProject}) {
  return (
    <aside>
        <h2>Your Projects</h2>
        <div>
            <Button onClick={handleSelectedProject}>Add Project</Button>
        </div>
        <ul></ul>
    </aside>
  )
}

export default SideBar;