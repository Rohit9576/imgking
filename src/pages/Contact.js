import React from 'react';
import Contacts from '../subcomponent/contacts/Contacts';
import B_abouts from '../subcomponent/b-about/B_abouts';


const Contact = () => {
  return (
    <div>
      <B_abouts name='Contacts'/>
      <Contacts/>
    
    </div>
  );
}

export default Contact;