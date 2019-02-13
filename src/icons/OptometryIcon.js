import React from 'react';
import { ReactComponent as OptometryForeground } from './optometry-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const OptometryIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="255,240,75">
            <OptometryForeground />
        </AnimatedPinholeBackground>
    );
};

export default OptometryIcon;
