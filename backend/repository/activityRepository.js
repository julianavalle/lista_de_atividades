const { Activity } = require('../models');

class ActivityRepository {
  async create(activityData) {
    if (activityData.completed) {
      activityData.completedAt = new Date();
    }
    return await Activity.create(activityData);
  }

  async update(id, activityData) {
    if (activityData.completed) {
      activityData.completedAt = new Date();
    }
    return await Activity.update(activityData, { where: { id } });
  }

  async delete(id) {
    return await Activity.destroy({ where: { id } });
  }

  async findAll() {
    return await Activity.findAll();
  }

  async findById(id) {
    return await Activity.findByPk(id);
  }
}

module.exports = new ActivityRepository();
