import { render, screen } from '@testing-library/react';
import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw';
import Heroes from './Heroes';

describe('HeroesFromAPI component', () => {
    beforeAll(() => {
        server.listen();
    });
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => {
        server.close();
    });

    test('should display "No heroes available" when API returns an empty list', async () => {
        server.use(
            http.get('http://localhost:3000/heroes', () => {
                return HttpResponse.json([], { status: 200 });
            }),
        );
        render(<Heroes />);
        const message = await screen.findByText(/no heroes available/i);
        expect(message).toBeInTheDocument();
    });

    test('should render a list of heroes after successful API fetch', async () => {
        render(<Heroes />);
        const list = await screen.findByRole('list');
        expect(list).toBeInTheDocument();
    });

    test.skip('BONUS: should display an error message when API request fails with status 500', async () => {
        server.use(
            http.get('http://localhost:3000/heroes', () => {
                return HttpResponse.json(null, { status: 500 });
            }),
        );
        render(<Heroes />);
        const error = await screen.findByRole('heading');
        expect(error).toBeInTheDocument();
    });
});
