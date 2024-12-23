import { fireEvent, render, screen, awaitFor } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the Header heading and navigates to Booking page', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button", { name: /reserve table/i });
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times when selecting a time', async () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    const reserveButton = screen.getByRole("button", { name: /reserve table/i });
    fireEvent.click(reserveButton);

   
    const timeSelect = await screen.findByLabelText("Choose Time");

    const testTime = "12:00";
    await userEvent.selectOptions(timeSelect, screen.getByRole('option', { name: testTime }));

    expect(screen.getByRole('option', { name: testTime }).selected).toBe(true);
});

