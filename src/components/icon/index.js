import React from 'react';

import '../../Iconfont/iconfont.css';
import './index.css';

function Icon({ iconType, iconClassName, fontSize = 16 }) {
    if (iconType) {
        return (
            <div className={'icon-' + iconType + '-background ' + iconClassName}>
                <i className={'iconfont icon-' + iconType} style={{ fontSize: `${fontSize}px` }}></i>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Icon;
