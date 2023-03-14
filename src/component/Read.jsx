import React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  //
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //   Fetching Data From Api
  const fetchData = async () => {
    const response = await fetch(
      "https://640f01ddcde47f68db3e8f9d.mockapi.io/fakeData/"
    );
    const data = await response.json();
    setApiData(data);
  };

 //  Loading Data From Api
  const getData = ()=>{
    axios.get( "https://640f01ddcde47f68db3e8f9d.mockapi.io/fakeData/").then((getData)=>{
        setApiData(getData.data)
    })
  }
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete =(id)=>{
    axios.delete(`https://640f01ddcde47f68db3e8f9d.mockapi.io/fakeData/${id}`)
    .then(()=>getData())

  }
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {apiData.map((data) => (

        <Table.Body>
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>

              <Table.HeaderCell>Update</Table.HeaderCell>

              {/* Delete Button */}
              <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>


              {/* Update Button  */}
              <Link to="/update">
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Table.Cell>
              </Link>
            </Table.Row>
        </Table.Body>
        ))}

      </Table>
    </div>
  );
};

export default Read;
