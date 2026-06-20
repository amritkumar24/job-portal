export default class JobModel{
    constructor(id, title, company, location){
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
    }

    static getJobs(){
        return jobs;
    }

    static getJobDetails(id){
        return jobs.find((job) => job.id == id);
    }
}

const jobs = [
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