import React from 'react';
import { ReactComponent as ObgynForeground } from './obgyn-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const ObgynIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="255,159,169">
            <ObgynForeground />
        </AnimatedPinholeBackground>
    );
};

export default ObgynIcon;
