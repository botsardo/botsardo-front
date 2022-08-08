import { render, screen, fireEvent } from '@testing-library/react';
import { colors } from 'styles/globals';
import '@testing-library/jest-dom';
import Button from 'components/Button/Button';

const handleClick = () => {
    console.log('testing');
};

const buttonProps = {
    label: '¡Comenzá!',
    color: `${colors.ocean}`,
    width: 150,
    height: 50,
    textColor: `${colors.black}`,
    onClick: handleClick,
};

describe('Call to action working', () => {
    it('renders without crashing', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByTestId('button');
        const label = screen.getByTestId('button-label');
        expect(button).toContainElement(label);
    });
});

describe('Button props working', () => {
    it('display text', () => {
        render(<Button {...buttonProps} />);
        const label = screen.getByTestId('button-label');
        expect(label).toHaveTextContent(buttonProps.label);
    });

    it('background filled', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByTestId('button');
        expect(button).toHaveStyle({ backgroundColor: `${buttonProps.color}` });
    });

    it('button width and height', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByTestId('button');
        expect(button).toHaveStyle({
            width: `${buttonProps.width}px`,
            height: `${buttonProps.height}px`,
        });
    });

    it('label is coloured', () => {
        render(<Button {...buttonProps} />);
        const label = screen.getByTestId('button-label');
        expect(label).toHaveStyle({ color: `${buttonProps.textColor}` });
    });

    it('calls onClick when clicked', () => {
        const newBTNProps = {
            label: 'Test',
            color: `${colors.black}`,
        };
        const handleClick = jest.fn();
        render(<Button {...newBTNProps} onClick={handleClick} />);
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
