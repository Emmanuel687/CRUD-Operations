import React from 'react';
import { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Read from './Read';
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
      axios.post(`https://640f01ddcde47f68db3e8f9d.mockapi.io/fakeData/`,{
          firstName,
          lastName,
          checkbox
      })
    };
  return (
    <div>
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>

    <Read/>

  </div>


  )
}

export default Create