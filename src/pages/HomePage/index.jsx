import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [tshirtType, setTshirtType] = useState('normalShortSleeve');
  const [tshirtColor, setTshirtColor] = useState('yellow');
  const [tshirtPrint, setTshirtPrint] = useState('')

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={tshirtType} color={tshirtColor} print={tshirtPrint} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup onType={setTshirtType} onColor={setTshirtColor} onPrint={setTshirtPrint} />
        </div>
      </div>
    </div>
  );
};
