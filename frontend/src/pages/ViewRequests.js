import React from 'react'
import { useState, useEffect } from 'react';
import {Button, Paper} from '@mui/material'
import { useParams } from 'react-router';
import 'typeface-roboto'

export function ViewRequests() {

    const [issues, setIssues] = useState([])

    useEffect(() => {
        // POST request using fetch inside useEffect React hook

        fetch('http://localhost:8000/api/issue/').then(result => result.json()).then(data => setIssues(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [issues]);

    return (
        <>
            {issues.length === 0 ? null : issues.map((issue) => 
            {
                return(
                    <Paper elevation={6}>
                        <h1>{issue.title}</h1>
                        {JSON.stringify(issue)}
                        <Button href={`/request/${issue.id}`}>View Issue</Button>
                    </Paper>
                )
            })}
        </>
    );
}

export function Request() {
    let { id } = useParams();

    const [issues, setIssues] = useState([])

    useEffect(() => {
        // POST request using fetch inside useEffect React hook

        fetch('http://localhost:8000/api/issue/').then(result => result.json()).then(data => setIssues(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [issues]);

    return (
        <>
            {issues.length === 0 ? null : 
                <Paper elevation={6}>
                    {JSON.stringify(issues[id-1])}
                </Paper>
            }
        </>
    );
}

export default ViewRequests;