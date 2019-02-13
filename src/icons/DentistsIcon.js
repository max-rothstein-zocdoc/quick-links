import React from 'react';
import { ReactComponent as DentistsForeground } from './dentists-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const DentistsIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="215,177,255">
            <DentistsForeground />
        </AnimatedPinholeBackground>
    );
};

export default DentistsIcon;
