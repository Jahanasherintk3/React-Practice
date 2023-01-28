let Student=()=>{   
let student_Details={
    student_Name:"Jai Prakash",
    roll_Number:25,
    place:"Nilambur"
}
return<div> 
    <pre>{JSON.stringify(student_Details)}</pre> {/*this will show a single line object*/}
    <h2>Student info</h2>
    <h3>Student Name:{student_Details.student_Name}</h3>
    <h3>Student Number:{student_Details.roll_Number}</h3>
    <h3>Student Name:{student_Details.place}</h3>
</div>

}
export default Student;