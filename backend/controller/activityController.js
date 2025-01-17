const activityRepository = require('../repository/activityRepository');

class ActivityController {
  async create(req, res) {
    try {
      const activity = await activityRepository.create(req.body);
      res.status(201).json({ activity, message: 'Atividade cadastrada com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      await activityRepository.update(req.params.id, req.body);
      res.status(200).json({ message: 'Atividade atualizada com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await activityRepository.delete(req.params.id);
      res.status(200).json({ message: 'Atividade deletada com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const activities = await activityRepository.findAll();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const activity = await activityRepository.findById(req.params.id);
      if (activity) {
        res.status(200).json(activity);
      } else {
        res.status(404).json({ message: 'Atividade não encontrada :(' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ActivityController();
