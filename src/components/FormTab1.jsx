import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import axios from 'axios';

import styles from './Form.module.scss';

const FormTab1 = () => {
  const [formStatus, setFormStatus] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      budget: '',
      terms: '',
      text: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Minimum 2 characters'),
      email: Yup.string().email('Invalid email address'),
      number: Yup.number(),
      budget: Yup.string(),
      terms: Yup.string(),
      text: Yup.string().min(5, 'Minimum 5 characters'),
    }),

    onSubmit: (values, actions) => {
      try {
        emailjs.send('service_lrjl91k', 'template_2td209s', values, 'ZQ1RHMPm_vSnxaIJP').then(() => {
          console.log('email sent', values);
          actions.setSubmitting(false);
          setFormStatus('success');

          setTimeout(() => {
            actions.resetForm();
            setFormStatus('');
          }, 4000);
        });

        // код Тёмы
        let fData = new FormData();

        fData.append('name', values.name);
        fData.append('email', values.email);
        fData.append('number', values.number);
        fData.append('budget', values.budget);
        fData.append('terms', values.terms);
        fData.append('text', values.text);

        axios.post('http://localhost/israel_project-main/src/php/form-db.php', fData);
        //
      } catch (error) {
        console.log(error);
        setFormStatus('failure');
        setTimeout(() => {
          setFormStatus('');
        }, 4000);
      }
    },

    // onSubmit: (values) => console.log(values),
    // onSubmit: (values) => {
    //   console.log('submit', values);
    //   alert('Thank you for the submission. Korionna will be in contact with you shortly');
    //   resetForm();
    // },
  });

  // onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  // onSubmit:     "https://formsubmit.co/your@email.com" method="POST",

  // onSubmit: (values) => {
  //   console.log('submit', values);
  //   alert('Thank you for the submission. Korionna will be in contact with you shortly');
  //   resetForm();
  // },

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.input__wrapper}>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="name"
            required
            placeholder="טלפון"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
        </div>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="email"
            required
            placeholder="דוא”ל"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="number"
            required
            placeholder="שם"
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.number && formik.touched.number ? (
            <div className={styles.error}>{formik.errors.number}</div>
          ) : null}
        </div>
      </div>

      <div className={styles.select__wrapper}>
        <div>
          <label htmlFor="budget">בחר</label>
          <select
            name="budget"
            id="budget"
            value={formik.values.budget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="less than $10,000">less than $10,000</option>
            <option value="from $10,000 to $20,000">from $10,000 to $20,000</option>
            <option value="from $20,000 to $30,000">from $20,000 to $30,000</option>
            <option value="from $30,000 to $100,000">from $30,000 to $100,000</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">תקציב</label>
          <select
            name="terms"
            id="terms"
            value={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="2D Animation">2D Animation</option>
            <option value="3D Animation">3D Animation</option>
            <option value="3D visualizations">3D visualizations</option>
            <option value="Logos">Logos</option>
            <option value="Corporate identity">Corporate identity</option>
            <option value="Photo retouching">Photo retouching</option>
            <option value="Web development">Web development</option>
          </select>
        </div>
      </div>
      <div className={styles.textarea__wrapper}>
        <label htmlFor="text">הערות</label>
        <textarea
          className={styles.textarea}
          name="text"
          id="text"
          placeholder="ספר לנו איזה סוג של פרויקט אתה צריך, תאר את הפרטים או שאל שאלה"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.text && formik.touched.text ? (
          <div className={styles.errorarea}>{formik.errors.text}</div>
        ) : null}
      </div>
      <div className={styles.button_rapper}>
        <button disabled={formik.isSubmitting} className={styles.button} type="submit">
          שלח
        </button>
        {formStatus === 'success' && <div className={styles.success}>We contact with you soon!</div>}
        {formStatus === 'failure' && <div className={styles.failure}>Something wrong, try again Please</div>}
      </div>
    </form>
  );
};

export default FormTab1;
