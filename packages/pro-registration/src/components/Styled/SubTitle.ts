import { styled } from '@nykaa/ui-components';

const SubTitle: any = styled.div`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default SubTitle;
