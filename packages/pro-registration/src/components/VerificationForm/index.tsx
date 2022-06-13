import React, { useEffect, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Radio, { ALIGN, TYPES } from '@eyewa/ui-components/Radio';
import RadioGroup from '@eyewa/ui-components/Radio/Styled/group';
import Button, { KIND, SHAPE, SIZE } from '@eyewa/ui-components/Button';
import { Spinner } from '@eyewa/ui-components/Loader';
import StyledSubTitle from '../Styled/SubTitle';
import InputBox from '../InputBox';
import { MOBILE_NUMBER_REGEX } from '../../constants/regex';
import {
  SectionContainer, Content, Header, SectionSummary, Title, CheckedIcon, Loader,
} from '../Styled';
import { BusinessTypeOptions } from '../../types';
import CheckedCircle from '../../icons/checkedCircle';

const BUSINESS_GROUP_NAME: string = 'business type';
const BUTTON_TEXT: string = 'Next';
interface Props {
  title: string;
  status: 'basicInfo' | 'addressInfo' | 'businessInfo' | 'fileUpload' | 'tncAccepted' | 'registrationComplete';
  name: string;
  businessType: string;
  onClick: (mobile: string, businessType: string) => any;
  email?: string;
  mobileNumber?: string;
  isLoading?: boolean;
}

const BusinessTypeCtn = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const UserVerificationView: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const {
    title,
    name,
    email,
    status,
    mobileNumber: mobile,
    businessType,
    isLoading,
    onClick,
  } = props;
  const [mobileNumber, setMobileNumber] = useState(mobile);
  const [businessValue, setBusinessValue] = useState(businessType);
  const [showContent, setShowContent] = useState(status === 'basicInfo');

  useEffect(() => {
    setShowContent(status === 'basicInfo');
  }, [status]);

  const businessTypeOptions: BusinessTypeOptions[] = [
    { label: 'Salons/Spas', value: 'Salon' },
    { label: 'Makeup Artist', value: 'Make Up Artist' },
    { label: 'Independent Beautician', value: 'Independent Beautician' },
    { label: 'Academy', value: 'Academy' },
    { label: 'Hair Stylist', value: 'Hair Stylist' },
  ];


  const onChange = (type: 'mobile' | 'business', updatedVal: string): void => {
    switch (type) {
      case 'mobile':
        setMobileNumber(updatedVal);
        break;
      case 'business':
        setBusinessValue(updatedVal);
        break;
      default:
        break;
    }
  };

  const isButtonDisabled = () => (!mobileNumber || !businessValue);

  const handleClick = () => {
    onClick(mobileNumber, businessValue);
  };

  const businessTypeLayout = () => (
    <BusinessTypeCtn>
      <StyledSubTitle>Business Type</StyledSubTitle>
      <RadioGroup
        name={BUSINESS_GROUP_NAME}
        value={businessValue}
        align={ALIGN.vertical}
        changeHandler={(value: string) => onChange('business', value)}
      >
        {businessTypeOptions?.map(
          (option: BusinessTypeOptions) => (<Radio value={option.value} label={option.label} key={`business_type_${option.label}`} type={TYPES.list} />),
        )}
      </RadioGroup>
    </BusinessTypeCtn>
  );

  return (
    <SectionContainer>
      {isLoading && (
        <Loader>
          <Spinner size="small" showLogo />
        </Loader>
      )}
      <Header border={showContent ? '2px' : '0px'}>
        <Title>
          {title}
        </Title>
        {(status !== 'basicInfo') && (
          <CheckedIcon>
            <CheckedCircle />
          </CheckedIcon>
        )}
        {(status !== 'basicInfo') && !showContent && (<Button kind="tertiary" size="small" shape="default" onClick={() => setShowContent(true)}>Edit</Button>)}
      </Header>
      {showContent && (
        <Content>
          <SectionSummary>{ `Hi ${name}, verify your details` }</SectionSummary>
          {email && (
            <InputBox
              disabled
              margin
              label="Email"
              value={email}
            />
          )}
          <InputBox
            isRequired
            regex={MOBILE_NUMBER_REGEX}
            label="Phone Number"
            value={mobileNumber || ''}
            disabled={!!mobile}
            onChange={(value) => onChange('mobile', value)}
          />
          {businessTypeLayout()}
          <Button
            kind={KIND.primary}
            shape={SHAPE.default}
            fullWidth
            size={SIZE.medium}
            disabled={isButtonDisabled()}
            onClick={handleClick}
          >
            {BUTTON_TEXT}
          </Button>
        </Content>
      )}
    </SectionContainer>
  );
};

export default UserVerificationView;
