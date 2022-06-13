/**
 * Function to check if customer email contains 'nykaa.com' domain
 * @param {string} customerEmail - customer email id
 *  @returns {boolean}
 */
const checkForNykaaUser = (
  customerEmail: string,
): boolean => {
  let isNykaaUser = false;

  if (customerEmail
    && (customerEmail.indexOf('@nykaa.com') > -1
    || customerEmail.indexOf('@nykaafashion.com') > -1)) {
    isNykaaUser = true;
  }

  return isNykaaUser;
};

export default checkForNykaaUser;
