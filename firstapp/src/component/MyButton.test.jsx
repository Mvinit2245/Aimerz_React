import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

test('display the message after button clicked', async () => {
    render(<MyButton />);

    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    const messageElement = await screen.findByText('Hello , This is React testing');

    expect(messageElement).toBeInTheDocument();
});