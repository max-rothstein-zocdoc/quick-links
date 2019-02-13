import React from 'react';
import { ReactComponent as PrimaryCareForeground } from './primarycare-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const PrimaryCareIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="0,215,250">
            <PrimaryCareForeground />
        </AnimatedPinholeBackground>
    );
};

export default PrimaryCareIcon;
