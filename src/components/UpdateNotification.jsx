import React from 'react';

const UpdateNotification = ({ onUpdate }) => {
  return (
    <div className="update-notification">
      <p>Nova versão disponível!</p>
      <button onClick={onUpdate}>Atualizar</button>
    </div>
  );
};

export default UpdateNotification; 