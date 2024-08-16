import React from 'react'
import Modal from '../Modal/Modal'
import { Field, Form, Formik } from "formik";

const AddUpdate = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          role: "",
          number: "",
          date: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            
            <label htmlFor="role">Role</label>
            <Field name="role" type="text" />
            
            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" />
            
            <label htmlFor="date">Date</label>
            <Field name="date" type="date" />
          </div>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </Modal>
  );
};
export default AddUpdate