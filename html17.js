//get the authors
/*const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors');
const userAuthors=authors.then(response=>response.json());
userAuthors.then(data=> console.log(data));
*/
//adding new author
//creat headers so the server can understand it 
/*const headers=new Headers();
headers.append('content-type','application/json')
const options={
    method:'POST',
    headers,
    //convert them to string so the server can understand that we send to it a json
    body: JSON.stringify({
    firstName: "First Name 608",
    idBook: 198,
    lastName: "Last Name 608",
    })
};
const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',options);
const userAuthors=authors.then(response=>response.json())
userAuthors.then(data=> console.log(data));*/


//modife the  authors
/*const headers=new Headers();
headers.append('content-type','application/json')
const options={
    method:'put',
    headers,
    body: JSON.stringify({
    firstName: "First Name H 608",
    id: 598,
    idBook: 198,
    lastName: "Last Name 608",
    })
};
const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/598',options);
const userAuthors=authors.then(response=>response.json())
userAuthors.then(data=> console.log(data));*/

//to delet thing
/*

const options={
    method:'DELET',
  
};
const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/598',options);
const userAuthors=authors.then(response=>response.json());
userAuthors.then(data=> console.log(data));*/


//to modife using patch
//for patch this the stauts that apears to me :   status: 405 which mean this AIP doesnot proved this ,
/*
const headers=new Headers();
headers.append('content-type','application/json')


const options={
    method:'PATCH',
    headers,
    body: JSON.stringify({
    firstName: "First Name HlA 608",
    
    })
};


const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/598',options);
const userAuthors=authors.then(response=>{
	console.log(response);
	response.json()
});
userAuthors.then(data=> console.log('data: ',data));*/



