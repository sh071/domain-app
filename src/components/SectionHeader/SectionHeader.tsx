import React from 'react';
import './SectionHeader.scss';

interface SectionHeaderPropsType {
  label: string;
}

const SectionHeader = (props: SectionHeaderPropsType) => {
  return (
    <div className="section-header">
        <h6>{props.label}</h6>
        <hr/>
    </div>
  );
}

export default SectionHeader;
