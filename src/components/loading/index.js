import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

function Loading({ isLoading }) {
    return (
        <ActivityIndicator
            toast
            text="Loading..."
            animating={isLoading}
        />
    );
}

export default Loading;
