import React from 'react';
import { styled } from '@eyewa/ui-components';
import { UserInfoProps } from '../../../types/CheckboxWidget';
import getDisplayValues from '../../../helpers';


const Wrapper = styled.div`
  padding: 0px 16px 16px 18px;
`;

const ColorWrapper = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: #001325;
  display: inline;
  padding-bottom: 8px;
  text-transform: capitalize;
`;
const SkinTone = styled.i`
  background: ${(props) => props.color};
  border-radius: 4px;
  width: 24.91px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-block;
`;

const ContentType = styled.strong`
  margin-right: 3px;
`;

const ContentTypeWrapper = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: #001325;
  display: inline;
  text-transform: capitalize;
  &::before {
    color: rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: inline;
    margin: 0 16px 0 8px;
    content: ' ';
  }
`;


interface BasicInfoProps {
  userInfo: UserInfoProps[]
}
// for image selector we need to show color and for others we need to show selected values
// coming in the list
const BasicInfo = (props: BasicInfoProps) => {
  const { userInfo } = props;
  return (
    <Wrapper>
      { userInfo && userInfo.map((userData) => {
        if (userData && userData.values && (userData.values.length > 0)) {
          if (userData.type === 'singleImage') {
            return (
              <ColorWrapper>
                <SkinTone color={userData.values[0].color} />
                {` ${userData.displayText}`}
              </ColorWrapper>
            );
          }
          return (
            <ContentTypeWrapper>
              <ContentType>
                {` ${getDisplayValues(userData.values)}`}
              </ContentType>
              {userData.displayText}
            </ContentTypeWrapper>
          );
        }
        return null;
      })}
    </Wrapper>
  );
};

export default BasicInfo;
