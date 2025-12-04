
// function getUserDetails(id) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
      
//          resolve({ rollnum: "35" });

//        }, 2000);
       

//     })
// };
// function getUserSubjects(Userroll) {
//     return new Promise((resolve, reject) => {
      
//         setTimeout(() => {
      
//          resolve({UserSubId: "E1"  });

//        }, 4000);

//     })
// }

// function getUserMarks(UserSubId) {
//     return new Promise((resolve, reject) => {
       
//          setTimeout(() => {
      
//          resolve(`Getting user marks with subid: ${UserSubId}`);

//        }, 6000);

//     })
// }


// const myfun = async() => {
//     const result = await getUserDetails("35");
//     console.log(result);
//     const result1 = await getUserSubjects(result.rollnum);
//     console.log(result1);
//     const result2 = await getUserMarks(result1.UserSubId);
//     console.log(result2);
    
// };
// myfun();

function getUserDetails(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ rollnum: "35" });
        }, 2000);
    });
}

function getUserSubjects(Userroll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ UserSubId: "E1" });
        }, 4000);
    });
}

function getUserMarks(UserSubId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Getting user marks with subid: ${UserSubId}`);
        }, 6000);
    });
}

const myfun = async () => {
    // Use await for each async call
    const result = await getUserDetails("35");
    console.log(result);  // { rollnum: '35' }

    const result1 = await getUserSubjects(result.rollnum);
    console.log(result1); // { UserSubId: 'E1' }

    const result2 = await getUserMarks(result1.UserSubId);
    console.log(result2); // Getting user marks with subid: E1
};

myfun();
