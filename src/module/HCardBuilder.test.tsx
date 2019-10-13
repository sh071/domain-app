import React from 'react';
import { shallow, mount } from 'enzyme';
import HCardBuilder from './HCardBuilder';

it('renders hCard builder form with the expected input fields', () => {
  const wrapper = shallow(<HCardBuilder />);
  expect(wrapper.find('InputField[label="Given name"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Surname"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Email"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Phone"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="House name or #"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Street"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Suburb"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="State"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Postcode"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="Country"]')).toHaveLength(1);
  expect(wrapper.find('InputField[label="House name or #"]')).toHaveLength(1);
  expect(wrapper.find('FileUpload[label="Upload Avatar"]')).toHaveLength(1);
});

it('should correctly modify the contact preview when given name changes', () => {
    const wrapper = mount(<HCardBuilder />);
    const input = wrapper.find('input[name="givenName"]');
    input.simulate('change', { target: { value: 'name', name: 'givenName' } });
    expect(wrapper.update().find('ContactCard').prop('contact')).toEqual({name: 'name ', address1: " ", country: undefined, email: undefined,phone: undefined,photo: "",postcode: undefined,state: undefined,suburb: undefined})
})
