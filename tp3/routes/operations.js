const operations = (req, res) => {
    try{
        let { num1, num2, operacion} = req.query
        let resultado
        
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        const err = { error:
            {
                num1: {valor: num1, tipo: typeof num1},
                num2:{valor: num2, tipo: typeof num2},
                operacion: {valor: operacion, tipo: typeof operacion}
            }}

        if(isNaN(num1) || isNaN(num2)){
            res.send(err)
        }

        switch (operacion) {
            case 'suma':
                resultado = num1 + num2
                res.send({
                    num1: num1,
                    num2: num2,
                    operacion: operacion,
                    resultado: resultado.toString()
                })
                break;
            case 'resta':
                resultado = num1 - num2
                res.send({
                    num1: num1,
                    num2: num2,
                    operacion: operacion,
                    resultado: resultado.toString()
                })
                break;
            case 'multiplicacion':
                resultado = num1 * num2
                res.send({
                    num1: num1,
                    num2: num2,
                    operacion: operacion,
                    resultado: resultado.toString()
                })
                break;
            case 'division':
                resultado = num1 / num2
                res.send({
                    num1: num1,
                    num2: num2,
                    operacion: operacion,
                    resultado: resultado.toString()
                })
                break;         
            default:
                res.send(err)
                break;
        }
        
    } catch(error){
        res.send('Error: ' + error)
    }
}

export default operations