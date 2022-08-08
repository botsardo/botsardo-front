import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmptyState from 'components/EmptyState/EmptyState';

describe('Everything is rendered', () => {
    beforeEach(() => {
        render(<EmptyState />);
    });

    it('contain svg', () => {
        const emptyState = screen.getByTestId('empty-state');
        const svg = screen.getByTestId('empty-state-svg');
        expect(emptyState).toContainElement(svg);
    });

    it('contain text', () => {
        const emptyState = screen.getByTestId('empty-state');
        const text = screen.getByTestId('empty-state-text');
        expect(emptyState).toContainElement(text);
    });

    it('contain button', () => {
        const emptyState = screen.getByTestId('empty-state');
        const button = screen.getByRole('button');
        expect(emptyState).toContainElement(button);
    });
});
