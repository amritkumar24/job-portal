import express from "express";
import {getHome, getJobs, getJobDetails} from "../controllers/job.controller.js";

const router = express.Router();

router.get("/", getHome);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJobDetails)

export default router;