import { Form, Checkbox } from "semantic-ui-react";
import React, {  useState } from "react";
import { submitForm } from "./../networkRequest/requests"; 
import { toast } from "react-toastify";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState({ name: "", type: "" });
  const [radio, setRadio] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [about, setAbout] = useState("");

  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];
  const onChange = (event, result) => {
    const { name, value } = result || event.target;
    setGender({ ...gender, [name]: value });
  };
  const onClick = (e) => {
      e.preventDefault()
    console.log(name, email, about, gender.type, radio);
    submitForm(name, email, about, gender.type, radio)
      .then((res) => {
        if (res.statusCode === 200) return toast.info(res.customMessage)
        return toast.error(res.customMessage)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginLeft: 40, marginTop: 40 }}>
      <h2 style={{ marginBottom: 40 }}>Simple Form</h2>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
            name="type"
            value={gender.type}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group grouped>
          <label>Quantity</label>
          <Form.Field
            label="One"
            control="input"
            type="radio"
            name="htmlRadios"
            onClick={(e) => setRadio("1")}
          />
          <Form.Field
            label="Two"
            control="input"
            type="radio"
            name="htmlRadios"
            onClick={(e) => setRadio("2")}
          />
        </Form.Group>

        <Form.TextArea
          label="About"
          placeholder="Tell us more about you..."
          onChange={(e) => setAbout(e.target.value)}
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
          onChange={() => setCheckbox(!checkbox)}
        />
        {checkbox ? (
          <Form.Button onClick={onClick}>Submit</Form.Button>
        ) : (
          <Form.Button disabled>Submit</Form.Button>
        )}
      </Form>
    </div>
  );
};

export default InputForm;
