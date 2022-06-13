export interface FeatureProps {
  name?: string;
  status: boolean;
  userPercentage: number,
}

export const isEligible = (featureData: FeatureProps, run: number) => {
  const { status, userPercentage } = featureData || {};
  if (status && (run <= userPercentage)) {
    return true;
  }
  return false;
};
