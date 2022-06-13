import  checkValidHost from '../utils';

const whiteListedDomains = ['www.nykaa.com', 'www.nykaaman.com'];
describe('Get updated url with host check', () => {
  it('should return same url when url begins with "/"', () => {
    expect(checkValidHost('/sp/homepage', whiteListedDomains)).toEqual('/sp/homepage');
  });

  it('should return the updated url if url start with http and host within white listed domains',
  () => {
    expect(checkValidHost('http://www.nykaa.com', whiteListedDomains)).toEqual('http://www.nykaa.com');
  });

  it('should return the updated url if url start with https and host within white listed domains',
  () => {
    expect(checkValidHost('https://www.nykaa.com', whiteListedDomains)).toEqual('https://www.nykaa.com');
  });

  // it('should return empty string if url start with some keywords',
  // () => {
  //   expect(checkValidHost('sp/homepage', whiteListedDomains)).toEqual('');
  // });

  // it('should return empty string if url start with single "/"',
  // () => {
  //   expect(checkValidHost('/https:/www.nykaa.com', whiteListedDomains)).toEqual('');
  // });

  it('should return empty string if url start with single "/" and sp',() => {
    expect(checkValidHost('/sp/homepage/https://google.com', whiteListedDomains)).toEqual('');
  });

  it('should return the updated url if url start with https with single "/" and host within white listed domains',
  () => {
    expect(checkValidHost('https:/www.nykaa.com', whiteListedDomains)).toEqual('https:/www.nykaa.com');
  });

  // it('should return empty string if url does not start with https',
  // () => {
  //   expect(checkValidHost('www.nykaa.com', whiteListedDomains)).toEqual('');
  // });

  it('should return empty string if url start with http and not within the whitelisted domain',
  () => {
    expect(checkValidHost('http://www.google.com', whiteListedDomains)).toEqual('');
  });
});
