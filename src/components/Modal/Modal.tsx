import React from 'react';
import { createPortal } from 'react-dom';

export const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return createPortal(<div className='modal'>{children}</div>, document.getElementById('root')!);
};
