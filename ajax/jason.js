async function createUser(){
    let user = {
        name : 'John',
        job :'coder'
    };
    let response = await fetch('http://reqres.in/api/users/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    let result = await response.json();
    alert(`User ${result.name} is created at ${result.createdAt}`);

}
createUser();
