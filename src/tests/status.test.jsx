import { render, screen } from '@testing-library/react';
import Button from '../../components/Button/Button.jsx';
import { expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Status from './Status.jsx';

describe('Status component', () => {
    test('should render "🔴 Offline" and the toggle button on initial render', () => {
        render(<Status />);

        let p = screen.getByRole('paragraph');
        let btn = screen.getByRole('button');

        expect(p).toBeInTheDocument();
        expect(p).toHaveTextContent('🔴 Offline');
        expect(btn).toBeInTheDocument();
    });

    test('should switch to "🟢 Online" when button is clicked once', async () => {
        let user = userEvent.setup();

        render(<Status />);
        let p = screen.getByRole('paragraph');
        let btn = screen.getByRole('button');

        await user.click(btn);

        expect(p).toHaveTextContent('🟢 Online');
    });

    test('should switch back to "🔴 Offline" when button is clicked twice', async () => {
        let user = userEvent.setup();

        render(<Status />);

        let p = screen.getByRole('paragraph');
        let btn = screen.getByRole('button', { name: /toggle status/i });

        await user.click(btn);
        await user.click(btn);

        expect(p).toHaveTextContent('🔴 Offline');
    });
});
