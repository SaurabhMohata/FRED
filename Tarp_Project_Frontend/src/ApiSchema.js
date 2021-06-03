export const API = async(url,method,obj = {},accessToken=null) =>{
  console.log("accessToken = ",accessToken);
    const header_NoAuth = {
      'Content-Type': 'application/json',
    }
    const header_Auth = {
      'Content-Type': 'application/json',
      'authorization' :'Bearer ' + accessToken
    }
    let headers;
    if(url ===  '/signin'|| url === '/signup'){
      headers = header_NoAuth
    }else{
      headers = header_Auth
    }
  
    const res = await fetch('http://localhost:9000/webApi/'+ url,{
      method:method,
      headers: headers,
      body:JSON.stringify(obj)
    })
    const data = await res.json();
    console.log("data recieved from server = ",data);
    return data;
  }