import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './redux/store';

/**
 * React App entry point
 */
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/**
 * Detect OS theme color and set the matching App theme color
 */
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
  document.documentElement.classList.add('dark-theme');
} else {
  document.documentElement.classList.remove('dark-theme');
}
