import User from '../models/User';
import Notification from '../schemas/Notification';

class AppointmentController {
    async index(req, res) {
        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkUserProvider) {
            return res
                .status(401)
                .json({ error: 'Only providers can view notifications' });
        }

        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ reatedAt: 'desc' })
            .limit(20);

        return res.json(notifications);
    }
}

export default new AppointmentController();
