# With Travel In Mind

## Features

### Existing Features

#### Navigation Bar

- The navigation bar is complete and responsive. It appears consistently on every page, making navigation more convenient.

- This section facilitates seamless navigation between pages, eliminating the need to rely on the "back" button.

- Clicking on the Logo and "Home" will always redirect the user to the home page.

- Logo and links to the home page are **available for all users**. However, there are some differences in how the navigation bar looks for non-logged and logged-in users.
 
  - **Non-logged users:**

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700430296/navbar-logged-out_kvjjih.png)
    
    - The navigation bar consists of the Logo, Home, Sign In, and Sign Up links. 
    - Clicking on "Sign In" or "Sign Up" directs users to their respective pages.

  - **Logged-in users:**
    
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700430296/navbar-logged-in_rp6sbg.png)

    - The navigation bar includes the Logo, "Add Post" link, "For You" dropdown menu, and links to Sign Out and Explorer's profile.
    
    - Clicking "Add Post" takes the user to a page where they can fill in a form to publish a post.
    
    - Clicking "For you" opens the dropdown menu.
      
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700435181/dropdown-menu_ucqlzm.png)
      
      - When the user clicks on "Bookmarks", they will be directed to a page where they can find all the posts they have previously bookmarked.
      
      - When the user clicks on "Favorites", they will be directed to a page where they can find all the posts by the users they have in their favorite list.
     
      - When the user clicks on "Following", they will be directed to a page where they can find all the posts by the users they follow.
    
    - Clicking "Sign out" logs out the user and directs to the home page.
    
    - The avatar and "Explorer" takes the user to their explorer profile.

#### Search

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700435547/search_ietn9p.png)

- **Filter posts by region**:
 
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700436195/search-by-region_vgnqrj.png)

- **Search by typing in**:
  - The user can search posts by post title or the name of the author/explorer.

#### Add Post

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700599677/add-post_h8xke0.png)

- This page includes a form that allows users who are logged in to publish their posts.

- In order to ensure an optimal user experience for everyone, it is necessary to fill out all required fields. The more information about the post the better! 

- An alert message appears on the screen when the user misses to fill in some field:
  
  - Title:
    
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700601821/alert-message_oa6r3d.png)
  
  - Description:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700601821/alert-message_oa6r3d.png)

  - Place:
    
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700601821/alert-message_oa6r3d.png)

  - Image:
   
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700601821/alert-for-the-image-field_boihzg.png)

- After correctly submitting the form, the user is redirected to their newly created post's detailed page upon clicking the **Create** button.

- When the user clicks on the **Cancel** button, they are redirected back to the page they were on before clicking "Add Post".

#### Sign Up

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700606692/sign-up-form_ruamir.png)

- The form enables users to register and create an account.

- The form includes following **mandatory** fields:
  - Username
  - Password
  - Confirm Password

- Validation:

  - When the user misses to fill in the username or "confirm password" fields.

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700601821/alert-message_oa6r3d.png)

  - When the user misses to fill in the password field:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700609368/field-is-required_crfday.png)

  - When the username is already taken:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700608092/username-already-exists_zg5ccb.png)

  - When the password is too short:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700611340/password-is-too-short_earapl.png)

  - When two passwords do not match:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700608092/passwords-do-not-match_ypw7dh.png)

- Clicking on **Sign in** takes th user to the Sign in form.

#### Sign In

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700606692/sign-in-form_ofjnqa.png)

- The form enables users to log in.

- When a user logs in, they gain the ability to:

  - **Posts:** Add posts | Edit their own posts | Delete their own posts.
  - **Likes:** Like posts | Unlike posts.
  - **Bookmarks:** Bookmark posts | Remove bookmarks from posts.
  - **Comments:** Comment on posts | Edit their own comments | Delete their own comments | Like comments | Unlike comments.
  - **Follow:** Follow other users | Unfollow other users
  - **Favorites:** Add other users to their favorite list | Remove other users from the favorite list.
  - **Explorer profiles:** Visit and update their own explorer profile.

- Validation:

  - Trying to login in with only the username:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700609368/field-is-required_crfday.png)

  - Trying to log in with only password:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700608749/username_and_password_uqwvqt.png)
  
  - Trying to login with a non-existing username-password combination:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700608749/credentials_t7lbfm.png)
  
- Clicking on **Sign up now!** takes th user to the Sign up form.

#### Popular explorers

- All users, including non-logged in users, can view a list of the most popular profiles (explorers).

- Profiles are listed in descending order from most popular to least popular.

- Clicking on both the avatar and the username takes the user to the selected explorer's profile.

- The list is displayed in different ways depending on the screen size.

  - **Desktop** (displayed to the right at the top of the page):
  
    - Non-logged users:
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700648334/popular-explorers-desktop_bguwnd.png)

    - Logged-in users:
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700650413/popular-explorers-logged-in-user-desktop_lrvv2p.png)

      You need to log in to be able to follow/unfollow other explorers.

  - **Mobile** (displayed at the top of the page below navbar):
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700648334/popular-explorers-mobile_ujvh4o.png)

#### Hottest posts

- All users, including non-logged in users, can view a list of the most hottest posts.

- Posts are listed in descending order starting with the one with most likes.

- The list is updated whenever there is a change in the number of likes affecting the order.

- Clicking on both the post image and title takes the user to the selected post detail page.

- The list is displayed in different ways depending on the screen size.

  - **Desktop**(displayed to the right of the page, just below the popular profiles container):
 ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700649269/hottest-posts-desktop_d74py1.png)

  - **Mobile**(displayed at the top of the page, between popular explorers container and the search bar):
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700649268/hottest-posts-mobile_zl8mpd.png)
  The number of posts shown is limited to **three**.

## Testing

### Manual Testing

<details><summary>Navigation bar</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| **Logo** (available for all users) | When the user clicks on the Logo, they should be redirected to the home page of the site. | Click on "With Travel In Mind" in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| **Home** (available for all users) | Clicking "Home" should redirect the user to the homepage of the site. | Click on "Home" in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| **Sign in** (available for all users) | When the user clicks "Sign In" they should be redirected to the sign in page. | Click on "Sign In" in the navigation bar at the top of the page. | The user is redirected to the sign in page. | Pass |
| **Sign Up** (available for all users) | Clicking "Sign Up" should redirect the user to the registration page. | Click on "Sign Up" in the navigation bar at the top of the page. | The user is redirected to the registration page. | Pass |
| **Add Post** (available for only logged-in users) | When the user clicks "Add Post", they should be redirected to a form page their they can fill in data and publish a post. | Click on Add Post in the navigation bar at the top of the page. | The user is redirected to the form page. | Pass |
| **For you** | Clicking "For you" should open a dropdown with three links. | Click on "For you" in tje mavigation bar at the top of the page. | The links for "Bookmarks", "Favorites" and "Following" appear on the screen. | Pass |
| **For you. Bookmarks** | Clicking "Bookmarks" should take the user to the page showing all the posts the user has bookmarked. | Click on "For You" and select "Bookmarks" from the dropdown menu that appears. | The user is redirected to the page containing only the user's bookmarked posts. | Pass |
| **For you. Bookmarks**. _No Results_ | If the user hasn't bookmarked any posts yet, a message saying that should be displayed. | Remove all your bookmarked posts, if any, and select "Bookmarks". | The "No results found. You need to bookmark some posts to get them displayed here.." appears on the screen. | Pass |
| **For you. Favorites** | When the user clicks "Favorites", they should be directed to a page that displays all posts from the explorers they have in their favorite list.| Click on "For You" and select "Favorites" from the dropdown menu that appears. | The user is redirected to the page containing posts only from the explorers they have in their favorite list. | Pass |
| **For you. Favorites**. _No Results_ | If a user has not added anyone to their favorites list or if the people they have added have not posted anything, a message should be displayed indicating that there are no posts to show. | First, remove any users from the favorites list. After that, select "Favorites".| The "It seems that you don't have any users on your favorite list or the ones you have added haven't posted anything yet. Go to the profiles you like the most and click the 'Fan' button to get their posts displayed here." message appears on the screen. | Pass |
| **For you. Following** | When the user clicks "Following", they should be directed to a page that displays all posts from the explorers they follow. | Click on "For You" and select "Following" from the dropdown menu that appears. | The user is redirected to the page containing posts only from explorers they follow. | Pass |
| **For you. Following**. _No Results_ | If a user is not following anyone or if those they follow have not posted anything, a message should be displayed indicating that there are no posts to show. | If you are currently following any users, please unfollow them first. After that, select "Following".| The "No results found. Either you are not following anyone, or those you follow haven't posted anything yet." message appears on the screen. | Pass |
| **Sign out** (available for only logged-in users) | Clicking "Sign out" should log the user out and redirect them to the home page. | Click on "Sign out" in the navigation bar at the top of the page. | The user is logged out and redirected to the home page. | Pass |
| **Explorer** (available for only logged in users) | When the user clicks "Explorer", they should be redirected to their own explorer profile. | Click on "Explorer" in the navigation bar at the top of the page. | The user is redirected to their profile page. | Pass |

</details>

<details><summary>Add Post</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Incomplete form | It shouldn't be possible to submit the form without first filling in all the fields. | Leave one or several fields empty and click the "Create" button. | The user remains on the "Add Post" page until all the fields are filled in. Different alert messages are displayed. [Click here to come to the screenshots of messages](#add-post). | Pass |
| Form submission | After successfully submitting the form, the user should be taken to the page displaying details about the newly created post. | Fill successfully in all the fields and click the "Create" button. | The user is redirected to the detailed post page. | Pass |
| "Cancel" | By clicking the "Cancel" button, the user should be taken to the page the user was visiting before clicking "Add Post". | Click the "Cancel" button. | The user is redirected back to the page they were visiting just before choosing to add a post. | Pass |
</details>

<details> 
<summary>Sign Up</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Submit | After successfully submitting the sign up form, the user should be redirected to the sign in page. | Click on the "Sign Up" link in the navigation bar, fill in the form and click "Sign Up". | The user is directed to the sign in page. | Pass | 
| Submit without filling in username or "confirm password" fields | When attempting to submit the form, leaving the username or confirm password fields blank, an error message should be displayed to the user. | Click on the "Sign Up" link in the navigation bar and then click the "Sign Up" button without filling in the username or confirm password fields. | The "This field may not be blank" error message appears on the screen. | Pass |
| Submit without filling in the password field | When attempting to submit the form, leaving the password field blank, an error message should be displayed to the user. | Click on the "Sign Up" link in the navigation bar and then click the "Sign Up" button without filling in the password field. | The "This field may not be blank" error message appears on the screen. | Pass |
| The username is already taken | When trying to submit the form with the username that already exists on the site, the user should get a message saying that. | Try to sign in with the username that you know you or somebody else has. | The "A user with that username already exists." message appears on the screen. | Pass |
| Too short password | When trying to submit the form with a password that contains less than 8 characters, an error message should be displayed to the user. | Type in a password that contains less than 8 characters. | The "This password is too short. It must contain at least 8 characters." message is displayed. | Pass |
| Passwords do not match | When attepmting to submit the form with two passwords that do not much, the user should get an error message saying that. | Type in two different passwords and click "Sign up". | The "The two password fields didn't match." message is displayed. | Pass |
| **Sign in** | Clicking on the "Sign in" link below the form should take the user to the sign in form. | Click the "Sign in" link. | The user is redirected to the sign in page. | Pass |

</details>

<details> 
<summary>Sign In</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Sign In | After successfully filling in the sign in form, the user should be redirected to the homepage, where they can access links through the navigation menu available only for logged-in users. | Click on the "Sign in" link in the navigation bar, fill in the form, and click "Sign In". | The user is directed to the homepage. "Home / Sign in / Sign Up" links change to "Add Post / Home / For you / Sign out / Explorer". | Pass | 
| Sign in with the username only | When trying to submit the form without filling in the password, an error message should be displayed to the user. | Click on the "Sign in" link in the navigation bar, fill in the username and click the "Sign in" button. | The "This field may not be blank." error message appears on the screen | Pass |
| Sign in with the password only | When a user tries to submit the form without filling in the username, an error message should be displayed to that user. | Click on the "Sign in" link in the navigation bar, fill in the password and click the "Sign in" button. | The "Must include 'username" and "password'." error message is displayed to the user. | Pass |
| Sign in with a non-existing username-password combination | When a user tries to submit the form with an incorrect username or password or both, an error message should be displayed to the user. | Click on the "Sign in" link in the navigation bar, fill in some random username and password, and click the "Sign in" button. | The "Unable to log in with provided credentials." error message appears on the screen. | Pass |
| **Sign up now!** | Clicking on the "Sign up now!" link below the form should take the user to the sign up form. | Click the "Sign up now!" link. | The user is redirected to the sign up page. | Pass |

</details>

## Fixed Bugs

- NavBar logged-in and logged-out view failed upon signing in. The user was directed to the homepage, but the navbar showed the links for logged out users.

  The error message displayed in the console: 
  
  `failed to load resource: the server responded with a status of 401 (unauthorized)` 
  
  API's message: `Authentication credentials were not provided`

  **Fix:**
    - Downgrade dj-rest-auth version in the API: 
      ````
      pip3 install dj-rest-auth==2.1.9
      `````
    - Git add | git commit | git push
    - Deploy on Heroku.
    - See below.

- Deployment failed due to following ImportError:

  `ImportError: allauth needs to be added to INSTALLED_APPS`

  **Fix:**
    - Downgrade django-allauth version in the API: 
      ````
      pip3 install django-allauth==0.54.0
      ````
    - Git add | git commit | git push
    - Deploy on Heroku.

  Source: [Stack Overflow](https://stackoverflow.com/questions/76969410/importerror-allauth-needs-to-be-added-to-installed-apps)

- "Favorites" in the Navbar showed the list of all posts (however none of those posts have been added to the favorite list). 

  **Fix:** Add the missing `owner__favorited__owner__explorer` into **filterset_fields** in the posts views in the Back-End [with-travel-in-mind-api](https://github.com/Kattis91/with-travel-in-mind-api).

- `Could not find a declaration file for module 'react-router-dom'` message was displayed when I was trying to import { NavLink }.

  My preview didn't show anything at all.

  **Fix:** install types: `npm install --save @types/react-router`

- When I was trying to pre-populate my PostEditForm and clicked on the "edit" icon for the post I had created, I was taken to the edit page but that was not pre-populated. Moreover, after a just a second, I was redirected to the homepage (like a user who is not an owner should be).

  **Fix:** Add the missing return statement (`return request.user == obj.owner`) to the get_is_ownwer method in posts serilaizers.py in the Back-End.
    
    ````
    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
    ````

- When I tried to like a comment, the number of likes displayed as "NaN" instead of an actual number. The same happened when I tried to remove the like. 

  **Fix**: After checking everything a bunch of times, I got support from Oisin on the Tutor Assistance who noticed that the annotate method in the comment views was missing. Adding commentlikes_count to the queryset and importing **Count** from _django.db.models_ solved the issue.

    ````
    queryset = Comment.objects.annotate(
          commentlikes_count=Count('commentlikes', distinct=True)
    )
    ````

## Deployment

### Create Heroku App and connect it to GitHub

 - Sign up for Heroku and accept terms of service.

 - Click the **"Create a new app"** button.

 - Give your app a name and select the region closest to you. _A name must be **unique**._

 - Click on the **"Deploy"** section on the top of the page.

- Select **GitHub** as deployment method and click the **"Connect to GitHub"** button.

- Search for the repository for this project, _with_travel_in_mind_. 

- Click **"Connect"** to link up Heroku app to the GitHub repository.

- Click on **"Deploy Branch"**.