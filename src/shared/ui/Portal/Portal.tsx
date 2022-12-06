import React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
  const { element = document.body, children } = props;
  return createPortal(children, element);
};

export default Portal;
