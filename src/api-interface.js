import axios from 'axios';
async function ApiGetCollection(){
    let url = "https://localhost:44393/api/collections";
    let response = await axios.get(url); 
    return response;
}
async function ApiPostCard( stack, newWord, newDefinition ){
    let url = "https://localhost:44393/api/card";
    var postResponse;
    let data = {
        stackId: stack,
        word: newWord,
        definition: newDefinition
    }
    var awaiter = await axios.post(url, data).then(function (response) {
        postResponse = response;
        console.log(response);
    })
        .catch(function (error) {
        console.log(error);
    }); 
    return  postResponse;
}
function ApiPutCard(cardId, newWord, newDefinition){
    let url = "https://localhost:44393/api/card";
    let data = {
        id: cardId,
        word: newWord,
        definition: newDefinition
    }
    axios.put(url, data).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiDeleteCard(cardId){
    let url = "https://localhost:44393/api/card/"+cardId;
    axios.delete(url).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
async function ApiPostStack(newTitle){
    let url = "https://localhost:44393/api/stack";
    let data = {
        title: newTitle
    }
    var postResponse;
    var awaiter = await axios.post(url,data).then(function (response) {
        postResponse = response;
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
    return postResponse;
}
function ApiPutStack(stackId, newTitle){
    let url = "https://localhost:44393/api/stack";
    let data = {
        id: stackId,
        title: newTitle   
    }
    axios.put(url,data).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiDeleteStack(stackId){
    let url = "https://localhost:44393/api/stack/" + stackId;
    axios.delete(url).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
export { 
    ApiGetCollection,
    ApiPostCard,
    ApiPutCard,
    ApiDeleteCard,
    ApiPostStack,
    ApiPutStack,
    ApiDeleteStack
}
// exports.ApiGetCollection = ApiGetCollection;
// exports.ApiPostCard = ApiPostCard;
// exports.ApiPutCard = ApiPutCard;
// exports.ApiDeleteCard = ApiDeleteCard;
// exports.ApiPostStack = ApiPostStack;
// exports.ApiPutStack = ApiPutStack;
// exports.ApiDeleteStack = ApiDeleteStack;