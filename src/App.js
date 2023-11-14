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
              <PostsPage message="No results found. Adjust the search keyword.."/>
            )} 
          />
          <Route 
            exact 
            path="/bookmarks" 
            render={() => (
              <PostsPage 
                message="No results found. Adjust the search keyword or bookmark a post.."
                filter={`bookmarks__owner__explorer=${explorer_id}&ordering=-bookmarks__created_at&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/favorites" 
            render={() => (
              <PostsPage 
                message="No results found. Adjust the search keyword or add a user into your favorite list.."
                filter={`owner__favorited__owner__explorer=${explorer_id}&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/following" 
            render={() => (
              <PostsPage 
                message="No results found. Adjust the search keyword or follow a user.."
                filter={`owner__followed__owner__explorer=${explorer_id}&`}
              />
            )} 
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostDetail />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;