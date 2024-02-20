// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sks from './component/sks';
// import Colors from './component/colors';
// import Neuro from './component/neuro';
function App() {
 
  
        const [name, setname] = useState(''); 
        const [address, setaddress] = useState(''); 
        const [mothername, setmothername] = useState(''); 
        const [fathername, setfathername] = useState(''); 
        const [email, setemail] = useState('');
        const [salary, setsalary] = useState(''); 
        const [qualification, setqualification] = useState(''); 
        const [company, setcompany] = useState(''); 
        const [experience, setexperience] = useState(''); 
        const [searchQuery, setSearchQuery] = useState('');
       






        const[view,setview]=useState([])
    
        const handle = (e) => {
            e.preventDefault();
            axios.post("http://localhost:3003/create", { name,address,experience,email,fathername,qualification,salary,mothername,company })
            .then((res)=>{
              console.log("hi")
            })
           
        }
    
        useEffect(()=>{
                axios.get('http://localhost:3003/view')
                .then((res)=>setview(res.data))
              

               
        },[])

        console.log(view);

let update=(v)=>{
        setname(v.name)
        setaddress(v.address)
        setsalary(v.salary)
        setexperience(v.experience)
        setcompany(v.company)
        setfathername(v.fathername)
        setmothername(v.mothername)
        setemail(v.email)
}

let edit=(v)=>{
        console.log(v)
        axios.put(`http://localhost:3003/update/${v._id}`,{
                name,address,email,fathername,mothername,salary,experience
        })

}

let del=(v)=>{
        axios.delete(`http://localhost:3003/delete/${v._id}`)
}

const handleSearch = () => {
        if (!searchQuery) {
            setview([]); 
            return;
        }
        const filteredResults = view.filter((employee) => {
            return (
                employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                employee.address.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setview(filteredResults);
    };
        return (
            <>
                <div className="container col-lg-6">

                        <h2 className='text-center'>Employee Form</h2>
                        <div >

                    <label>Employee name:</label>
                    <input type="text" className='form-control' name="name" value={name} onChange={(e) => setname(e.target.value)}></input>
                        </div>

                    <label>Employee address:</label>
                    <input type="text"  className='form-control' name="address" value={address} onChange={(e) => setaddress(e.target.value)}></input>
                    
                    <label>employee experience:</label>
                    <input type="number"  className='form-control' name="experience" value={experience} onChange={(e) => setexperience(e.target.value)}></input>
                    
                    <label>email:</label>
                    <input type="text"  className='form-control' name="address" value={email} onChange={(e) => setemail(e.target.value)}></input>
                    
                    <label>Father name:</label>
                    <input type="text"  className='form-control' name="fathername" value={fathername} onChange={(e) => setfathername(e.target.value)}></input>
                   
                    <label>Employee qualification:</label>
                    <input type="text"  className='form-control' name="qualification" value={qualification} onChange={(e) => setqualification(e.target.value)}></input>
                   
                    <label>Employee salary:</label>
                    <input type="number"  className='form-control' name="salary" value={salary} onChange={(e) => setsalary(e.target.value)}></input>
                    
                    <label>Employee mothername:</label>
                    <input type="text"  className='form-control' name="address" value={mothername} onChange={(e) => setmothername(e.target.value)}></input>
                   
                    <label>previous company name:</label>
                    <input type="text"  className='form-control' name="address" value={company} onChange={(e) => setcompany(e.target.value)}></input>
                   
                   
                    <button onClick={handle} className='btn btn-primary mt-3'>Submit</button> 

                </div>
                <div className='col-lg-4 mt-4'>
                    <input
                        type="text"
                        className='form-control'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or address"
                    />
                    <button onClick={handleSearch} className='btn btn-primary mt-3'>Search</button>
                </div>


                <div className='mt-5'>
                <h4 className='text-center'>EMPLOYEE DETAILS</h4>
              
                <table className='table table-bordered mt-2'>
                        
                      <thead className='bg-primary text-center'>
                         <tr className='bg-primary '>
                            <th>employeename</th>
                          <th>address</th>
                          <th>experience</th>
                          <th>email</th>
                          <th>fathername</th>
                          <th>salary</th>
                          <th>mothername</th>
                          <th>company</th>
                          <th colSpan={3} className='text-center'>action</th>
                         </tr>
                      </thead> 
                     
                      {view.map((v,i)=>(
           <> 
    
                      <tbody key={v.id}>
                          <tr>
                              <td>{v.name}</td>
                              <td>{v.address}</td>
                        
                              <td>{v.experience}</td> 
                              <td>{v.email}</td>
                              <td>{v.fathername}</td>
                              <td>{v.salary}</td>
                              <td>{v.mothername}</td>
                              <td>{v.company}</td>

                         <td><button onClick={()=>update(v)} className='btn btn-warning' >update </button></td>
                           
                            <td><button onClick={()=>edit(v)} className='btn btn-primary' >edit</button></td>

                               <td><button onClick={()=>del(v)} className='btn btn-danger'>delete </button></td> 
                              
                          </tr>
                      </tbody>
       </>
       ))}      
                  
                  </table>
          
            
      
          

       
                </div>

            </>
        );
    
       
    
  
}

export default App;
