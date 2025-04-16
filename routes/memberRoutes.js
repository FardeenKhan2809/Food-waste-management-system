// routes/MemberRoutes.js
const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/memberController');

router.post('/api/member-table', MemberController.createMember);

router.get('/api/members', MemberController.getMembers);


router.put('/api/members/:id', MemberController.updateMember);

router.delete('/api/members/:id',MemberController.deleteMember);

router.get('/api/Member/:id',MemberController.getMemberData);


module.exports = router;
