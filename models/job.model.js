export default class JobModel{
    constructor(id, title, company, location, recruiterId){
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.recruiterId = recruiterId;
    }

    static getJobs(){
        return jobs;
    }

    static getJobDetails(id){
        return jobs.find((job) => job.id == id);
    }

    static addJob(job){
        jobs.push(job);
    }

    static updateJob(id, updatedJob){
        const index = jobs.findIndex(
            (job) => job.id === id
        );

        jobs[index] = {
            ...jobs[index],
            ...updatedJob
        }
    }

    static deleteJob(id){
        jobs = jobs.filter(
            (job) => job.id !== id
        )
    }

    static getJobByRecruiterId(recruiterId){
        return jobs.filter((job) => job.recruiterId === recruiterId);
    }
}

let jobs = [
    new JobModel(
        1,
        "Node.js Developer",
        "Google",
        "Gurugram"
    ),
    new JobModel(
        2,
        "React Developer",
        "Microsoft",
        "Banglore"
    )
];