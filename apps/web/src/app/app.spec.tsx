import { fireEvent, render, screen } from '@testing-library/react';
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

  it('renders the about section heading', () => {
    renderApp();
    expect(
      screen.getByRole('heading', {
        name: /we create free, high-quality stem simulations/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the browse simulations search input', () => {
    renderApp();
    expect(
      screen.getByRole('searchbox', { name: /search simulations/i })
    ).toBeInTheDocument();
  });

  it('filters simulations when searching', () => {
    renderApp();
    const searchBox = screen.getByRole('searchbox', { name: /search simulations/i });

    fireEvent.change(searchBox, { target: { value: 'Graphing' } });

    expect(searchBox).toHaveValue('Graphing');
  });

  it('renders the team section heading', () => {
    renderApp();
    expect(
      screen.getByRole('heading', {
        name: /meet the educators, developers, and partners who make this possible\./i,
      })
    ).toBeInTheDocument();
  });

  it('renders the donate section heading', () => {
    renderApp();
    expect(
      screen.getByRole('heading', {
        name: /help us keep simulations free for learners everywhere\./i,
      })
    ).toBeInTheDocument();
  });

  it('renders the contact section heading', () => {
    renderApp();
    expect(
      screen.getByRole('heading', {
        name: /we would love to hear your feedback, questions, or ideas\./i,
      })
    ).toBeInTheDocument();
  });
});
