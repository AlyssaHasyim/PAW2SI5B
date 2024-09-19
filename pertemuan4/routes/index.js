const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const router = express.Router();

router.use("/", (req, res)=>{
    // format data json
    const data ={
        caption: "Mahasiswa",
        layout: "layout/main-layout",
        data :[
            {
                npm : "2226240095",
                nama : "Alyssa",
            },
            {
                npm : "2226240021",
                nama : "Acen",
            },
            {
                npm : "2226240172",
                nama : "Geri",
            },
        ]
    }
    res.render("index", data);
    //menuju ke views/index.ejs
});

module.exports = router;