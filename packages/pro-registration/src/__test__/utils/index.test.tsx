import { sanitizeSocialLogin } from '../../utils';

const validInputString = 'business_youtube_url=www.test|business_facebook_url=www.facebook.com/test|business_instagram_url=www.instagram.com/test|business_linked_in_url=www.libxcvcxb.com|business_profile_url=www.businessprofile.com';
const validOutput = {
  businessYoutubeUrl: 'www.test',
  businessFacebookUrl: 'www.facebook.com/test',
  businessInstagramUrl: 'www.instagram.com/test',
  businessLinkedInUrl: 'www.libxcvcxb.com',
  businessProfileUrl: 'www.businessprofile.com'
};

const invalidInputString = 'thisisaninvalidinputvalue';
const defaultOuput = {
  businessYoutubeUrl: '',
  businessFacebookUrl: '', 
  businessInstagramUrl: '',
  businessLinkedInUrl: '',
  businessProfileUrl: '',
}

describe("sanitize Social Login Test", () => {
  it("should return an null if empty string is sent as param",() => {
    expect(sanitizeSocialLogin('')).toEqual(defaultOuput);
  });
  it("should return an object which consists 4 social links and business profile if valid input is sent",() => {
    expect(sanitizeSocialLogin(validInputString)).toEqual(validOutput);
  });
  it("should return an object which consists 4 social links and business profile empty value (default object) if invalid string is sent",() => {
    expect(sanitizeSocialLogin(invalidInputString)).toEqual(defaultOuput);
  });
});
