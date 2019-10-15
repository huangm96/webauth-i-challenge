import React,{useState} from "react";
import { Button, Input, Icon, Form } from "antd";
import "antd/dist/antd.css";

const RegisterForm = () => {
    const [form,setForm]= useState();
  return (
    <div className="RegisterFrom">
      <h1>Register Form</h1>
      <form >
        <Form.Item>
          <Input
            size="large"
            name="userName"
            // value={values.first_name}
            // onChange={handleChange}
            // onBlur={handleBlur}
            placeholder="User Name"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item>
          <Input
            size="large"
            name="password"
            // value={values.last_name}
            // onChange={handleChange}
            // onBlur={handleBlur}
            placeholder="Password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
      

        <Button type="primary" htmlType="submit">
          Register
        </Button>
        
      </form>
    </div>
  );
};

export default RegisterForm;
