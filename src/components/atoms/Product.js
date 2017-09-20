import React, { Component } from 'react';
import moment from 'moment';

console.log(moment);

export const Product = (props) => (
    <div className="product-card">
        <p style={{ fontSize: props.size, minHeight: '150px' }}>{props.face}</p>
        <p>${(props.price / 100).toFixed(2)}</p>
        <p>{moment.utc(props.date).fromNow()}</p>
    </div>
);