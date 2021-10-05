const express = require('express')
const router = express.Router()
const AwaitingDoc = require("../models/AwaitingDoc")
const SeenDoc = require("../models/SeenDoc")
const path = require("path")


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
let idd
router.get("/patient_details", (req, res)=> {
    AwaitingDoc.findOne({}, {}, {sort: {'created_at': -1}}, function(err, patient){
        if(patient){
            idd = patient._id
           return res.render("doctors", {patient})
        }
        return res.sendFile(path.resolve('./views/doctor.html'))
    }).catch(e=> console.log(e) )
})

router.post("/doctors_report", async(req, res)=> {
    let msg = req.body
    await SeenDoc.create(msg)
    await AwaitingDoc.deleteOne({ user: idd }, function(err) {
        if (!err) {
            return res.sendFile(path.resolve('./views/doctor.html'))
        }
        else {
            console.log("error")
                }
    })
})



router.get("/conduct_lab", (req, res)=> {
    SeenDoc.findOne({conductLab: "on"}, {}, {sort: {'created_at': -1}}, function(err, patient){
        if(patient){
           return res.render("labForm", {patient})
        }
        return res.render("labTech")
    }).catch(e=> console.log(e) )
})

router.post("/update_patient_details", async(req,res)=> {
    let filter, update;

    await SeenDoc.findOne({conductLab: "on"}, {}, {sort: {'created_at': -1}}, async function(err, patient){
        if(patient){
             filter = { _id: patient._id};
             update = { labDetails: req.body.labDetails}; 
            // `doc` is the document _before_ `update` was applied
        }
    })
    let doc = await SeenDoc.findOneAndUpdate(filter, update);

    return res.render("labTech")
})


router.get("/lab_results", async(req, res)=> {
    await SeenDoc.findOne({labDetails: !undefined}, {}, {sort: {'created_at': -1}},  function(err, patient){
        if(patient){
            return res.render("doctors", {patient})
        }
    })
    return res.sendFile(path.resolve('./views/doctor.html'))
})

module.exports = router
