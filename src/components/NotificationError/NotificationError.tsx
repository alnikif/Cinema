import React, { useState, useEffect, useRef } from 'react';
import { notification } from 'antd';

type NotificationProps = {
  readonly title: string;
  readonly message: string | undefined;
};

export const NotificationError: React.FC<NotificationProps> = ({ message, title }) => {
  const isShownRef = useRef(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (message && !isShownRef.current) {
      setShowNotification(true);
      isShownRef.current = true;
    }
  }, [message]);

  const openNotification = () => {
    notification.error({
      message: title,
      description: message,
      className: 'custom-class',
      style: {
        width: 600,
      },
      duration: 3,
    });
  };

  useEffect(() => {
    if (showNotification) {
      openNotification();
    }
  }, [showNotification]);

  return null;
};
