import React from 'react';
import { Link } from 'react-router-dom';

const ClassDetails = ({details, hideDetails}) => {
    return (
        <div className='row pr-5 pl-5'>
            <div className='col-md-6'>
                <img src={details.bgImg} alt='...' style={{'height':'30vh'}}/>
                <p>{details.summary}</p>
                <ul>
                    {details.features.map((feature,id) => <li key={id}>{feature}</li>)}
                </ul>
            </div>
            
            <div className='col-md-6'>
                <h1>schedule coming</h1>
            </div>
        </div>
    );
};

export default ClassDetails;