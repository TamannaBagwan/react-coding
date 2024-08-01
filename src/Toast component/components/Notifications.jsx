import React from "react";
import { GoCheckCircle } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { GoXCircle } from "react-icons/go";
const icons = {
  success: <GoCheckCircle /> ,
  info :   <GoInfo/>,
  warning: <GoAlert/>,
  error : <GoXCircle/>
};

const Notifications = ({ type = "info", message, onClose }) => {
  return (
    <div>
      <h1>Notification</h1>
      {icons[type]}
      {/* message */}
      {/* close button */}
    </div>
  );
};

export default Notifications;
