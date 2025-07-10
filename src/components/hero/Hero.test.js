import { render, screen, waitFor } from '@testing-library/react';
import Hero from './hero';
import '@testing-library/jest-dom';


describe('Hero component', () => {
    it('renders all characters in the intro title', () => {
        render(
            <Hero />
        );

        // Query all spans inside h1
        const heading = screen.getByRole('heading', { level: 1 });

        // Validate text content directly
        expect(heading).toHaveTextContent('Hi, My name is');
        expect(heading).toHaveTextContent('rince Adrianne Felix,');
        expect(heading).toHaveTextContent('software developer');

    });


    it('Check if popup button is present', async () => {
        render(<Hero />);

        await waitFor(() => {
            expect(screen.getByTestId('popupbtn')).toBeInTheDocument();
        }, { timeout: 3000 });
    })
});