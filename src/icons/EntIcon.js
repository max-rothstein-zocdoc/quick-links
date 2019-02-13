import React from 'react';
import { ReactComponent as EntForeground } from './ent-foreground.svg';
import AnimatedPinholeBackground from './AnimatedPinholeBackground';

const EntIcon = () => {
    return (
        <AnimatedPinholeBackground rgb="0,215,250">
            <EntForeground />
        </AnimatedPinholeBackground>
    );
};

export default EntIcon;
