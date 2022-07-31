import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('Home', () => {
    it('renders an empty string', () => {
        render(<Home />);
        const test = screen.getByRole('test');
        expect(test).toBeInTheDocument();
    });
});
