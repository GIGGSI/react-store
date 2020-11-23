import React, { useContext } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { UserContext } from '../context/user';

export default function Alert() {

  const { alert, hideAlert } = useContext(UserContext);

  let css = 'alert-container';
  if (alert.show) {
    css += ' alert-show';
    if (alert.type === 'danger') {
      css += ' alert-danger'
    }
  }

  return <div className={css}>
    <div className="alert">
      <p>
        {alert.show && alert.msg}
      </p>
      <button className="alert-close"
        onClick={hideAlert}>
      x  {AiOutlineCloseCircle}  
      </button>
    </div>
  </div>
}
