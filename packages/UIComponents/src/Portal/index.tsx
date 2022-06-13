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
    // const elem = document.createElement('div');
    // elem.id = 'portal-root';
    // node = elem;
    throw new Error('Portal Element not Found');
  }
  portalNode = node;
  return portalNode;
};

class Portal extends React.PureComponent<PortalProps, PortalState> {
  // @ts-ignore - We are initializing these on ComponentDidMount to avoid SSR issuesƒ
  private portalNode: HTMLElement;

  // @ts-ignore
  private el: HTMLElement;

  constructor(props: PortalProps) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  // componentWillMount() {

  // }

  componentDidMount() {
    const node = document.getElementById('portal-root');
    if (!node) {
      const elem = document.createElement('div');
      elem.id = 'portal-root';
      document.body.appendChild(elem);
    }
    this.el = document.createElement('div');
    this.portalNode = getPortalNode();
    this.portalNode.appendChild(this.el);
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    if (this.portalNode) {
      this.portalNode.removeChild(this.el);
    }
  }

  public render() {
    const { isMounted } = this.state;
    const { children } = this.props;
    if (isMounted === false) {
      return null;
    }

    return createPortal(children, this.el);
  }
}

export default Portal;
