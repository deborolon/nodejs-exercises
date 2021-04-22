const random = (req, res) => {
    try{

        let i = 0;
        let obj = {}

        do{
            i++;
            let random = Math.floor(Math.random() * 20) + 1
    
            if(obj.hasOwnProperty(random)){
                obj[random] = obj[random] +1
            } else{
                obj[random] = 1
            }
        } while(i<10000)
        res.send(obj)
    } catch(error){
        res.send(`Server error: ${error}`)
    }
}

export default random