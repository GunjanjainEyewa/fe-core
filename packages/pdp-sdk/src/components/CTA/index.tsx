import React, { memo, useState } from 'react';
import Button from '@nykaa/ui-components/Button';
import { useDispatch } from 'react-redux';
import { styled } from '@nykaa/ui-components';
import { logger } from '@nykaa/logger';

import { callAddToCart } from '../../store/services';
import { CTAInfo } from '../../types/transformer';
import { useToastContext, TOASTER_TYPES } from '../Toast';

const BUTTON_ADD_TO_CART_TEXT = 'Add to bag';
const BUTTON_VIEW_BAG_TEXT = 'View bag';

const Container = styled.div`
    position: sticky;
    padding: ${({ theme }) => theme.spacing.spacing40};
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background-color: ${({ theme }) => theme.colors.white};
`;

const SecondaryButton = styled(Button)`
    background: #fd7685;
    color: ${({ theme }) => theme.colors.white};
`;

export interface Props{
  data: CTAInfo
}

function CTA({ data }: Props) {
  const [showAddToCart, setShowAddToCart] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  const dispatch = useDispatch();
  const { showToast } = useToastContext();

  const clickHandlerViewCart = () => {
    window.location.href = '/v2/checkout';
  };

  const {
    productId, buttonText, domain, shouldShowViewBag,
  } = data;

  const clickHandler = () => {
    setInProgress(true);

    callAddToCart({
      productId, quantity: 1, deviceType: 'MSITE', domain,
    })
      .then((res) => {
        setInProgress(false);
        if (shouldShowViewBag) {
          setShowAddToCart(false);
        }

        dispatch({ type: 'app/update_cart_count', payload: res.data.quantity });
        showToast({ message: res.message, type: TOASTER_TYPES.SUCCESS, hideTime: 3000 });
      })
      .catch((err) => {
        setInProgress(false);
        showToast({ message: err.message, type: TOASTER_TYPES.ERROR, hideTime: 3000 });
        logger.error(err.message, 'Add to Cart Failure', {
          tags: {
            productId,
            module: 'ADD_TO_CART',
          },
        });
      });
  };

  return (
    <Container>
      {showAddToCart && (
        <Button
          disabled={inProgress}
          kind="primary"
          size="large"
          shape="default"
          fullWidth
          onClick={clickHandler}
        >
          {buttonText || BUTTON_ADD_TO_CART_TEXT}
        </Button>
      )}

      {showAddToCart === false && (
        <SecondaryButton
          disabled={inProgress}
          kind="secondary"
          size="large"
          shape="default"
          fullWidth
          onClick={clickHandlerViewCart}
        >
          {BUTTON_VIEW_BAG_TEXT}
        </SecondaryButton>
      )}
    </Container>
  );
}

export default memo(CTA);
