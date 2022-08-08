import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import homeIcon from 'assets/icons/home.svg';
import MenuElement from 'components/MenuElement/MenuElement';

jest.setTimeout(6000);

describe('Expanded navbar renders everything', () => {
    const props = {
        icon: homeIcon,
        text: 'Navbar expandido',
        showText: true,
    };

    it('a tag has show class', () => {
        const { container } = render(<MenuElement {...props} />);
        const a = container.querySelector('a');
        expect(a).toHaveClass('show');
    });

    it('svg renders', () => {
        render(<MenuElement {...props} />);
        const svg = screen.getByTestId('menu-element-svg');
        expect(svg).toBeInTheDocument();
    });

    it('text renders', async () => {
        render(<MenuElement {...props} />);
        const span = screen.getByTestId('menu-element-text');
        expect(span).toBeInTheDocument();
        expect(span).toHaveTextContent(props.text);
    });
});

describe('Collapsed navbar renders everything', () => {
    const props = {
        icon: homeIcon,
        text: 'Navbar collapsed',
        showText: false,
    };

    it('a tag has hide class', () => {
        const { container } = render(<MenuElement {...props} />);
        const a = container.querySelector('a');
        expect(a).toHaveClass('hide');
    });

    it('svg renders', () => {
        render(<MenuElement {...props} />);
        const svg = screen.getByTestId('menu-element-svg');
        expect(svg).toBeInTheDocument();
    });
});
