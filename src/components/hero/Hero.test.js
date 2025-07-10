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
        const spanTexts = Array.from(heading.querySelectorAll('span')).map(span => span.textContent).join('');

        // Validate the expected combined text
        expect(spanTexts).toContain('Hi, My name is');
        expect(spanTexts).toContain('rince Adrianne Felix,');
        expect(spanTexts).toContain('software developer');

    });


    it('Check if popup button is present', async () => {
        render(<Hero />);

        await waitFor(() => {
            expect(screen.getByTestId('popupbtn')).toBeInTheDocument();
        }, { timeout: 3000 });
    })
});