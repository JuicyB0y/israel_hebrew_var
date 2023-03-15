import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import FormTab1 from './FormTab1';
import FormTab2 from './FormTab2';

import styles from './Form.module.scss';
import FormTab3 from './FormTab3';

const Form = () => {
  const [formStatus, setFormStatus] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const { t } = useTranslation();

  const formNames = [
    { name: 'לשיתוף פעולה', content: <FormTab1 /> },
    { name: 'הצטרפות לצוות', content: <FormTab2 /> },
    { name: 'לתחילת הפרוייקט', content: <FormTab1 /> },
  ];

  const formik = useFormik({
    // initialValues: {
    //   name: '',
    //   email: '',
    //   number: '',
    //   budget: '',
    //   terms: '',
    //   text: '',
    // },
    // validationSchema: Yup.object({
    //   name: Yup.string().min(3, 'Minimum 2 characters'),
    //   email: Yup.string().email('Invalid email address'),
    //   number: Yup.number(),
    //   budget: Yup.string(),
    //   terms: Yup.string(),
    //   text: Yup.string().min(5, 'Minimum 5 characters'),
    // }),
    // onSubmit: (values, actions) => {
    //   try {
    //     emailjs.send('service_lrjl91k', 'template_2td209s', values, 'ZQ1RHMPm_vSnxaIJP').then(() => {
    //       console.log('email sent', values);
    //       actions.setSubmitting(false);
    //       setFormStatus('success');
    //       setTimeout(() => {
    //         actions.resetForm();
    //         setFormStatus('');
    //       }, 4000);
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     setFormStatus('failure');
    //     setTimeout(() => {
    //       setFormStatus('');
    //     }, 4000);
    //   }
    // },
    // onSubmit: (values) => console.log(values),
  });

  // onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  // onSubmit:     "https://formsubmit.co/your@email.com" method="POST",

  // onSubmit: (values) => {
  //   console.log('submit', values);
  //   alert('Thank you for the submission. Korionna will be in contact with you shortly');
  //   resetForm();
  // },

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>להשארת הפרטים</h3>

      <div className={styles.formHeader}>
        {formNames.map((item, i) => (
          <button className={i === activeTab ? styles.btnActive : ''} onClick={() => setActiveTab(i)}>
            {item.name}
          </button>
        ))}
      </div>
      {activeTab === 0 && <FormTab1 />}
      {activeTab === 1 && <FormTab2 />}
      {activeTab === 2 && <FormTab3 />}
      {/*  */}
      {/* <div className={styles.formHeader}>
        <button>Project start</button>
        <button>Get on the team</button>
        <button>Cooperation</button>
      </div> */}
      {/* <FormTab1 /> */}
      {/* <FormTab2 /> */}
    </div>
  );
};

export default Form;

// import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
//
//

//
//
// const MyTextInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//       <>
//         <label htmlFor={props.name}>{label}</label>
//         <input {...field} {...props} />
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </>
//     );
// };

// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//       <>
//         <label className="checkbox">
//             <input type="checkbox" {...field} {...props} />
//             {children}
//         </label>
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </>
//     );
//   };

// const CustomForm = () => {

//     return (
//         <Formik
//         initialValues = {{
//             name: '',
//             email: '',
//             amount: 0,
//             currency: '',
//             text: '',
//             terms: false
//         }}
//         validationSchema = {Yup.object({
//             name: Yup.string()
//                     .min(2, 'Минимум 2 символа для заполнения')
//                     .required('Обязательное поле!'),
//             email: Yup.string()
//                     .email('Неправильный email адрес')
//                     .required('Обязательное поле!'),
//             amount: Yup.number()
//                     .required('Сумма обязательна')
//                     .min(5, 'Не менее 5'),
//             currency: Yup.string().required('Выберите валюту'),
//             text: Yup.string()
//                     .min(10, 'Не менее 10 символов'),
//             terms: Yup.boolean()
//                     .required('Необходимо согласие')
//                     .oneOf([true], "Необходимо согласие")
//         })}
//         onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
//         >
//             <Form className="form">
//                 <h2>Отправить пожертвование</h2>
//                 <MyTextInput
//                     label="Ваше имя"
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="off"
//                 />
//                 <MyTextInput
//                     label="Ваша почта"
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="off"
//                 />
//                 <label htmlFor="amount">Количество</label>
//                 <Field
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     autoComplete="off"
//                 />
//                 <ErrorMessage component="div" className="error" name="amount"/>
//                 <label htmlFor="currency">Валюта</label>
//                 <Field
//                     id="currency"
//                     name="currency"
//                     as="select"
//                     >
//                         <option value="">Выберите валюту</option>
//                         <option value="USD">USD</option>
//                         <option value="UAH">UAH</option>
//                         <option value="RUB">RUB</option>
//                 </Field>
//                 <ErrorMessage component="div" className="error" name="currency"/>
//                 <label htmlFor="text">Ваше сообщение</label>
//                 <Field
//                     id="text"
//                     name="text"
//                     as="textarea"
//                 />
//                 <ErrorMessage component="div" className="error" name="text"/>
//                 <MyCheckbox name="terms">
//                     Соглашаетесь с политикой конфиденциальности?
//                 </MyCheckbox>
//                 <button type="submit">Отправить</button>
//             </Form>
//         </Formik>
//     )
// }

// export default CustomForm;
