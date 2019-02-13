import React from 'react';
import { ReactComponent as TherapyForeground } from './therapy-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const TherapyIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="0,230,175">
            <TherapyForeground />
        </AnimatedPinholeBackground>
    );
};

export default TherapyIcon;
