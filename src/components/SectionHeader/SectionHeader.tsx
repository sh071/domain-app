import React from 'react';
import './SectionHeader.scss';

const SectionHeader = (props: any) => {
  return (
    <div className="section-header">
        <h6>{props.label}</h6>
        <hr/>
    </div>
  );
}

export default SectionHeader;
