import { useState } from 'react';
import Button from './Button';
import './Form.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Form() {

    const history = useHistory()
    const dispatch = useDispatch()
    const initialValues = {
        eventName: '',
        hostName: '',
        startDate: '',
        endDate: '',
        location: ''
    }
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        e.preventDefault();

        setFormValues({ ...formValues, [e.target.name]: e.target.value });

        console.log(formValues)
    }

    const handleSubmit = () => {
        console.log(formValues)
        dispatch({
            type: "CREATE_EVENT",
            payload: formValues
        });
        history.push('/event')
    }
    return (
        <div className="fornm-container">
            <form>
                <div className="input-container">
                    <label htmlFor="Name">Event Name</label>
                    <input name='eventName' type="text" onChange={e => handleChange(e)} />
                </div>

                <div className="input-container">
                    <label htmlFor="Name">Host Name</label>
                    <input name='hostName' type="text" onChange={e => handleChange(e)} />
                </div>

                <div className="input-container">
                    <label htmlFor="Name">Start Date</label>
                    <input name='startDate' type="date" onChange={e => handleChange(e)} />
                </div>
                <div className="input-container">
                    <label htmlFor="Name">End Date</label>
                    <input name='endDate' type="date" onChange={e => handleChange(e)} />
                </div>

                <div className="input-container">
                    <label htmlFor="Name">Location</label>
                    <input name='location' type="text" onChange={e => handleChange(e)} />
                </div>


            </form>

            <Button btnText='Next' handleClick={handleSubmit} />
        </div>
    )
}

export default Form;