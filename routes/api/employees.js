const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../../controllers/employeesController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .get(getAllEmployees)
  .post(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.Editor), createNewEmployee)
  .put(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.Editor), updateEmployee)
  .delete(verifyRoles(ROLES_LIST.ADMIN), deleteEmployee);

router.route("/:id").get(getEmployee);

module.exports = router;
