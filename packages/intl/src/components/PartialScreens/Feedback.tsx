import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@nykaa/ui-components';

import { FEEDBACK_MODAL_VISIBLE_PIXEL } from '@nykaa/intl-shared/constants';
import { feedbackClick, shownFeedback } from '@nykaa/intl-shared/utils/trackingEvents';
import { closeFeedback } from '@nykaa/intl-shared/utils/trackingEvents';
import { getCookie, setCookie } from '@nykaa/utils/cookies';
import { HAS_SEEN_FEEDBACK } from '@nykaa/intl-shared/constants/cookies';
import Star from '../Icons/Star';
import Title from './Title';
import View from './View';
import { SIX_MONTHS_COOKIE_AGE } from '../../constants';


interface Props {
  lang: string,
  customTitle: string,
  customClose: string
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const StarWrapper = styled.div``;
function Feedback({ lang, customTitle, customClose }: Props) {
  const [showModal, setShowModal] = useState(false);
  const handleStarClick = (rating:number) => {
    feedbackClick({ rating, lang });
    setCookie(HAS_SEEN_FEEDBACK, true, SIX_MONTHS_COOKIE_AGE);
    setShowModal(false);
  };
  const ModalScroll = useCallback(() => {
    const removeListenerAndOpenModal = window.scrollY > FEEDBACK_MODAL_VISIBLE_PIXEL;
    if (removeListenerAndOpenModal) {
      setShowModal(true);
    }
  }, []);
  const removeEventListener = useCallback(() => window.removeEventListener('scroll', ModalScroll), [ModalScroll]);
  useEffect(() => {
    const hasSeenFeedback = getCookie(HAS_SEEN_FEEDBACK);
    if (!showModal && !hasSeenFeedback) {
      window.addEventListener('scroll', ModalScroll);
    }
    return () => removeEventListener();
  }, [ModalScroll, showModal, removeEventListener]);
  const handleClose = () => {
    removeEventListener();
    setShowModal(false);
    setCookie(HAS_SEEN_FEEDBACK, true, SIX_MONTHS_COOKIE_AGE);
    // tracking
    closeFeedback();
  };

  useEffect(() => {
    const hasSeenFeedback = getCookie(HAS_SEEN_FEEDBACK);
    if (showModal && !hasSeenFeedback) {
      shownFeedback({ lang, status: 1 });
    }
  }, [showModal]);

  const stars = new Array(5).fill('');

  const printStars = () => stars?.map((star, index) => (
    <StarWrapper key={`star${index + 1}`} onClick={() => handleStarClick(index + 1)}>
      <Star />
    </StarWrapper>
  ));

  return (
    <View showModal={showModal} onClose={() => handleClose()} closeText={customClose}>
      <Title text={customTitle} />
      <Wrapper>
        { printStars() }
      </Wrapper>
    </View>
  );
}

export default Feedback;
