const express = require('express')
const router = express.Router()
const AwaitingDoc = require("../models/AwaitingDoc")


router.post("/opd_details", async(req, res) =>{
    const patientVitals = req.body
    console.log(patientVitals)
    await AwaitingDoc.create(patientVitals)
    req.flash('success_msg', 'Patient details submitted successfully!!');
    res.render('nurse')
})

router.get("/fetch_patient", async(req, res) => {
    const patients  = await AwaitingDoc.countDocuments()
    console.log(patients)
    return await res.json({msg: patients})
     
})

router.get("/patient_details", (req, res)=> {
    AwaitingDoc.findOne({}, {}, {sort: {'created_at': -1}}, function(err, patient){
        console.log(patient)
        res.render("doctors", {patient})
    })
})

module.exports = router
