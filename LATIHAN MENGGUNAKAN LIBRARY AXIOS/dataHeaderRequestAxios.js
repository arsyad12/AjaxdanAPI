const getJokes = async()=>{
 try {
    
 
    const config = {
      
        headers:{
         
            Accept : 'application/json',
       
        },
    }

    const request = await axios.get('https://icanhazdadjoke.com/',config)
    return request.data.joke; //saat ingin menggunakan data hasil request harus di return

} catch (error) {
    console.log(error)
}

}


const generateJokes = document.querySelector('#btn-jokes')
const listJokes = document.querySelector('#ul-jokes')


const addJokes = async()=>{
    const jokeText = await getJokes();
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    listJokes.append(newLI)
}



generateJokes.addEventListener('click',addJokes)
