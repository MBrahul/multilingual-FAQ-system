const tr = require("googletrans").default;

const translate =  async (text, lang) => {
   await tr(text, {from:"en",to:lang})
        .then(function (result) {
            // console.log(result.text);
            return result.text;
            //console.log(result.text); // ik spreek Engels
            // console.log(result.hasCorrectedText); // true
            // console.log(result.correctedText); // I [speak] English
            // console.log(result.src); // en
        })
        .catch(function (error) {
            console.log(error);
        });
}
module.exports = translate;