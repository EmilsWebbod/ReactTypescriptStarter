
import * as React from "react";
import { shallow } from "enzyme";

import AppComponent from "./App.component";

const Shallow = () => shallow(<AppComponent />);

describe('AppComponent', () => {
    it("renders the heading", () => {
        const result = Shallow().contains(<h1>AppComponent</h1>);
        expect(result).toBeTruthy();
    });
});
