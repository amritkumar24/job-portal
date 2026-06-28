import JobModel from "../models/job.model.js";

export const getHome = (req, res) => {
    const title = "Welcome to job Portal";
    res.render("home", {
        title
    });
};

export const getJobs = (req, res) => {
    
    const recruiterId = req.session.userId;

    const jobs = JobModel.getJobByRecruiterId(recruiterId) ;

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

export const getNewJobForm = (req, res) => {
    res.render("create-job", {
        errors: [],
        oldData: '',
    });
}

export const createJob = (req, res) => {
    const {title, company, location} = req.body;

    const jobs = JobModel.getJobs();

    const newJob = new JobModel(
        jobs.length + 1,
        title,
        company,
        location,
        req.session.userId
    );

    JobModel.addJob(newJob);

    res.redirect("/jobs");
}

export const getEditJobForm = (req, res) => {
    const id = Number(req.params.id);

    const job = JobModel.getJobDetails(id);

    if(job.recruiterId !== req.session.userId){
        return res.redirect("/jobs");
    }

    res.render("edit-job", {job});
}

export const updateJob = (req, res) => {
    const id = Number(req.params.id);

    const job = JobModel.getJobDetails(id);

    if(job.recruiterId !== req.session.userId){
        return res.redirect("/jobs");
    }

    const {title, company, location} = req.body;

    JobModel.updateJob(id, {
        title,
        company,
        location
    });

    res.redirect("/jobs");
}

export const deleteJob = (req, res) => {
    const id = Number(req.params.id);

    const job = JobModel.getJobDetails(id);

    if(job.recruiterId !== req.session.userId){
        return res.redirect("/jobs");
    }

    JobModel.deleteJob(id);

    res.redirect("/jobs");
}

