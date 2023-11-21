import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostDetail from "./pages/posts/PostDetail";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ExplorerPage from "./pages/explorers/ExplorerPage";
import ExplorerEditForm from "./pages/explorers/ExplorerEditForm";
import UsernameForm from "./pages/explorers/UsernameForm";
import UserPasswordForm from "./pages/explorers/UserPasswordForm";

function App() {

  const currentUser = useCurrentUser();
  const explorer_id = currentUser?.explorer_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword or choose another region.."/>
            )} 
          />
          <Route 
            exact 
            path="/bookmarks" 
            render={() => (
              <PostsPage 
                message="No results found. You need to bookmark some posts to get them displayed here.."
                filter={`bookmarks__owner__explorer=${explorer_id}&ordering=-bookmarks__created_at&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/favorites" 
            render={() => (
              <PostsPage 
                message="It seems that you don't have any users on your favorite list or the ones you have added
                haven't posted anything yet. Go to the profiles you like the most and click the 'Fan' button to get 
                their posts displayed here."
                filter={`owner__favorited__owner__explorer=${explorer_id}&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/following" 
            render={() => (
              <PostsPage 
                message="No results found. Either you are not following anyone, or those you follow haven't posted anything yet."
                filter={`owner__followed__owner__explorer=${explorer_id}&`}
              />
            )} 
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostDetail />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/explorers/:id" render={() => <ExplorerPage />} />
          <Route exact path="/explorers/:id/edit" render={() => <ExplorerEditForm />} />
          <Route exact path="/explorers/:id/edit/username" render={() => <UsernameForm /> } />
          <Route exact path="/explorers/:id/edit/password" render={() => <UserPasswordForm /> } />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;