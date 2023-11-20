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

## Testing

### Manual Testing

<details><summary>Navigation bar</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| **Logo** (available for all users) | When the user clicks on the Logo, they should be redirected to the home page of the site. | Click on "With Travel In Mind" in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| **Home** (available for all users) | Clicking "Home" should redirect the user to the homepage of the site. | Click on Home in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| **Sign in** (available for all users) | When the user clicks "Sign In" they should be redirected to the sign in page. | Click on Sign In in the navigation bar at the top of the page. | The user is redirected to the sign in page. | Pass |
| **Sign Up** (available for all users) | Clicking "Sign Up" should redirect the user to the registration page. | Click on Sign Up in the navigation bar at the top of the page | The user is redirected to the registration page. | Pass |
| **Add Post** (available for only logged-in users) | When the user clicks "Add Post", they should be redirected to a form page their they can fill in data and publish a post. | Click on Add Post in the navigation bar at the top of the page. | The user is redirected to the form page. | Pass |
| **Sign out** (available for only logged-in users) | Clicking "Sign out" should log the user out and redirect them to the home page. | Click on Sign out in the navigation bar at the top of the page. | The user is logged out and redirected to the home page. | Pass |
| **Explorer** (available for only logged in users) | When the user clicks "Explorer", they should be redirected to their own explorer profile. | Click on Explorer in the navigation bar at the top of the page. | The user is redirected to their profile page. | Pass

</details>

## Fixed Bugs

- NavBar logged-in and logged-out view failed upon signing in. The user was directed to the homepage, but the navbar showed the links for logged out users.

  The error message displayed in the console: 
  
  `failed to load resource: the server responded with a status of 401 (unauthorized)` 
  
  API's message: `Authentication credentials were not provided`

  - **Fix:**
    - Downgrade dj-rest-auth version in the API: 
      ````
      pip3 install dj-rest-auth==2.1.9
      `````
    - Git add | git commit | git push
    - Deploy on Heroku.
    - See below.

- Deployment failed due to following ImportError:

  `ImportError: allauth needs to be added to INSTALLED_APPS`

  - **Fix:**
    - Downgrade django-allauth version in the API: 
      ````
      pip3 install django-allauth==0.54.0
      ````
    - Git add | git commit | git push
    - Deploy on Heroku.

  Source: [Stack Overflow](https://stackoverflow.com/questions/76969410/importerror-allauth-needs-to-be-added-to-installed-apps)

- "Favorites" in the Navbar showed the list of all posts (however none of those posts have been added to the favorite list). 

  - **Fix:** Add the missing `owner__favorited__owner__explorer` into **filterset_fields** in the posts views in the Back-End [with-travel-in-mind-api](https://github.com/Kattis91/with-travel-in-mind-api).

- `Could not find a declaration file for module 'react-router-dom'` message was displayed when I was trying to import { NavLink }.

  My preview didn't show anything at all.

  - **Fix:** install types: `npm install --save @types/react-router`

- When I was trying to pre-populate my PostEditForm and clicked on the "edit" icon for the post I had created, I was taken to the edit page but that was not pre-populated. Moreover, after a just a second, I was redirected to the homepage (like a user who is not an owner should be).

  - **Fix:** Add the missing return statement (`return request.user == obj.owner`) to the get_is_ownwer method in posts serilaizers.py in the Back-End.
    
    ````
    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
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