import md5 from 'md5';
import { Request, Response } from 'express';
import url from 'url';

import { statusCodes } from '@eyewa/utils/network/constants';
import { appendQueryStringToUrl } from '@eyewa/utils/urls';
import { ApiHelper } from '@eyewa/utils/network';

import { standardErrorMessages } from '@eyewa/utils/logging/constants';
import { logger } from '@eyewa/logger';


const TARGET_URL = 'http://support.metropolisindia.com/mhl/DigitalMarketingWeb.php';
const LEAD_ID_KEY = 'leadid';

const metropolitan = async (req: Request, res: Response) => {
  try {
    const query = { ...req.query };
    const queryString = url.parse(req.url, true).search;

    const uniqueLeadId = md5(`${JSON.stringify(query)}${Date.now()}`);
    const queryParams = new URLSearchParams(queryString || '');

    const leadId = queryParams.get(LEAD_ID_KEY);
    if (leadId) {
      queryParams.set(LEAD_ID_KEY, uniqueLeadId);
    } else {
      queryParams.append(LEAD_ID_KEY, uniqueLeadId);
    }
    const queryStringWithLeadId = queryParams.toString();

    const urlWithQueryString = appendQueryStringToUrl(TARGET_URL, queryStringWithLeadId);

    const data = await ApiHelper(urlWithQueryString, 'GET');

    return res.status(data.status).send(data.data);
  } catch (err) {
    logger.error(`Metropolis:: ${err.message}`);
    return res.status(statusCodes.ERROR).send(standardErrorMessages.SOMETHING_WRONG);
  }
};

export default metropolitan;
