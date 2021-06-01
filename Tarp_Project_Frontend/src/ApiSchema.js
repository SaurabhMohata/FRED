export const API = async(url,method,obj = {}) =>{
    const res = await fetch('http://localhost:9000/webApi/'+ url,{
      method:method,
      headers: {
        'Content-Type': 'application/json'
       },
      body:JSON.stringify(obj)
    })
    const data = await res.json();
    // console.log("data = ",data);
    return data;
  }