/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { createPortal } from 'react-dom';


interface PortalProps {
  children: React.ReactNode;
}

interface PortalState {
  isMounted: boolean;
}

let portalNode: HTMLElement;
const getPortalNode = (): HTMLElement => {
  if (portalNode !== undefined) {
    return portalNode;
  }

  const node = document.getElementById('portal-root');
  if (node === null) {
    throw new Error('Portal Element not Found');
  }
  portalNode = node;
  return portalNode;
};

class Portal extends React.PureComponent<PortalProps, PortalState> {
  public state = {
    isMounted: false,
  };

  // @ts-ignore - We are initializing these on ComponentDidMount to avoid SSR issuesƒ
  private portalNode: HTMLElement;

  // @ts-ignore
  private el: HTMLElement;

  public render() {
    const { isMounted } = this.state;
    const { children } = this.props;
    if (isMounted === false) {
      return null;
    }

    return createPortal(children, this.el);
  }

  public componentDidMount() {
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) {
      const { body } = document;
      const portalroot = document.createElement('div');
      portalroot.setAttribute('id', 'portal-root');
      body.append(portalroot);
    }
    this.el = document.createElement('div');
    this.portalNode = getPortalNode();
    this.portalNode.appendChild(this.el);
    this.setState({ isMounted: true });
  }

  public componentWillUnmount() {
    this.portalNode.removeChild(this.el);
  }
}

export default Portal;
