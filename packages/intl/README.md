# **Multilingual Modal**   
There are two modals you have to show in Vernacular.   

1. **Feedback Modal**  
  Feedback Modal will be shown only once. Once user close it, HSF cookie will be set with 6 Months expiry time.

2. **Language Preference**  
  First time Language Preference will be automatically shown. Once user close it, HSLP cookie will be set for 6 Months expiry. But One can toggle the Lanugage Preference modal. Language Preference can be toggle by dispatching **toggleLanguageModal** action. It will toggle the showModal key in langConfig reducer. Import it from '@nykaa/intl-shared/store/action';

** **Note:** This will Language Preference Modal makes use of redux, thus client will have to install redux in term to use Modal.

