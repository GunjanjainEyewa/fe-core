type Cookie = (string | number | boolean);

const getCookieData = (name: string, decodedCookie: string): Cookie => {
  const decodedCookies = decodedCookie.split(';') || [];

  const [desiredCookie] = decodedCookies.filter((cookie) => {
    if (cookie) {
      const trimmedCookie = cookie.trim();
      return (trimmedCookie.indexOf(name) === 0);
    }
    return false;
  });

  if (desiredCookie) {
    return desiredCookie.trim().substring(name.length, desiredCookie.length);
  }

  return '';
};


export const getCookie = (cookieName: string): Cookie => {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  return getCookieData(name, decodedCookie);
};


export const getCookieForServer = (cookieName: string, cookieData = ''): Cookie => {
  if (!cookieName) {
    throw new Error(`cookieName has to be a valid string, passed ${cookieName}`);
  }

  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(cookieData);
  return getCookieData(name, decodedCookie);
};


export const setCookie = (
  cookieName: string,
  cookieValue: string | number | boolean,
  days: number,
  domain?: string,
) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;
  let domainToSet = '';
  if (domain && domain !== '') {
    domainToSet = `;Domain=${domain}`;
  }
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/${domainToSet}`; // ? FIXME: why both
};

export const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
};
