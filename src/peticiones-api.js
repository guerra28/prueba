const axios=require('axios').default


const url='https://jsonplaceholder.typicode.com/users'

module.exports=async function getUser(){
    try {
      const response=await axios.get(url)
      console.log(response)
      return response.data  
    } catch (error) {
        
    }
}


