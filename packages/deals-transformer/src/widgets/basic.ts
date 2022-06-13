const transformBasicData = (widgetData: any) => {
  if (!widgetData) {
    return {};
  }

  const {
    isDesktop,
    parameters,
    positionInParent,
    trackingData,
    transaction_id: transactionId,
  } = widgetData;

  const newTrackingData = { ...trackingData };
  const {
    tile_id: trackingParameters,
  } = (parameters === undefined ? widgetData : parameters);
  newTrackingData.namespace2 = trackingParameters;
  newTrackingData.position2 = positionInParent;
  newTrackingData.transaction_id = transactionId;

  return {
    id: widgetData.wid || widgetData.id,
    widgetType: widgetData.wtype,
    positionInParent: widgetData.positionInParent,
    inventoryName: widgetData.inventoryName,
    params: {},
    children: [],
    inheritParams: {},
    trackingData: newTrackingData,
    isDesktop: !!isDesktop,
  };
};

export default transformBasicData;
