const { Activity } = require('../models');

class ActivityRepository {
  async create(activityData) {
    return await Activity.create(activityData);
  }

  async update(id, activityData) {
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
