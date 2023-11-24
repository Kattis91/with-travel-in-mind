# With Travel In Mind

"With Travel In Mind" is an online application designed to foster a community of travelers who share their experiences and knowledge about various destinations. The platform allows users to interact with each other by following, adding to favorites, commenting, bookmarking, and liking posts and comments. Whether you're a seasoned traveler or a novice explorer, With Travel In Mind is the perfect platform to connect with like-minded wanderers and discover new destinations.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700774762/am-i-responsive_mqr0hk.png)

## Design

### Colour Scheme

The choice of colors depends on the background image chosen for home, sign up, login, and logout pages.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700841747/colour_scheme_rhyczb.png)

- **`338F85`** - primary color. The color appears:
  - As background color for all the pages. 
  - When hovering over:
    - post titles.
    - usernames in the popular explorers container.
  - Navbar icons when they are not active.
  - Font Awesome icons (place, region, comments, likes and bookmarks).  

  All the icons are contained in a white box, creating contrast and enhancing visual appeal.

- **`6C63FF`** is another color that appears consistently on all pages. The color appears:
  
  - In the logo:
    
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844762/logo_mafegk.png)

  - Buttons:
  
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844385/follow-button_kjcrwt.png)
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844385/create-button_qdhbdp.png)
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844385/save-button_rz8qzf.png)
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844385/update-button_x72hfz.png)
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700844522/post-button_h3blch.png)
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845468/yes-button_rv3srg.png)

  - Hovering over the "Unfollow" button.

  - When hovering over the icons.

  - When the navbar link is active.

- **`AFADE0`** appears:
  
  - "Unfollow" button:

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700846564/unfollow-button_rlmqvd.png)

  - When hovering over the "Follow" button.

- **`C43A51`** used for the buttons.
   
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845357/sign-in-button_us36n5.png)
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845357/sign-up-button_v81fk1.png)
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845357/cancel-button_sd1ug5.png)
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845631/fun-button_b8qtpw.png)

  The color is chosen for contrast and to match the image on the sign up and sign in pages.
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845782/sign-in-image_ifs3iv.png)

- **`FFC0CB`** is used for the unfan button for the contrast with the fan button.
  
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700845963/unfan-button_o8qutx.png)

- **`FFFFFF`** is used as a "container" color on all features and pages, creating contrast and enhancing visual appeal with the background. It is also used as a text color on the buttons shown above.

- **`414146`** is the primary text color used throughout the pages.

### Typography

The website primarily uses the **'Ubuntu'** font and has a fallback of Sans-Serif in case Ubuntu fails to load. This font is easy to read despite the platform's low usage of text.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700847347/ubuntu-font_psl0k6.png)

## Features

### Existing Features

#### Navigation Bar

- The navigation bar is complete and responsive. It appears consistently on every page, making navigation more convenient.

- This section facilitates seamless navigation between pages, eliminating the need to rely on the "back" button.

- Clicking on the Logo and "Home" will always redirect the user to the home page.

- Logo and links to the home page are **available for all users**. However, there are some differences in how the navigation bar looks for non-logged and logged-in users.
 
  **Non-logged users:**

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700430296/navbar-logged-out_kvjjih.png)
    
    - The navigation bar consists of the Logo, Home, Sign In, and Sign Up links. 
    - Clicking on "Sign In" or "Sign Up" directs users to their respective pages.

  **Logged-in users:**
    
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700837390/navbar-logged-in_ctonuw.png)

    - The navigation bar includes the Logo, "Home" and Add Post" links, "For You" dropdown menu, and links to Sign Out and Explorer's profile.
    
    - Clicking "Add Post" takes the user to a page where they can fill in a form to publish a post.
    
    - Clicking "For you" opens the dropdown menu shown below.

      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700657695/dropdown-menu_utcrpv.png)
      
    - **Bookmarks:**
      
      - When the user clicks on "Bookmarks", they will be directed to a page where they can find all the posts they have previously bookmarked.

      - If the user hasn't bookmarked any posts, a message saying that appears on the screen:
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700651095/no-results-bookmarks_fsntzf.png)
      
    - **Favorites:**

      - When the user clicks on "Favorites", they will be directed to a page where they can find all the posts by the users they have in their favorite list.

        ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700651095/no-results-favorites_umb7g0.png)
     
    - **Following:**

      - When the user clicks on "Following", they will be directed to a page where they can find all the posts by the users they follow.

        ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700651095/no-results-following_w9a3tl.png)
    
    - Clicking "Sign out" logs out the user and directs to the home page.
    
    - The avatar and "Explorer" takes the user to their explorer profile.
  
- On smaller devices, the navigation bar is displayed using a hamburger menu:

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700837644/hamburger-menu-logged-out_gsr683.png)

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700837821/hamburger-menu-with-dropdown-closed_s0gyjr.png)

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700837390/hamburger-menu-with-dropdown-opened_lirn9t.png)

#### Search

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700435547/search_ietn9p.png)

The message displayed when there are no results found:

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700678762/no-results-search_iyl2lc.png)

- **Filter posts by region:**
 
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700436195/search-by-region_vgnqrj.png)

- **Search by typing in:**

  The user can search posts by post title or the name of the author/explorer.

- **Reset your search filter:**
  
  When the user chooses some region from the dropdown menu or types something in the search bar, "Reset your search filter" button appears on the screen.

    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700773158/reset-your-search-filter_a6hrv2.png)

    By clicking the button, the user resets the search.


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

#### Posts page

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700658316/post-header_psllue.png)
![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700658317/post-image_rj77dw.png)
![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700658317/post-info_f0liak.png)

Each post contains the following features:

- Avatar and the username of the author/explorer.
- The date the post was published.
- Post image.
- Post title.
- Post description.
- Place/location the image where the image was captured.
- The region in which the image was taken.
- Comment icon with the number of comments.
- Like icon with the number of likes.
  - Logged in users can like/unlike posts.
- Bookmark icon with the number of bookmarks.
  - Logged in users can bookmark posts/remove bookmarks from posts.

#### Post Detail page

When the user clicks on the post, they are redirected to the post's detail page.

The post information remains the same, but extra features are now available:

- **Comments:**

  - All the users get access to the comments:
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671196/comments_oar9ef.png)
  - Users who are not logged in are prompted to log in if they want to leave comments:
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671314/no-comments-unlogged-user_ia4pub.png)
  - Logged-in users can:
      - Like/unlike comments left by other explorers.
      - Leave comments:
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671003/no-comments-logged-in-users_ry3mrf.png)

  - Comment owners can update/delete their comments:
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700670772/edit-delete-comment_dmxi9c.png)

    - **Edit:**
    
      - Clicking the "edit" icon, the user is redirected to the pre-populated comment edit page.
    
    - **Delete:**
      
      Clicking the "delete" icon, a delete confirmation modal appears on the screen.
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671870/comment-delete-confirmation_lg2xax.png)

      - Clicking the "Yes!" button deletes the comment and removes it from the post detail page.

      - Clicking "Cancel" closes the modal, keeping the user on selected posts detail page.    

- **Edit/delete functionality for the post owners:**

  The dropdown menu is displayed just beside the "created_at" date:
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671525/edit-delete-post_xrksgl.png)
  
  - **Edit:**
    
    - Clicking the "edit" icon, the user is redirected to the pre-populated post edit page.
   
  - **Delete:**
      
    Clicking the "delete" icon, a delete confirmation modal appears on the screen.
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671722/post-delete-confirmation_nwr1qi.png)

    - Clicking the "Yes!" button deletes the post and removes it from the posts page. The user gets redirected to the home page.

    - Clicking "Cancel" closes the modal, keeping the user on selected posts page.

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

#### Explorer profiles

- All the explorer profiles have the same structure. 

- Bio, region, and dream destination are optional fields.

- There are a few discrepancies between the user's profile and profiles of other explorers.

  - **User's own profile** (_with the optional fields filled in_):
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700676004/own-profile-with-details_zwzub1.png)
    
    - It is not possible for the user to follow themselves.

    - The user cannot either add themselves to their favorite list.

    - They can update their profile by clicking on the hamburger menu at the right top of the page.
    
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700677087/profile-edit-functionality_mt1rge.png)
      
      - Choosing to edit the explorer profile, the user is redirected to the explorer edit page with pre-populated fields.

      - Choosing to change the username takes the user to the form below.
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700676004/change-username_kyqwmn.png)

      - When choosing to change password, the user redirects to the form below.
      ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700676004/change-password_zemrds.png)

      - Clicking the "Save" button (in all the edit forms) saves the user's changes and takes the user back to their profile.

      - Clicking the "Cancel" button just takes the user back to their profile.

  - **Other explorer's profiles** (_this explorer chose not to fill in the optional fields_):
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700676004/others-profiles_yf7oxm.png)

    - The user can follow/unfollow other explorers.

    - The user can even add other explorers into their favorite list by clicking the "Fan" button. They can remove other explorers from the list by clicking the "Unfan" button.

    - It is NOT possible to edit another explorer's profile.


#### Success messages

The user gets feedback on their successful actions. Feedback is provided for the actions performed with posts, comments, and explorer profile. The user gets a feedback even when signing up, signing in and signing out. Please find additional information and images displaying the exact messages below.

- **Posts:**
  
  <details><summary>Creating</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-create-post_aqyvum.png)
  </details>

  <details><summary>Updating</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700768000/success-edit-post_huo5gn.png)
  </details>

  <details><summary>Deleting</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-delete-post_cwqcy6.png)
  </details>

- **Comments:**
  
  <details><summary>Creating</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-create-comment_wvciyu.png)
  </details>

  <details><summary>Updating</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-edit-comment_gyregg.png)
  </details>

  <details><summary>Deleting</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-delete-comment_vmeqdy.png)
  </details>

- **Profile:**

  <details><summary>Editing an explorer profile</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700768000/success-edit-profile_vusdrx.png)
  </details>

  <details><summary>Changing username</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700768000/success-edit-username_mdjjim.png)
  </details>

  <details><summary>Changing password</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700767999/success-edit-password_bcoe4r.png)
  </details>

- **Authentication:**
  
  <details><summary>Signing up</summary>
  
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700779156/success-sign-up_zn6r0o.png)
  </details>

  <details><summary>Signing in</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700779156/success-sign-in_ya80ah.png)
  </details>

  <details><summary>Signing out</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700779156/success-sign-out_qlg9wm.png)
  </details>

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

<details> 
<summary>Success messages</summary>

*All the messages automatically disappear after 3 seconds.

Images of the success messages can be found [here](#success-messages).

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Sign up | When a user successfully signs up, a message indicating success should appear and disappear automatically*. | Click the Sign Up link in the navbar. | The "Thanks for signing up, ${username}! Nice to have you here! Please sign in to get access to your profile and other site features." message appears on the screen. | Pass |
| Sign in | When a user successfully signs in, a message indicating success should appear and disappear automatically*. | Click the Sign in link in the navbar. | The "Welcome ${username}! Nice to see you here!" message appears on the screen. | Pass | 
| Sign out | When a user successfully signs out, a message indicating success should appear and disappear automatically*. | Click the Sign out link in the navbar. | The "You have successfully signed out!" message appears on the screen. | Pass | 
| Publishing a post | When a user successfully publish a post, a message indicating success should appear and disappear automatically*. | Go to the "Add Post" page, fill out each field accurately, and press "Create". | The "You have successfully created a post" message appears on the screen. | Pass | 
| Editing a post | When a user successfully updates a post, a message indicating success should appear and disappear automatically*. | Go to one of the posts published by you, click on the dropdown menu, choose the "Edit" icon, make some changes and press "Save". | The "You have successfully updated your post" message appears on the screen. | Pass |
| Deleting a post | When a user successfully deletes a post, a message indicating success should appear and disappear automatically*. | Go to one of the posts published by you, click on the dropdown menu, choose the "Delete" icon, and click the "Yes!" button when being asked if you are sure. | The "You have successfully deleted your post!" message appears on the screen. | Pass |
| Posting a comment | When a user successfully posts a comment, a message indicating success should appear and disappear automatically*. | Go to the post detail page, type your comment and press "Post". | The "Your comment has successfully been published!" message appears on the screen. | Pass | 
| Updating a comment | When a user successfully updates a comment, a message indicating success should appear and disappear automatically*. | Go to one of the comments posted by you, click on the dropdown menu, choose the "Edit" icon, make some changes and press "Update". | The "You have successfully updated your comment!" message appears on the screen. | Pass |
| Deleting a comment | When a user successfully deletes a comment, a message indicating success should appear and disappear automatically*. | Go to one of the comments posted by you, click on the dropdown menu, choose the "Delete" icon, and click the "Yes!" button when being asked if you are sure. | The "You have successfully deleted your comment!" message appears on the screen. | Pass |
| Editing explorer profile | When a user successfully edits their explorer profile, a message indicating success should appear and disappear automatically*. | Go to your explorer profile, click on the dropdown menu located in the left top corner, choose the "Edit explorer profile" option, make some changes and press "Save". | The "Your profile has been updated successfully!" message appears on the screen. | Pass |
| Changing username | When a user successfully changes their username, a message indicating success should appear and disappear automatically*. | Go to your explorer profile, click on the dropdown menu located in the left top corner, choose the "Change username" option, make some changes and press "Save". | The "Your username has been updated successfully! Your new username is now visible for all the users." message appears on the screen. | Pass |
| Changing password | When a user successfully changes their password, a message indicating success should appear and disappear automatically*. | Go to your explorer profile, click on the dropdown menu located in the left top corner, choose the "Change password" option, change your password and press "Save". | The "Your password is updated successfully! Sign in with your new password next time." message appears on the screen. | Pass |


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