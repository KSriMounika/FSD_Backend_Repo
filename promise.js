 

function getUserDetails(id) {
    return new Promise((resolve, reject) => {
        console.log("fun1 called");
        resolve({ rollnum: "35" });

    });
}

function getUserSubjects(Userroll) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called");
        resolve({ UserSubId: "E1" });
    });
}

function getUserMarks(UserSubId) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called");
        resolve(`Getting user marks with subid: ${UserSubId}`);
    });
}

getUserDetails("123") 
    .then((result) => {
        return getUserSubjects(result.rollnum);
        console.log(result.rollnum);
        
    })
    .then((result) => {
        return getUserMarks(result.UserSubId);

    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
