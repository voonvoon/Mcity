import React, { useState } from "react";
import { Fade } from 'react-awesome-reveal';
import { CircularProgress } from '@mui/material'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { showErrorToast, showSuccessToast } from '../../Utils/tools';
import { promotionsCollection } from '../../../firebase';

const Enroll = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues:{ email:''},
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email')
            .required('The email is required')
        }),     
        onSubmit:( values,{ resetForm } )=>{
             setLoading(true);
             submitForm(values)
        }
    });

    const submitForm = async(values) => {
        try{
            const isOnTheList = await promotionsCollection
            .where('email','==',values.email).get();

            if(isOnTheList.docs.length >= 1){
                showErrorToast('Sorry your are on the list already');
                setLoading(false);
                return false;
            }

            await promotionsCollection.add({ email: values.email });
            formik.resetForm();  
            setLoading(false);        
            showSuccessToast('Congratulation !!!:))');
        } catch(error){
            showErrorToast(error)
        }
    }

    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div className="enroll_title">
                        Enter your lovely email
                    </div>
                    <div className="enroll_input">

                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your lovely email ler..."
                        />

                        { formik.touched.email && formik.errors.email ?
                            <div className="error_label">
                                {formik.errors.email}
                            </div>                       
                        :null}

                        { loading ?
                            <CircularProgress color="secondary"
                            className="progress"/>
                            :
                            <button
                                type="submit"                                
                            >
                                Enroll
                            </button>
                        }

                        <div className="enroll_disclaimer">
                        This is a disclamer for this lovely website done by Mr Han Voon..

                        </div>

                    </div>
                </form>
            </div>
        </Fade>
    )
}

export default Enroll;