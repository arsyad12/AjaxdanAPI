//request data API dengan library dan snippet Axios

axios.get('https://swapi.dev/api/people/1/')
.then(res => {
    console.log(res.data)
    return axios.get('https://swapi.dev/api/peoples/2/')//contoh yng salah buat liat handling error
})
.then((res) => {
    console.log(res.data)
})
.catch(err => {
    console.error(err); 
    alert(err.message)
})


//penerapan AXIOS pada Async Await
const getPeople = async(id)=>{
   
    try {

        const request = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(request.data)
        
    } catch (error) {

        console.log(error.message)
        console.log(error.response)
    }
   
}

//kalo mau manggil yang asyn await bisa pake getPeople('1/2/3.dst')