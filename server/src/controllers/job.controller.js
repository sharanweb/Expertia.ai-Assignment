const express = require("express");
const Job = require("../models/job.model");
const router = express.Router();

//get all the jobs for checking only
router.get("/get", async(req,res)=>{
    try {
        const job = await Job.find().lean().exec();
        return res.status(201).send({job:job});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/:id", async(req,res)=>{
    const job = await Job.findById(req.params.id).lean().exec();
    return res.status(201).send({job:job})
})



router.get("", async (req, res) => {
    try {
        let page = req.query.page || 1
        let pagesize = req.query.pagesize || 5
        let role = req.query.role || "all"
        let experience = req.query.experience || "all";
        let location = req.query.location || "all";
        let ctc = req.query.ctc || 0;
        const skip = (page - 1) * pagesize;

//filter by role only
        if (role !== "all") {
            const job = await Job.find({ role: { $eq: role } }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ role: { $eq: role } }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }
        //filter by location only
        else if (location !== "all") {
            const job = await Job.find({ location: { $eq: location } }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ location: { $eq: location } }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }
        //filter by experience only
        else if (experience !== "all") {
            const job = await Job.find({ experience: { $eq: experience } }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ experience: { $eq: experience } }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }
        //filter by ctc greater than something 
        else if (ctc !== 0) {
            const job = await Job.find({ ctc: { $gte: ctc } }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ ctc: { $gte: ctc } }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (ctc !== 0 && location !== "all") {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (role !== "all" && location !== "all") {
            const job = await Job.find({ $and: [{ role: { $eq: role } }, { location: { $eq: location } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ role: { $eq: role } }, { location: { $eq: location } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (ctc !== 0 && role !== "all") {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { role: { $eq: role } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { role: { $eq: role } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (experience !== "all" && role !== "all") {
            const job = await Job.find({ $and: [{ role: { $eq: role } }, { experience: { $eq: experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ role: { $eq: role } }, { experience: { $eq: experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (experience !== "all" && location !== "all") {
            const job = await Job.find({ $and: [{ location: { $eq: location } }, { experience: { $eq: experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ location: { $eq: location } }, { experience: { $eq: experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (experience !== "all" && ctc !== 0) {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { experience: { $eq: experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { experience: { $eq: experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (ctc !== 0 && location !== "all" && role !== "all") {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location  }}, { role: { $eq: role } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location } }, { role: { $eq: role } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }


        else if (ctc !== 0 && experience !== "all" && role !== "all") {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { experience: { $eq: experience } }, { role: {$eq: role }}] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { experience: { $eq: experience } }, { role: {$eq: role }}] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (ctc !== 0 && location !== "all" && experience !== "all") {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location } }, { experience: { $eq: experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { location: { $eq: location } }, { experience: { $eq: experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }


        else if (role !== "all" && location !== "all" && experience !== "all") {
            const job = await Job.find({ $and: [{ role: { $eq: role } }, { location: { $eq: location }}, { experience: { $eq:  experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ role: { $eq: role } }, { location: { $eq: location }}, { experience: { $eq:  experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }

        else if (role !== "all" && location !== "all" && experience !== "all" && ctc !== 0) {
            const job = await Job.find({ $and: [{ ctc: { $gte: ctc } }, { role: { $eq: role } }, { location: { $eq: location } }, { experience: { $eq: experience } }] }).skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find({ $and: [{ ctc: { $gte: ctc } }, { role: { $eq: role } }, { location: { $eq: location } }, { experience: { $eq: experience } }] }).countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }


        else {
            const job = await Job.find().skip(skip).limit(pagesize).lean().exec();
            const totalPages = Math.ceil(await Job.find().countDocuments()) / pagesize;
            return res.status(200).send({ job, totalPages });
        }
    }
    catch (error) {
        res.send(error)
    }
})


module.exports = router;