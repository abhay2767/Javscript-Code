let obj = {
            Company: "TCS"
}
for(let a in obj)
{
    const EMP = {
        Emp_Id : 600,
       Emp_Name : "Abhay Dubey",
       Emp_Dept : "Developer",
       Emp_Sal : 100000
    }
        console.log(a+ ": "+obj[a]);
        for(let b in EMP)
        {
            console.log(b+": "+EMP[b])
        }
}