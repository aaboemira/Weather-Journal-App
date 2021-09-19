const baseUrl="http://api.openweathermap.org/data/2.5/weather?zip="
let apiKey = '&appid=bc47e5a7ee2b5d9355f4c7bad3f7980f';
document.getElementById("generate").addEventListener("click", getApi);
let post=[]
const today = new Date();
function getApi(e){
  const zip=document.getElementById("zip").value
  const feeling=document.getElementById("feelings").value
  getWeather(baseUrl,zip,apiKey,feeling)
  .then(function(post){
    postData("http:localhost:8080/post",post)
  })
  getData("http:localhost:8080/get")
  .then(function(info){
    
  })

}

const getWeather = async (baseURL, zip, key,feeling)=>{
    // 1.
      const res = await fetch(baseURL+zip+key)
      const date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // 2. Call Fake API
      // const res = await fetch('/fakeAnimalData')
      try {
        const data = await res.json();
        post={
          temp:data.main.temp,
          date:date,
          user:feeling
        }

        return post
        
      }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
      }
    }

const postData = async(url='',data={})=>{
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            "mode" : "no-cors"
        },
      
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
        });

    try{
        const newData =await response.json();
        return newData
    }catch(error){
        console.log("error",error)
    }
}
const getData=async(url='')=>{
  const request=await fetch(url)
  try{
    const allData = await request.json()
    document.getElementById("temp").innerHTML=allData[0].temp
    document.getElementById("date").innerHTML=allData[0].date
    document.getElementById("user").innerHTML=allData[0].user
    return allData  
    }catch(error){
      console.log("Error",error)
    }
}


//