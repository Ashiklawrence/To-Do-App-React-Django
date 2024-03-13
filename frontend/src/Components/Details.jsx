import React from 'react'
import './Details.css'
import restlogo from '../Images/DjangoREST.svg' 
import djangologo from '../Images/django-.svg' 
import pythonlogo from '../Images/python-original.svg' 
import reactlogo from '../Images/react-original.svg'
function Details() {
  return (
    <div>
      <div className='row justify-content-center' >
        <div className="container" id='detlsrow'>
        <h3>TO-DO LIST APP</h3>
        <br />
        <p id='detlsp'>
        This website is a user-friendly web application designed to streamline task management and enhance productivity. With intuitive features and a sleek interface, empowers users to effortlessly create, edit, and delete tasks, ensuring efficient organization of their daily activities. 
        </p >
        <p id='detlsp'>Developed a responsive and user-friendly interface for managing tasks.
        Implemented <span >CRUD</span> operations to enable seamless task management.
        Integrated <span >React</span> for frontend development,<span> Django</span>  for backend logic, and <span>Django Rest Framework (DRF)</span>  with <span>Axios</span> for creating <span>RESTful </span>APIs.
        Utilize modern React concepts such as Hooks and routing to enhance user experience.</p>
        </div>
    
      </div>
      <div className="row justify-content-center"  >
        <div className="container" id='imgcont'>
          <br />
          <br />
        <h3>TECHNOLOGIES USED</h3>
          <div className="row">
         
          <div className="col">
          <img src={reactlogo} alt="" />
       </div>
      
          <div className="col">
          <img src={djangologo} alt="" />
       </div>

       <div className="col">
          <img src={restlogo} alt="" />
       </div>

       <div className="col">
          <img src={pythonlogo} alt="" />
       </div>
          </div>
       
        </div>
       
         
    

      </div>
      
    </div>
  )
}

export default Details