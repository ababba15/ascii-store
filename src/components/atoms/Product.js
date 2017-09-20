import React, { Component } from 'react';

export const Product = (props) => (
    <div className="product-card">
        <h1>Product here!</h1>
        <p style={{ fontSize: props.size }}>{props.face}</p>
    </div>
);