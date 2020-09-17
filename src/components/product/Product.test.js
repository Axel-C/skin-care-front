import React from 'react';
import { render } from '@testing-library/react';
import * as ReactDOM from "react-dom";
import Product from './Product';

test("component render correctly and the first letter uppercase", () => {
    let product = {
        id: 1234,
        name: "magic cream",
        brand: "garnier"
    }

    const { getByText } = render(<Product product={product} ></Product>)

    getByText("Magic cream");
    getByText("Garnier");
})

test("component render correctly even if the data is missing", () => {
    let product = {
        id: 1234,
        name: undefined,
        brand: null,
    }

    const root = document.createElement("div");
    ReactDOM.render(<Product product={product}></Product>, root);
    expect(root.querySelector("h5").textContent).toBe("");
    expect(root.querySelector("h6").textContent).toBe("");
})