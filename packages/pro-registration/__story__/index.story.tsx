import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import UserVerificationView from "../src/components/VerificationForm";
import ShippingInfoForm from "../src/components/ShippingInfoForm";
import { AddressInfo, BusinessInfo, PersonalInfo } from '../src/types';
import DocumentUploader from '../src/components/DocumentUpload';
import SocialPage from '../src/components/SocialPage';
import IdentityForm from '../src/components/IdentityForm';
import CertificateForm from '../src/components/CertificationForm';
import TermAndCondition from '../src/components/TermAndConditions';
import ApplicationSumit from '../src/components/ApplicationSubmit';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pro Migration',
  component: UserVerificationView,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
    viewMode: ''
  },
};

const addressArray: any[] = [
  {
    city: "Noida",
		state: "Uttar Pradesh",
		pincode: "201301",
		countryId: "IN",
		street: "1453, Green St.",
		firstname: "Jonathan",
		lastname: "Jackson",
		mobileNumber: "7217266152",
		addressId: "23",
    regionId: "0"
  },
  {
    city: "Gurgaon",
		state: "Haryana",
		pincode: "122001",
		countryId: "IN",
		street: "Paras Twin Tower",
		firstname: "Nykaa",
		lastname: "Dev",
		mobileNumber: "7217266153",
		addressId: "24",
    regionId: "0"
  }
]


// User Verification Story
const personalInfo: PersonalInfo = {
  email: "pro-migration@mailinator.com",
  name: "Abhishek Agnihotri",
  mobile: "8802250442"
};
const businessInfo: BusinessInfo = {
  organizationName: '',
  businessType: 'Makeup Artist'
} 

export const VerifyUserComponent = () => {
  return (
    <UserVerificationView 
      title='Verify Details'
      status='addressInfo'
      name={personalInfo.name}
      mobileNumber={personalInfo.mobile}
      businessType={businessInfo.businessType} 
      onClick={action('verified')}
    />
  )
}

let tempAddress: AddressInfo = {
  city: 'Noida',
  state: 'Uttar Pradesh',
  pincode: '201301',
  countryId: 'IN',
  regionId: '0'
};

export const ShippingComponent = () => {
  return (
    <ShippingInfoForm 
      title={'Enter Shipping Address'}
      status={'addressInfo'}
      savedAddresses={addressArray}
      addressByPin={tempAddress}
      onPinChange={(val) => console.log('pin story', val)}
      onAddressChange={(address) => console.log(address, 'address calback')}
    />
  )
}

const uploadProps = [
  {
    fieldName: 'id_proof_document',
    filePath: ''
  }
];

export const UploadDocument = () => {
  const [files, setFiles] = React.useState(uploadProps);

  const handleUpload = (file, name) => {
    setFiles([...files, { fieldName: 'id_proof_document2', filePath: '' }]);
  }

  return (
    <DocumentUploader files={files} onUpload={(file, name) => handleUpload(file, name)} onRemove={action('remove') }/>
  )
}

// const links: string = 'businessYoutubeUrl=www.test|businessFacebookUrl=www.facebook.com/test|businessInstagramUrl=www.instagram.com/test|businessLinkedInUrl=www.libxcvcxb.com';
const links: string = "business_youtube_url=www.test|business_facebook_url=www.facebook.com/test|business_instagram_url=www.instagram.com/test|business_linked_in_url=www.libxcvcxb.com|business_profile_url=www.businessprofile.com";

export const SocialPageView = () => {
  return (
    <SocialPage socialLinks={links} />
  )
}

export const IdentityFormView = () => {
  return (
    <IdentityForm
      nameLabel="Name (as it appears on the document)"
      idLabel="Enter GST Certificate Number"
      files={uploadProps}
      isRequired
      onIdChange={action('ID change')}
      onNameChange={action('Name change')}
      onUpload={(file, name) => console.log(file, name)} 
      nameValue=""
      idValue=""
    />
  )
}

export const CertificateFormView = () => {
  return (
    <CertificateForm
      label="Training Certificate"
      files={uploadProps}
      onInputChange={action('ID change')}
      onUpload={(file, name) => console.log(file, name)} 
      value="" 
    />
  )
}

export const TermAndConditionView = () => {
  return (
    <TermAndCondition
      email="prosupport@nykaa.com"
      phone="123919121"
      onClick={action('changed')} 
    />
  )
}

export const ApplicationSubmitView = () => {
  return (
    <ApplicationSumit onClick={action('Clicked')} />
  )
}

