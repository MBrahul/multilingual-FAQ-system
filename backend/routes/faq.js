const express = require("express");
const router = express.Router();
const tr = require("googletrans").default;
const cheerio = require("cheerio");
const FAQS = require("../models/FAQ");


const langs = ["hi","bn","gu","te","mr"];

// Function to translate text - using googletrans   -> npmjs package
const translateText = async (text, targetLang) => {
    try {
        const response = await tr(text, { from: "en", to: targetLang });
        if (response.hasCorrectedText) return response.correctedText;
        else return response.text;
    } catch (error) {
        return text;
    }
}


// Function to translate HTML while preserving formatting
const translateHTMLContent = async (html, targetLang) => {
    const $ = cheerio.load(html);

    const translatePromises = [];

    $("*").each((_, el) => {
        if ($(el).children().length === 0 && $(el).text().trim() !== "") {
            const originalText = $(el).text();
            translatePromises.push(
                translateText(originalText, targetLang).then((translatedText) => {
                    $(el).text(translatedText); // Replace original text with translated text
                })
            );
        }
    });

    await Promise.all(translatePromises);
    return $.html(); // Return translated HTML
}


// Api to add faq

router.post('/add', async (req, res) => {
    try {
        const { question, answer } = req.body;
        // If question or answer is empty 
        if (!question || !answer) {
            return res.json({
                status: false,
                msg: "empty fields"
            })
        }
        else {
            const data = {
                question:question,
                answer:answer,
                question_translations:{},
                answer_translations:{}
            }

            await Promise.all(langs.map(async (lang) => {
                data.question_translations[lang] = await translateText(question, lang);
                data.answer_translations[lang] = await translateHTMLContent(answer, lang);
            }));
            // console.log(data);
            const response = await FAQS.create(data);
            res.json({
                status: true,
                msg:"FAQ added successfully"
            });
        }
    } catch (error) {
        res.status(404).json({
            status: false,
            msg: error
        })
    }
})


router.get('/', async (req, res) => {
    try {
        // console.log(req.query.lang);
        if(req.query.lang && langs.includes(req.query.lang)){
            const data =  await FAQS.find().select(`question_translations.${req.query.lang}`);
            res.json({
                status:true,
                data:data
            })
        }
        else{
            const data = await FAQS.find().select('-question_translations -answer_translations')
            // console.log(data);
            return res.json({
                status:true,
                data:data
            })
        }
    } catch (error) {
        res.status(404).json({
            status: false,
            msg: error
        })
    }
})

// api to update faq
router.post('/update/:id', async (req, res) => {
    try {
        const { question, answer} = req.body;
        const {id} = req.params;
        // If question or answer is empty 
        if (!question || !answer || !id) {
            return res.json({
                status: false,
                msg: "empty fields"
            })
        }
        else {
            const faq = await FAQS.findById(id);
            if(!faq){
                return res.status(404).json({
                    status:false,
                    msg:"FAQ not found"
                })
            }
            const data = {
                question:question,
                answer:answer,
                question_translations:{},
                answer_translations:{}
            }

            await Promise.all(langs.map(async (lang) => {
                data.question_translations[lang] = await translateText(question, lang);
                data.answer_translations[lang] = await translateHTMLContent(answer, lang);
            }));
            // console.log(data);
            const response = await FAQS.findByIdAndUpdate(id,data);
            res.json({
                status: true,
                msg:"FAQ updated successfully"
            });
        }
    } catch (error) {
        res.status(404).json({
            status: false,
            msg: error
        })
    }
})


// api to delete faq
router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        // If question or answer is empty 
        if (!id) {
            return res.json({
                status: false,
                msg: "empty fields"
            })
        }
        else {
            const faq = await FAQS.findById(id);
            if(!faq){
                return res.status(404).json({
                    status:false,
                    msg:"FAQ not found"
                })
            }
            const response = await FAQS.findByIdAndDelete(id);
            res.json({
                status: true,
                msg:"FAQ deleted successfully"
            });
        }
    } catch (error) {
        res.status(404).json({
            status: false,
            msg: error
        })
    }
})



module.exports = router;
