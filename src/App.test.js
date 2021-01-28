import { render, screen } from '@testing-library/react';
import AllIssuesPage from './AllIssuesPage';

test('renders learn react link', () => {
  render(<AllIssuesPage />);
  const linkElement = screen.getByText(/Isssue List/i);
  expect(linkElement).toBeInTheDocument();
});
