import { useEffect, useState } from "react";
import axios from "axios";

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    //Everytime it is rendered we recreate the array (deps)
    //If the array (deps) changes, it calls the callback function
    //To call only once => empty array
    useEffect(() => {
        //fetchResource(resource);
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;