import React, { Component } from 'react';

export const Product = (props) => (
    <div className="product-card">
        <p style={{ fontSize: props.size, minHeight: '150px' }}>{props.face}</p>
        <p>{props.price}</p>
    </div>
);