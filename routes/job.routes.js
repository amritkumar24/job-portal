import express from "express";
import {jobValidation} from "../middleware/form.validation.js";
import validateRequest from "../middleware/validation.middleware.js";
import {getHome, getJobs, getJobDetails, getNewJobForm, createJob, getEditJobForm, updateJob, deleteJob} from "../controllers/job.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getHome);
router.get("/jobs",auth, getJobs);
router.get("/jobs/new", auth, getNewJobForm);
router.post("/jobs/new", auth,jobValidation,validateRequest("create-job"), createJob);
router.get("/jobs/:id/edit", auth, getEditJobForm);
router.post("/jobs/:id/update", auth, updateJob);
router.post("/jobs/:id/delete", auth, deleteJob);
router.get("/jobs/:id", auth, getJobDetails);

export default router;