const greeting = (req, res) => {
    try{
        let time = new Date()
        let hours = time.getHours()
        let minutes = time.getMinutes()

        if(hours >= 6 && hours <= 12){
            res.send(`<h1 style="color:#FAE02E;
                        font-size:72px;
                        margin: 40px;">
                        ¡Buenos Días!
                        </h1>`)
        } else if(hours >= 13 && hours <= 19) {
            res.send(`<h1 style="color:#FA8103;
                        font-size:72px;
                        margin: 40px;">
                        ¡Buenas Tardes!
                        </h1>`)
        } else {
            res.send(`<h1 style="color:#3205E3;
                    font-size:72px;
                    margin: 40px;">
                    ¡Buenas Noches!
                    </h1>`)
        }
    } catch (error){
        res.send(`Server error: ${error}`)
    }
}

export default greeting