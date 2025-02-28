import { useState, useEffect } from "react";

function FormHandling() {
  
  const [formData, setFormData] = useState({ name: "", email: "", pass: "" });
  const [datas,setDatas]=useState([]);

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("formSubmissions")) || [];
    setDatas(storedData);
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


 
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted!");
    setDatas([...datas,formData]);
    console.log(datas);
    const updatedData = [...datas, formData];
    setDatas(updatedData);
    sessionStorage.setItem("formSubmissions", JSON.stringify(updatedData));
    setFormData({ name: "", email: "", pass: "" });
    

    
  }
  
    
            
       
    
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        Password: <input type="password" name="pass" value={formData.pass} onChange={handleChange} />
        <br />
        <button type="submit" style={{ backgroundColor: "blue" }}>Submit</button>
      </form>

      <div>
      <h1>Form Submissions</h1>
      {datas.map(function (data,index){
        return <div key={index} style={{border:"2px solid black"}}>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h3>{data.pass}</h3>
        </div>
      })}

      </div>

      
      

      
    </div>
  );
}

export default FormHandling;


//Easier IMPlementation

// import { useState } from "react";


// function FormHandeling() {

//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [pass,setpass]=useState("")

//     function handlesubmit(e){
//         alert("Form Submitted! ")
//         e.preventDefault();
//         console.log(name);
//         console.log(email);
//         console.log(pass);
//         setName("");
//         setEmail("");
//         setpass("");

//     }
//     function handlename(e){
//         setName(e.target.value);
//     }
//     function handleemail(e){
//         setEmail(e.target.value);
//     }
//     function handlepass(e){
//         setpass(e.target.value);
//     }
//   return (
//     <div>

//         <form action="" onSubmit={handlesubmit}>

//             Name: <input type="text" name="" id="" value={name} onChange={handlename} />
//             <br/>
//             Email: <input type="email" name="" id="" value={email} onChange={handleemail} />
//             <br/>
//             Password: <input type="password" name="" id=""  value={pass} onChange={handlepass}/>
//             <br />

//             <button type="submit" style={{backgroundColor:"blue"}}>Submit</button>


//         </form>


      
//     </div>
//   )
// }

// export default FormHandeling;


