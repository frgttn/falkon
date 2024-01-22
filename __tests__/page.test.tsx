import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Page from '../app/page.tsx';

test('Page', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});
