function getUserDetails(id, getUserSubjects)
{
    console.log("getting user details by using id",id);
    getUserSubjects({roll: "35"})
};
function getUserSubjects(Userroll, getUserMarks)
{
    console.log("getting user subjects by using rollnumber",Userroll);
    getUserMarks({subId: "E1"})
};
function getUserMarks(UserSubId)
{
    console.log("getting user marks by using subjectId", UserSubId);
}
getUserDetails("123", function(Userroll){

      getUserSubjects(Userroll, function (UserSubId) {
                 
        getUserMarks(UserSubId)
        
      })
    

});