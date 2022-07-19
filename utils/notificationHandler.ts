import { NotificationProps } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

interface Notification extends NotificationProps {
  message: string;
  type: "success" | "error" | "info";
}

export const handleNotification = (notification: Notification) => {
  if (notification.type === "error") {
    showNotification({
      title: notification.title || "Error occurred",
      message: notification.message,
      color: "red",
    });
  } else if (notification.type === "success") {
    showNotification({
      title: notification.title || "Success",
      message: notification.message,
      color: "green",
    });
  } else if (notification.type === "info") {
    showNotification({
      title: notification.title,
      message: notification.message,
      color: "blue",
    });
  } else {
    showNotification({
      title: notification.title,
      message: notification.message,
      color: notification.color,
    });
  }
};
