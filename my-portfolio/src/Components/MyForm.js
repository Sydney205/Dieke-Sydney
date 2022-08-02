import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import emailjs from "emailjs-com";
import { FaMale, FaPen } from "react-icons/fa";
import { MdCancel, MdEmail } from "react-icons/md";

const initialValues = {
  user_name: "",
  user_email: "",
  message: "",
};

const validationSchema = Yup.object({
  user_name: Yup.string().required("Please tell me your name!"),
  user_email: Yup.string()
    .email("This is an invalid email format!")
    .required("Your email is required!"),
  message: Yup.string().required("Send a message!"),
});

function MyForm() {
  function SendEmail(object) {
    emailjs
      .send("service_00ecl7r", "template_fpnt1up", object, "0XYzT363CeLB0L8N2")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("Message not sent");
        }
      );
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          SendEmail(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
    >
      {(formik) => (
        <Form>
          <div className="form-group">
            <label htmlFor="user_name">
              <FaMale /> Name
              <br />
              <Field
                type="text"
                id="user_name"
                name="user_name"
                placeholder={"Whats your name?"}
              />{" "}
            </label>
            <br />
            <ErrorMessage name="user_name" component={TextError} />
          </div>

          <br />

          <div className="form-group">
            <label htmlFor="user_email">
              <MdEmail /> E-mail
              <br />
              <Field
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Email Address"
              />{" "}
            </label>
            <br />
            <ErrorMessage name="user_email">
              {(errorMsg) => (
                <div className="error">
                  <MdCancel /> {errorMsg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="message">
              <FaPen /> Message
              <br />
              <Field
                as="textarea"
                name="message"
                id="message"
                placeholder="Send me a message"
              />{" "}
            </label>
            <br />
            <ErrorMessage name="message" component={TextError} />
          </div>
          <br />

          <div className="form-btn-container">
            <div className="box-3">
              <button className="btn send-btn" type="submit" value={"send"}>
                <span>Send</span>
              </button>
            </div>
            <div className="box-1">
              <button
                onClick={() => formik.resetForm()}
                type="reset"
                text="clear all"
                className="btn clear-btn"
              >
                Clear All
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
