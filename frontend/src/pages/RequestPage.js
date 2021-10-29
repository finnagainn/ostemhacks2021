import React from 'react'
import { useReducer, useState, useEffect } from 'react';
import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import 'typeface-roboto'
import { border } from '@mui/system';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function RequestPage() {
    /* Post request with the given items
    
    */
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {"id" : 0, "raised": 0});
    const [issues, setIssues] = useState([])

    useEffect(() => {
        // POST request using fetch inside useEffect React hook

        fetch('http://localhost:8000/api/issue/').then(result => result.json()).then(data => setIssues(data));
        setFormData({
            name: "id",
            value: issues.length+1,
        });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [issues]);

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify(formData));
        setSubmitting(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:8000/api/issue/', requestOptions)
            .then(response => console.log(response))
    }

    return (
        <>
            {submitting &&
                <div>
                    You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }
            <Typography variant="h2" textAlign="center">Issue Request Form</Typography>
            <form onSubmit={handleSubmit}>
                <fieldset style={{ border: 0 }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4">Name</Typography>
                        <TextField name="title" onChange={handleChange} />
                    </label>
                </fieldset>
                <fieldset style={{ border: 0 }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4">Description</Typography>
                        <TextareaAutosize name="description" minRows={5} onChange={handleChange} style={{ width: 500 }} />
                    </label>
                </fieldset>
                <fieldset style={{ border: 0 }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4">Donation $</Typography>
                        <TextField name="pledged" onChange={handleChange} />
                    </label>
                </fieldset>
                <fieldset style={{ border: 0 }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4">Repository URL</Typography>
                        <TextField name="github_url" onChange={handleChange} />
                    </label>
                </fieldset>
                <Button type="submit" size="large">Submit</Button>
            </form>
        </>
    );
}

export default RequestPage;
