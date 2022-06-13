
const isValidUrl = (url: string) => {
  // eslint-disable-next-line no-useless-escape
  const response = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (response !== null);
};
const checkValidHost = (url: any = '', whiteListedDomains: string[] = []) => {
  if (!isValidUrl(url)) {
    return url;
  }

  const matchedIndex = whiteListedDomains.findIndex((whiteListItem) => url.includes(whiteListItem));
  if (matchedIndex >= 0) {
    return url;
  }
  return '';
};
export default checkValidHost;
