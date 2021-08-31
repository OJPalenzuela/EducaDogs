import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {dogNew, Edit, startUploading } from '../actions/dogAction'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormAdd = () => {

    const { active } = useSelector(state => state.dog)

    const activeId = useRef(active.id)

    const formik = useFormik({
        initialValues: {...active},

        validationSchema: Yup.object({
            name: Yup.string().required(),
            description: Yup.string().required(),
            url: Yup.string().required()
        }),
        
        onSubmit: (data) => {
            if (active.name === "") {
                dispatch(dogNew(data))
                formik.resetForm()
            } else if (active.id !== "") {
                dispatch(Edit(data))
            }
        }

    })


    useEffect(() => {
        if (active.id !== activeId.current) {
            formik.resetForm()
        }
        activeId.current = active.id
    }, [active, formik])

    const dispatch = useDispatch()
    
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = async (e) => {
        if (e.target.files[0]) {
            const fileUrl = await dispatch(startUploading(e.target.files[0]))
            const inputFileUrl = document.getElementById("fileinput")
            inputFileUrl.value = fileUrl
            formik.values.url = fileUrl
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-4 text-center py-3">
                <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1625536708/perros_e1bfpk.png"
                    className="App-logo "
                    alt="logo" />
                <form onSubmit={formik.handleSubmit} className="card card-body border-primary">

                    <div className="form-group input-group ">

                        <div
                            className="btn border-bottom shadow-sm input-group-text bg-light"
                            value="Picture"
                            onClick={handlePictureClick}
                        >
                            <i className="material-icons">insert_link</i>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Url"
                            name="url"
                            disabled
                            id="fileinput"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}

                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-text bg-light">
                            <i className="material-icons">create</i>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                            rows="3"
                            className="form-control"
                            placeholder="Write a Description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        ></textarea>
                    </div>

                    <button className="btn btn-dark mt-3">Save</button>
                </form>
            </div>

        </div>

    )
}

export default FormAdd
