import React from 'react';
import ReactDOM from 'react-dom';
import DentistsIcon from './icons/DentistsIcon';
import PrimaryCareIcon from './icons/PrimaryCareIcon';
import TherapyIcon from './icons/TherapyIcon';
import ObgynIcon from './icons/ObgynIcon';
import EntIcon from './icons/EntIcon';
import DermatologyIcon from './icons/DermatologyIcon';
import OptometryIcon from './icons/OptometryIcon';
import GastroIcon from './icons/GastroIcon';

class Main extends React.Component {
  render() {
    return (
        <div>
            <div>
              <div>Has spacing issues</div>
              <EntIcon />
              <DentistsIcon />
              <div>Complete</div>
              <TherapyIcon />
              <PrimaryCareIcon />
              <GastroIcon />
              <OptometryIcon />
              <DermatologyIcon />
              <ObgynIcon />
            </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
  