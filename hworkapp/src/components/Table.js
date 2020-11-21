import React, {useState, useEffect} from "react";
import Row from "./Row";
import API from "../utils/API";




export default function Table () {

    const [employees, setEmployeesState] = useState([]);
    const [filteredEmployees, setFilteredEmployeesState] = useState([]);
    const [value, setValue] = useState("")

    useEffect(()=> {
        API.getUsers().then(data =>  {
            console.log(data)
             setEmployeesState(data.data.results);
             setFilteredEmployeesState(data.data.results);
            }  
        )
    },[])
    // onclick methods 

    const handleSearch = ()=>{
        const filtered = employees.filter((employee) => employee.name.first.startsWith(value) || employee.name.last.startsWith(value))
        setFilteredEmployeesState(filtered)
    }

    return (
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}/> <button onClick={handleSearch}> search</button>
            {/* header row here */}
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
            {filteredEmployees.map((result,i ) => {
                return(
                <tr key={i}>
                <td>{i}</td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.email}</td>
                <td>{result.phone}</td>
                </tr>)
                // //return <Row image={result.picture.medium} firstName={result.name.first} lastName={result.name.last}/>
            })}
   
  </tbody>
</Table>
        </div>
    )
}



