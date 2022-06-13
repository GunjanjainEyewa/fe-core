import { ReactElement } from 'react';


interface BelowTheFoldContentProps {
  render: () => ReactElement;
  loading: () => ReactElement;
}

function BelowTheFoldContent({
  render,
  loading,
}: BelowTheFoldContentProps) {
  if (__SERVER__) {
    return loading();
  }
  return render();
}

export default BelowTheFoldContent;
