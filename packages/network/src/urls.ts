export const getAPIHost = () => (__SERVER__ ? process.env.API_INTERNAL_HOST : process.env.API_HOST);

export const getGatewayUrl = () => (__SERVER__ ? process.env.GATEWAY_API_INTERNAL : `${process.env.API_HOST || ''}/gateway-api`);

export const getUrlPrefixed = (
  requestPath: string,
  clientPrefix: string = '',
  serverPrefix: string = '',
) => {
  if (__SERVER__) {
    return `${serverPrefix}${requestPath}`;
  }
  return `${clientPrefix}${requestPath}`;
};


export function getDealsEndpoint() {
  if (__SERVER__) {
    return process.env.DEALS_INTERNAL_ENDPOINT;
  }

  return process.env.DEALS_ENDPOINT;
}
export const getDealsUrl = () => (`${getDealsEndpoint()}/inventory/data/json/`);
