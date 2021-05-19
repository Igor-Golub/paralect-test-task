import React from 'react';
import style from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return <div className={ style.preloaderWrapper }>
            <div className={ style.ldsDualRing } />
        </div>
}
