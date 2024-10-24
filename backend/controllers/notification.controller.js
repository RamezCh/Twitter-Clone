import Notification from "../models/notification.model";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    const notifications = await Notification.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate({ path: "from", select: "username profileImg" });
    await Notification.updateMany({ to: userId }, { read: true });
    res.status(200).json(notifications);
  } catch (err) {
    console.log("Error in getting notifications", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.deleteMany({ to: userId });
    res.status(200).json({ message: "Notifications deleted successfully" });
  } catch (err) {
    console.log("Error in deleting notifications", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const noitificationId = req.params.id;
    const userId = req.user._id;
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    if (notification.to.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete the Notification" });
    }
    await Notification.findByIdAndDelete(notificationId);
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (err) {
    console.log("Error in deleting notification", err);
    res.status(500).json({ message: "Server Error" });
  }
};
