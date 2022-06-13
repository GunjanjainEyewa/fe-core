import { styled } from '@eyewa/ui-components';

export const FloatingContainer: any = styled.div`
  position: relative;
  flex: auto;
`;

export const FloatingLabel: any = styled.label`
  position: absolute;
  color: ${({ theme }) => theme.colors.textSecondary}; 
  ${({ theme }) => theme.typography.bodyMedium};
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all; 
  -moz-transition: 0.2s ease all; 
  -webkit-transition: 0.2s ease all;
`;
