import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
    };

    //Everytime it is rendered we recreate the array (deps)
    //If the array (deps) changes, it calls the callback function
    //To call only once => empty array
    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return (
        <ul>
            {resources.map((record) => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

export default ResourceList;
