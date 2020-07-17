import axios from 'axios';

async function getStuff(){
    let thisvariable = await axios.get("https://localhost:44393/api/collection");
    return thisvariable;
}

export {
    getStuff, 

}