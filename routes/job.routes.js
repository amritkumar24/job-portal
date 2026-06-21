import express from "express";
import {getHome, getJobs, getJobDetails} from "../controllers/job.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getHome);
router.get("/jobs",auth, getJobs);
router.get("/jobs/:id", auth, getJobDetails)

export default router;