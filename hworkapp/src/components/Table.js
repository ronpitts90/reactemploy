import React, {useState} from "react";
import Row from "./Row";
import API from "../utils/API";

export default function Table () {

    const [employees, setEmployeesState] = useState([]);

    API.getUsers().then(data =>  {
        console.log(data)
         setEmployeesState(data.data.results);
        }  
    )

    return (
        <div>
            {employees.map(result => {
                return <Row image={result.picture.medium} firstName={result.name.first} lastName={result.name.last}/>
            })}
        </div>
    )
}



