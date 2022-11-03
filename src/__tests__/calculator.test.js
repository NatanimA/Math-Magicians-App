import React from "react";
import renderer from 'react-test-renderer';
import userEvent from "@testing-library/user-event";
import { screen,render } from "@testing-library/react";
import Calculator from '../components/Calculator'

describe('Calculator Component Tests',() => {
    it("Renders Calculator component correctly", () => {
        const tree = renderer.create(<Calculator />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe("User Interactions with calculator",() => {
        it("Displays Result correctly",() => {
            render(<Calculator />)
            const displayInput = screen.getByTestId('calc-result')
            const clickedBtn = screen.getByTestId('7')
            userEvent.click(clickedBtn)
            expect(displayInput.value).toBe('7');
        })

        it('User All interaction Test', () => {
            render(<Calculator />);
            const display = screen.getByTestId('calc-result');
            userEvent.click(screen.getByTestId('AC'));
            userEvent.click(screen.getByTestId('7'));
            expect(display.value).toBe('7');
            
        });
    })
})