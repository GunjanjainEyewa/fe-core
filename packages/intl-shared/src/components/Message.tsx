import React from 'react';
import { Message as MessageProps } from '../types';
import { useStringFromId, useIntl } from '../hooks';


const Message = (props: MessageProps) => {
  // classname only work with tagname
  const { textComponent } = useIntl();
  const {
    id,
    values,
    className,
    defaultMessage,
    tagName: Component = textComponent,
  } = props;
  const message = useStringFromId(id, defaultMessage, values);
  if (Component) {
    return React.createElement(Component, { className }, message);
  }
  return <>{message}</>;
};

export default Message;
