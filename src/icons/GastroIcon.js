import React from 'react';
import { ReactComponent as GastroForeground } from './gastro-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const GastroIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="195,130,255">
            <GastroForeground />
        </AnimatedPinholeBackground>
    );
};

export default GastroIcon;
