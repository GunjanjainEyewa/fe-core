declare global {
  interface Window {
    s:any;
  }
}

const getImpressionLoggingEndpoint = () => {
  const { IMPRESSION_LOG_DOMAIN } = process.env;
  return `${IMPRESSION_LOG_DOMAIN}/log_data/log`;
};

const getCommonFieldsForImpressions = (deviceType: string, logger: any) => {
  try {
    return {
      platform: deviceType,
      vertical: window.location.host,
      app_version: '',
      device_model: navigator.userAgent || '',
      session_id: '',
      mc_id: (window.s && window.s.marketingCloudVisitorID) || '',
      timestamp: (new Date().getTime() / 1000),
      source: 'web-sdk',
    };
  } catch (err) {
    logger.error(err, 'Error getting common Fields');
    return {};
  }
};


const handleImpressions = async (
  impressions: any[],
  customerId: string = '',
  deviceType: string = '',
  logger: any,
  ApiHelper: any,
) => {
  const updatedImpressions = impressions.map((impression: any) => {
    const newImpression = impression;

    delete newImpression.pageName;
    delete newImpression.pageId;
    delete newImpression.sessionId;

    if (!newImpression.timestamp) {
      newImpression.timestamp = ((+new Date()) / 1000);
    }

    return newImpression;
  });

  const data = {
    events: updatedImpressions,
    common_fields: {
      ...getCommonFieldsForImpressions(deviceType, logger),
      customer_id: customerId,
    },
  };
  const url = getImpressionLoggingEndpoint();
  const securityOptions: {
    CSRF?: boolean;
    STORE?: boolean;
  } = { CSRF: false };

  try {
    const response = await ApiHelper(
      url,
      'post',
      data,
      undefined,
      securityOptions,
    );

    const { status } = response.data;
    if (!status || status !== 1) {
      throw new Error(`Impression log returned a status !== 1: ${status}`);
    }
  } catch (err) {
    logger.error(err, 'Error Posting data for impressions');
    throw err;
  }
};

export default handleImpressions;
