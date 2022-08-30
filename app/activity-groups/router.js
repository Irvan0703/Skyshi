const router = require('express').Router();
const activityController = require('./controller');

router.post('/activity-groups', activityController.store);
router.get('/activity-groups', activityController.index);
router.get('/activity-groups/:id', activityController.view);
router.put('/activity-groups/:id', activityController.update);
router.patch('/activity-groups/:id', activityController.update);
router.delete('/activity-groups/:id', activityController.destruct);

module.exports = router;