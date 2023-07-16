// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];



 var fs = require('fs')

class Controller {
    async averagefinder(req) {
        try {
            let number = req.body;
            const Data = fs.readFileSync('./numbers.txt',
                { encoding: 'utf8', flag: 'r' });
            if (Data === "") {
                let newdata = `${number}`
                fs.writeFileSync("./numbers.txt", newdata)
            }
            else if (Data != "") {
                let newdata = `${Data},${number}`
                fs.writeFileSync("./numbers.txt", newdata)
            }
            const DatA = await fs.readFileSync('./numbers.txt',
                { encoding: 'utf8', flag: 'r' });

            let Numbers = DatA.split(',').map(function (item) {
                return parseInt(item, 10);
            });
   
            let sum = Numbers.reduce((a, b) => a + b, 0)
            let average = sum / Numbers.length
            
            return res.status(200).send({
               Average: average,
               message: "average calculated ",
      });
        } catch (err) {
            return res.status(400).send(error.message);
        }
    }
}

