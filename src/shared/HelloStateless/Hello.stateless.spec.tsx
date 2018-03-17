
import * as React from "react";
import { shallow } from "enzyme";

import Hello from "./Hello.stateless";

const content = {
    header: 'Test',
    text: 'Text'
};

const Shallow = () => shallow(<Hello header={content.header} text={content.text} />);

describe('HelloComponent', () => {
    it("Renders Header", () => {
        const result = Shallow().contains(<h1>Test</h1>);
        expect(result).toBeTruthy();
    });

    it("Renders Text", () => {
        const result = Shallow().contains(<p>Text</p>);
        expect(result).toBeTruthy();
    });
});
