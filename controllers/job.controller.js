import JobModel from "../models/job.model.js";

export const getHome = (req, res) => {
    const title = "Welcome to job Portal";
    res.render("home", {
        title
    });
};

export const getJobs = (req, res) => {
    console.log(req.session);
    const jobs = JobModel.getJobs();

    res.render("jobs", {
        jobs
    });
};

export const getJobDetails = (req, res) => {
    const id = req.params.id;

    const job = JobModel.getJobDetails(id);

    res.render("jobDetails", {
        job
    })
};

