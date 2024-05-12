import React, { forwardRef } from 'react';
import Toast from 'react-native-toast-message';

const ForwardedToast = forwardRef((props, ref) => {
  return <Toast {...props} ref={ref} />;
});

export default ForwardedToast;
