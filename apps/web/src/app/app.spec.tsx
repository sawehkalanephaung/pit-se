import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  const renderApp = () =>
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

  it('renders the primary hero headline', () => {
    renderApp();
    expect(
      screen.getByRole('heading', { name: /learn science by doing/i })
    ).toBeInTheDocument();
  });

  it('renders the top navigation CTA', () => {
    renderApp();
    expect(screen.getByRole('link', { name: /donate/i })).toBeInTheDocument();
  });
});
