import React, { FormEvent, useState, useEffect } from 'react';
import { emailIsValid } from '../../utils/noifyMe';
import { pushNotifyMe } from '../../utils/noifyMe/trackingEvents';
import { NotifyMeWrapperProps } from '../../types/notifyMe';
import { NOT_EMAIL_ERROR } from '../../constant/notifyMe';
import { noop } from '../../constant';


function NotifyMe({
  offerPrice,
  brandName,
  productId,
  productName,
  primaryCategories,
  user,
  sendNotifyMe,
  isRegisteredViaMobile,
  children,
  handleCallback = noop,
  videoId,
  pageLocation,
  offerId,
  offerMessage,
}: NotifyMeWrapperProps) {
  const userEmail = user?.email;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if ((isRegisteredViaMobile) && (!isRegisteredViaMobile(userEmail))) {
      setEmail(userEmail);
    }
  }, [isRegisteredViaMobile, userEmail]);

  const handleFormSubmit = async (formSubmitEvent: FormEvent) => {
    formSubmitEvent.preventDefault();
    if (!sendNotifyMe) {
      return;
    }
    if (!email || error) {
      setError(NOT_EMAIL_ERROR);
      return;
    }
    const { data } = await sendNotifyMe({
      email,
      productId,
      variantName: productName,
      offerPrice,
      brandName,
    });
    if (data) {
      handleCallback();
      pushNotifyMe({
        productId,
        productName,
        offerPrice,
        brandName,
        primaryCategories,
        videoId,
        pageLocation,
        offerId,
        offerMessage,
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    const isValid = emailIsValid(value);
    if (!isValid && !error) {
      setError(NOT_EMAIL_ERROR);
      return;
    }
    if (isValid && error) {
      setError('');
    }
  };
  return children ? children({
    handleFormSubmit,
    handleChange,
    email,
    error,
  }) : null;
}

export default NotifyMe;
