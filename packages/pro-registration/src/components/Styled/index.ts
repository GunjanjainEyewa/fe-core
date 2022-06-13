import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { styled } from '@nykaa/ui-components';

const SectionSummary: any = styled.div`
  ${({ theme }) => theme.typography.titleLarge};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const SectionContainer: any = styled.section`
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => theme.colors.surface30};
  border-left: none;
  border-right: none;
  position: relative;
`;

const Header: any = styled.div<{ border: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing40} 0;
  margin: 0 ${({ theme }) => theme.spacing.spacing80};
  border-bottom: ${({ border }) => border} solid ${({ theme }) => theme.colors.primary};
`;

const Content: any = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.spacing80};
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const Title: any = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }) => theme.colors.surfaceInverse10};
`;

const ErrorMessage: any = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  ${({ theme }) => theme.typography.bodySmall};
  margin: ${({ theme }) => theme.spacing.spacing20} 0;
`;

const CheckedIcon: any = styled.i`
  margin-left: ${({ theme }) => theme.spacing.spacing20};
  flex: auto;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Loader: any = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: ${({ theme }) => hexToRgb(theme.colors.surface20, 0.7)};
`;

export {
  SectionSummary, SectionContainer, Header, Content, Title, ErrorMessage, CheckedIcon, Loader,
};
