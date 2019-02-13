import React from 'react';
import { ReactComponent as DermatologyForeground } from './dermatology-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const DermatologyIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="255,100,115">
            <DermatologyForeground />
        </AnimatedPinholeBackground>
    );
};

export default DermatologyIcon;
