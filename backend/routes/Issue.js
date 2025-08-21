import express from "express";
import { createIssue ,getIssues,getAllIssues, updateIssueStatus} from "../controllers/Issue.js";
import Auth from "../middlewares/Auth.js";


const router = express.Router();


router.post("/createIssue", Auth, createIssue);
router.get("/getIssues",Auth,getIssues);
router.get("/getAllIssues",getAllIssues);
router.put("/:issueId",updateIssueStatus)

export default router;
