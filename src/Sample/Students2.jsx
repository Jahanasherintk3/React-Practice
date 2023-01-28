let Students2=()=>{
let Student_Names={
    student_First:"Ram",
    student_Second:"Raj",
    student_Third:"Sai"

}
return<div>
    <h4>STUDENTS NAMES</h4>
    <pre>{JSON.stringify(Student_Names)}</pre>
    <h6>First:{Student_Names.student_First}</h6>
    <h6>Second:{Student_Names.student_Second}</h6>
    <h6>Third:{Student_Names.student_Third}</h6>
</div>
}
export default Students2;