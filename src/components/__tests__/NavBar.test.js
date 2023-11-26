import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../NavBar';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';


test('renders Sign in link', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();

  const signInLink = screen.getByRole('link', {name: 'Sign in'});
  expect(signInLink).toBeInTheDocument();

});

test('renders Sign up link', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    
    const signUpLink = screen.getByRole('link', {name: 'Sign up'});
    expect(signUpLink).toBeInTheDocument();
  
  });

test('Renders home link', () => {
  render(
      <Router>
        <NavBar />
    </Router>
    );

    const homeLink = screen.getByRole('link', {name: 'Home'});
    expect(homeLink).toBeInTheDocument();
});

test('renders link to the Add Post page for a logged in user', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );
      
    const addPost = await screen.findByText('Add Post');
    expect(addPost).toBeInTheDocument()
});

test('renders link to the for you dropdown menu for a logged in user', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
    );
    
    const forYou = await screen.findByText('For you');
    expect(forYou).toBeInTheDocument()
});

test('renders link to the explorer profile for a logged in user', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );
  
  const explorerAvatar = await screen.findByText('Explorer');
  expect(explorerAvatar).toBeInTheDocument();
});

