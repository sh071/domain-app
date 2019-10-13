import React, { useState, SyntheticEvent } from 'react';
import './App.scss';
import InputField from './components/InputField/InputField';
import SectionHeader from './components/SectionHeader/SectionHeader';
import ContactCard from './components/ContactCard/ContactCard';
import FileUpload from './components/FileUpload/FileUpload';

interface FormType {
  givenName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  house?: string;
  street?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country?: string;
  photo?: string;
}

const App: React.FC = () => {
  const [form, setForm] = useState({});

  const onFormChange = (e: SyntheticEvent) => {
    if(e.target.type !== 'file') {
      setForm({...form, [e.target.name]: e.target.value});
    }
  }

  const getContactInfo = (form: FormType) => {
    return {
        name: `${form.givenName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        address1: `${form.house} ${form.street}`,
        suburb: form.suburb,
        state: form.state,
        postcode: form.postcode,
        country: form.country,
        photo: form.photo
      };
  }

  return (
    <div className="hcard-builder">
      <div className="hcard-builder-container">
        <div className="form-container">
          <h1>hCard Builder</h1>

          <form onChange={onFormChange}>
            <SectionHeader label="Personal details"></SectionHeader>
            <div className="form-row">
              <InputField label="Given name" name="givenName" type="text" />
              <InputField label="Last name" name="lastName" type="text"/>
            </div>
            <div className="form-row">
              <InputField label="Email" name="email" type="email"/>
              <InputField label="Phone" name="phone" type="tel"/>
            </div>

            <SectionHeader label="Address"></SectionHeader>
            <div className="form-row">
              <InputField label="House name or #" name="house" type="text"/>
              <InputField label="Street" name="street" type="text"/>
            </div>
            <div className="form-row">
              <InputField label="Suburb" name="suburb" type="text"/>
              <InputField label="State" name="state" type="text"/>
            </div>
            <div className="form-row">
              <InputField label="Postcode" name="postcode" type="text"/>
              <InputField label="Country" name="country" type="text"/>
            </div>

            <div className="form-row">
              <FileUpload onFileSelected={(photoUrl: string) => {setForm({...form, photo: photoUrl})}} label="Upload Avatar"/>
              <button type="submit">Create hCard</button>
            </div>
          </form>
        </div>
        <div className="preview-container">
          <ContactCard contact={getContactInfo(form)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
