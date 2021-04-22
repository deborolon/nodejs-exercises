import * as fs from 'fs'

const readFile = async (req, res) => {
    try{
        let myFile = await fs.promises.readFile('../tp3/package.json', 'utf-8')
        let fileStr = JSON.stringify(JSON.parse(myFile))
        let fileObj = JSON.parse(myFile)
        
        let info = {
        contentStr: fileStr,
        contentObj: fileObj,
        size: myFile.length
        }
        
        console.log(info)
        
        await fs.promises.writeFile('../tp3/info.txt', JSON.stringify(info, null, 1))

        res.send(info)
    } catch(error){
        res.send(`Server error: ${error}`)
    }
}

export default readFile