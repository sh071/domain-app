import React from 'react';
import './ContactCard.scss';
import contactAvatar from './contact.png';

const ContactCard = (props: any) => {
    const contact = props.contact
    console.log(contact);
  return (
    <div className="contact-card vcard">
        <div className="card-header">
            <div className="contact-name fn">{contact.name}</div>
            <img src={contact.photo.length? contact.photo : contactAvatar} className="contact-image photo" alt="contact" />
        </div>
        <div className="card-content">
            <div className="content-row">
                <label>email</label> 
                <div className="content-value email">{contact.email}</div>
            </div>
            <div className="content-row">
                <label>phone</label> 
                <div className="content-value tel">{contact.phone}</div>
            </div>
            <div className="adr">
                <div className="content-row">
                    <label>address</label> 
                    <div className="content-value street-address">{contact.address1}</div>
                </div>
                <div className="content-row">
                    <label> </label> 
                    <div className="content-value">
                        {contact.suburb && <span className="locality">{`${contact.suburb}, `}</span>}
                        <span className="region">{contact.state}</span>
                    </div>
                </div>
                <div className="content-row">
                    <div className="split-row">
                        <label>Postcode</label> 
                        <div className="content-value postal-code">{contact.postcode}</div>
                    </div>
                    <div className="split-row">
                        <label>Country</label> 
                        <div className="content-value country-name">{contact.country}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactCard;
