import { Spin } from 'antd';
import { SpinSize } from 'antd/lib/spin';
import React from 'react';
export interface SpinnerProps {
  height?: number | string;
  loading?: boolean;
  size?: SpinSize;

  render?: any;
  children?: any;
}
export const Spinner = React.memo<SpinnerProps>(({ height, loading = true, size, render, children }) => {
  if (loading) {
    return (
      <Spin
        style={{
          width: '100%',
          height: height || '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#407c29',
        }}
        spinning={loading}
        size={size || 'default'}
      >
        {render || children}
      </Spin>
    );
  }

  return render || children;
});
