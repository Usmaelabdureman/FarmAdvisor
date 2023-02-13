import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../homepage/homepageStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import search from "../Assets/image/search.png"


export default function CreateFarmPage({ toggleModal }) {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        farmName: "",
        location: ""
    })
    const [formError, setFormError] = useState({})
    const [isSubmit, setSubmit] = useState(false);

    const onchange = (e) => {
        setValues(() => ({
            ...values, [e.target.name]: e.target.value
        }))
    }

 

    const validate = (values) => {
        const error = {}
        if (values.farmName === "") {
            error.farmName = "farm name is required"
        }
        if (!values.location) {
            error.location = "location is required"
        }
        return error

    }

    const onsubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        const formValue = {
            farmName: values.farmName,
            location: values.location
        }
        setFormError(validate(formValue))

        if (Object.keys(formError).length === 0 && isSubmit ) {            
         navigate("/selectedFarmPage")
        }

    }

    useEffect(()=>{
                const ifameData=document.getElementById("iframeId")
                const lat=9.005401;
                const lon=38.763611;
                ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
            })
    return (
        <div className='farmMainDiv'>
            <div className='modalContainer'>
                <header className='modalHeader'>
                    <h4>New Farm</h4>
                    <button className='cancel' onClick={toggleModal}> &times;</button>
                </header>
                <main>
                    <form onSubmit={onsubmit} >
                        <div className="mb-3">
                            <label className="form-label">Farm Name</label>
                            <input type="text" className="form-control" name="farmName" value={values.farmName} onChange={onchange} placeholder="Enter farm name" required />
                            {formError.farmName && <p className='err'>{formError.farmName}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control" name='location' value={values.location} onChange={onchange} placeholder="Search for location" required />
                            {formError.location && <p className='err'>{formError.location}</p>}

                            <div class="invalid-feedback">
                                Please enter/ select location
                            </div>
                            <button className='search'>
                                <img src={search} />
                            </button>
                            <div>
                <iframe id="iframeId" height="300rem" width="100%"></iframe>
            </div>
                          
                        </div>
                        <Link to="/">
                            <button className='button' onClick={onsubmit}> CREATE NEW FARM</button>
                        </Link>
                    </form>
                </main>
            </div>
        </div>

    )
}
