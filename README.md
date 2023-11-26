# With Travel In Mind

"With Travel In Mind" is an online application designed to foster a community of travelers who share their experiences and knowledge about various destinations. The platform allows users to interact with each other by following, adding to favorites, commenting, bookmarking, and liking posts and comments. Whether you're a seasoned traveler or a novice explorer, With Travel In Mind is the perfect platform to connect with like-minded wanderers and discover new destinations.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701008098/am-i-responsive_lwoi4o.png)

# Table of Contents

- [User Experience](#user-experience)
  - [Strategy](#strategy)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)

- [Existing Features](#existing-features)
  - [Navigation Bar](#navigation-bar)
  - [Search](#search)
  - [Add Post](#add-post)
  - [Sign Up](#sign-up)
  - [Sign In](#sign-in)
  - [Posts Page](#posts-page)
  - [Post Detail page](#post-detail-page)
  - [Popular Explorer](#popular-explorers)
  - [Hottest Posts](#hottest-posts)
  - [Explorer Profiles](#explorer-profiles)
  - [Success messages](#success-messages)

- [Testing](#testing)
  
- [Fixed Bugs](#fixed-bugs)

- [Deployment](#deployment)


## User Experience

I employed the design thinking process to create a website with only essential information, resulting in easy navigation for users.

Throughout the entire development process, I followed the Agile methodology, which involved careful planning and continuous improvement until the final product was completed. To stay organized and on track, I made use of a GitHub project and a [Kanban board](https://github.com/users/Kattis91/projects/4). For more details on the User Stories, please refer to the subsection below ⇩.

### Strategy

All my User Stories can be found [here](https://github.com/Kattis91/with-travel-in-mind/issues).

During the planning process, the project was divided into 39 User Stories, each belonging to an Epic and labeled according to MoSCoW Prioritization, indicating the importance of the feature. 

To manage and structure the workload, the User Stories were grouped into three iterations. Each iteration was carefully planned to ensure that no more than 60% of the must-have User Stories were included. 

During the development, I had to make some adjustments to the plan and rearrange some items to achieve better workflow. However, I was still able to maintain control of the situation and ensure that everything was completed on time.

All the User Stories include Acceptance Criteria and Tasks.

Once a User Story was completed, it was marked as closed to keep track of the progress.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700864751/user-story_snskaa.png)

#### Key Project Goal

The goal is to create a community platform that connects travelers and allows them to share their experiences and the excitement of discovering new destinations. The platform is designed to be user-friendly and fosters a sense of community among travelers. Everybody should feel welcome!

#### Target Audience

Are you an experienced traveler and have lots to share? Feel free to share your treasures with others here.
Or are you busy with other things right now and only have travel in mind?
Join the community and gain inspiration for your upcoming travels. 

### Structure

The website is organized into several sections, including some that are only available to logged-in users. All visitors can view detailed information about each post. However, logged-in users have additional privileges, such as publishing, editing, and deleting their own posts, as well as interacting with other posts by liking, bookmarking, and commenting on them. The website is designed to facilitate easy searches for posts by allowing users to search by post title or author username or by sorting posts by region. Logged-in users can even sort posts by going to the page with only bookmarked posts or posts by people they follow or have in their favorite list.

For more detailed information about mentioned features and all the other features see section [Existing Features](#existing-features).

### Skeleton

I created Wireframes using [Figma](https://www.figma.com/).

<details>
<summary>Home page</summary>
LEFT: all users | RIGHT: logged-in users.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-homepage_dfcdre.png)

</details>

<details>
<summary>Post detail page</summary>
LEFT: all users | RIGHT: logged-in users.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-detail-page_zprbxh.png)

</details>

<details>
<summary>Add a Post | Edit a Post</summary>
Add and edit post pages share the same wireframe, with the only difference being that the edit form is pre-populated with existing post data.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-add-post-page_do9liq.png)

</details>

<details>
<summary>Explorer Profile Page</summary>
LEFT: all users | RIGHT: logged-in users.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-explorer-page_dtu42y.png)

</details>

<details>
<summary>Sign Up Page</summary>

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-sign-up-page_zmse4u.png)

</details>

<details>
<summary>Sign In Page</summary>

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700854853/wireframes-sign-in-page_e2vfgz.png)

</details>

### Surface

#### Colour Schema

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

  - When hovering over the | "Follow" | "Create" | "Save" | "Update" | "Post" | "Yes" | buttons. 

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

#### Typography

The website primarily uses the **'Ubuntu'** font and has a fallback of Sans-Serif in case Ubuntu fails to load. This font is easy to read despite the platform's low usage of text.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700847347/ubuntu-font_psl0k6.png)


## Existing Features

### Navigation Bar

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

### Search

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


### Add Post

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

### Sign Up

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

### Sign In

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

### Posts page

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

### Post Detail page

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

### Popular explorers

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

### Hottest posts

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

### Explorer profiles

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


### Success messages

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

### Testing of User Stories

#### Iteration 1

| User Story | How are they achieved? | EPIC | Label |
|------------|------------------------|------|-------|
| As a User I can sign up so that I can create a profile. | The user can easily register by creating a username and password, and then confirming the password. After successful registration, the user is provided with feedback and redirected to the sign-in page. | Authentication | Must-Have |
| As a User I can sign into my account so that I can access all the site's features. | The user can log in by entering their registered username and password. The "Add Post" link, "For You" dropdown menu, and a link to the user's explorer profile appear in the navbar. The user gets the opportunity to like, comment, and bookmark posts, follow other users and add them into the favorite list, like comments, and update/delete comments/posts, as well as update explorer profile, username, and password. |  Authentication | Must-Have | 
| As a User I can sign out of my account so that I can close the application and navigate away from the page. | The user can easily sign out by clicking the "Sign out" link in the navigation bar. After successful sign out, the user is redirected to the home page of the site. | Authentication | Must-Have |
| As a User I can view a navbar from every page so that I can easily navigate between pages. | Navbar links at the top of the page have easily understandable names. The navbar looks different for logged-in and unlogged users(see below for more details). It appears consistently on every page, making navigation more convenient. The navbar is responsive and is presented in the form of a hamburger menu on smaller devices. | Navigation Bar | Must-Have |
| As a User I can see the appropriate site access options so that I can easily access links to change my login status. | When a user is logged in, the navigation bar displays links to "Add Post", profile and Sign out pages, along with the "For You" dropdown menu containing links to bookmarks, following, favorites feeds. | Navigation Bar | Must-Have |
| As a logged-in User I can post an image so that I can share my travel experience with others. | When logged in, the user can easily publish a post by clicking the "Add Post" link in the navbar and filling out the form. | Posts | Must-Have |
| As a User I can navigate through pages quickly so that I can view content seamlessly without page refresh. | All the links work as they should. Clicking the links, the user is redirected to the pages the links are for. | Navigation Bar | Should-Have | 
| As a User I can click on a post to view the full post details so that I can find out more information about the post | All the posts are displayed on the homepage and are accessible to all users. When a user clicks on either the post image or the post title, they will be redirected to a new page where they can view comments related to the post, as well the post information that was previously visible on the homepage. | Posts | Should-Have |
| As a User I can search for posts with keywords so that I can find the posts and explorers I am curious about at the moment.| The search functionality is accessible to all users on all post pages. The user can search post by the author/title/place or filter them by choosing a region in the dropdown menu. | Posts | Should-Have |
| As a User I can use a default profile image so that I don’t have to upload my own. | Upon signing up, users receive a default profile image which they can later choose to change by uploading their own. They can also keep the default image. | Explorer | Should-Have |
| As a logged-in User I can like other users' posts so that I can show my appreciation to the author. | All logged-in users, except the post owner, can like posts, which increases the number of likes. | Likes | Should-Have |
| As a logged-in User I can unlike a post so that I can remove a like if I don't want to like the post anymore. | All users who previously liked the post can unlike it, causing the number of likes to decrease by one (per like). | Likes | Could-Have |

#### Iteration 2

| User Story | How are they achieved? | EPIC | Label |
|------------|------------------------|------|-------|
| As a logged-in User I can update my own posts so that correct errors or add new information. | If a user wishes to update or add information to the post they have published, they can click on the dropdown menu followed by the "EDIT" icon. This will take the user to a prepopulated form where they can make the desired changes. | Posts | Must-Have |
| As a logged-in User I can delete my own posts so that I can remove the ones I don’t want to share anymore. | If a user wishes to delete a post they have published, they can click on the post's title or image, which will take them to the post's detail page. On this page, they can access the dropdown menu and click on the "DELETE" icon. The user will be redirected to a confirmation page, where they will have the option to either delete the post or return to the detail page. | Posts | Must-Have |
| As a logged-in User I can comment on posts so that I can engage with the community and the author. | The comment form is visible to all logged-in users. The user can leave a comment by typing in the form and clicking the "Post" button. | Comments | Must-Have |
| As a logged-in User I can edit my comment so that I can correct mistakes. | If a user wants to make any changes or add more information to a comment they've already created, they can do so by clicking on the dropdown menu located on the right side of the comment, and then selecting the "EDIT" icon. This action will redirect them to a pre-populated form, where they can easily make the desired changes. | Posts | Must-Have |
| As a logged-in User I can delete a comment posted by me so that I can remove the ones I don't want to be posted. | If a user wishes to delete a comment they have created, they can click on the dropdown menu located on the right side of the comment, and then select the "DELETE" icon. The user will be redirected to a confirmation page, where they will have the option to either delete the comment or return to the detail page. | Posts | Must-Have |
| As a User I can see a list of all posts so that I can browse through them and find inspiration. | All posts are displayed on the homepage, with the latest at the top. Users can scroll down to load more in groups of ten. | Posts | Must-Have |
| As a logged-in User I can add other users to my favorite list so that I easily see the latest from accounts I like the most. | The user can easily become fan of another explorer. They can do that by visiting explorer's profile (when logged in) and click the "Fan" button. | Favorites | Must-Have |
| As a User I can view other explorers' profiles so that I can see their posts and learn more about them. | All users can see other explorer's profiles by clicking on the explorer's explorer image or username of the user they are curious about. The information that is always displayed about every user is the number of posts, number of followers and favorites, and number of users the explorer is following and has on the favorite list. Bio, region and dream destination are optional fields. The user's actual posts, if any, are displayed after all the information. | Explorers | Must-Have |
| As a User I can view all the posts by a specific explorer so that I can catch up on their latest posts. | The user can see all the posts of the specific explorer by visiting their profile (see the User Story above for more details). | Explorers | Should-Have |
| As a User I can easily view the most followed explorers so that know which popular profiles to check out. | The user can see the most followed profiles on the right side of the page on desktop and at the top on mobile. | Explorers | Should-Have |
| As a logged-in User I can follow another user so that I easily can stay updated with any new posts that they create. | The user can easily follow another explorer. They can do that by visiting explorer's profile (when logged in) and click the "Follow" button or follow them by clicking the same button in the "Follow these popular explorers" container. | Follow | Should-Have |
| As a User I can view comments on posts so that can read what other users think about the posts. | All users, regardless of their login status, can view post comments shown on the post detail page. A clear message is displayed if there are no comments yet. | Comments | Could-Have |

#### Iteration 3

| User Story | How are they achieved? | EPIC | Label |
|------------|------------------------|------|-------|
| As a logged-in User I can bookmark different posts so that I can save and revisit them later. | All logged-in users can bookmark posts. It is possible to do by clickin the bookmark icon under the post. The bookmarked posts can be viewed on the "Bookmarks" page. | Bookmarks | Must-Have |
| As a logged-in User I can remove bookmark labels from posts so that they are no longer displayed on the bookmarks page. | The user can remove the bookmark by clicking on the bookmark icon under the post they earlier have bookmarked. The post gets removed from the "Bookmarks" page. | Bookmarks | Must-Have |
| As a User I can get corresponding feedback after taking an action so that I know whether my actions were successfully run or not. | The user receives feedback for various actions such as publishing, updating, or deleting a post or comment, updating their explorer profile, and signing in, up, or out. | Explorers | Must-Have |
| As a logged-in User I can edit my explorer profile so that I can update my page with my latest details. | Logged-in users can edit their profile information, including image, bio, information about the region they would like to visit and their dream destination. They can do so by selecting the hamburger menu while being on their Explorer page and choosing the "Edit Explorer profile" option. | Explorers | Must-Have |
| As a logged-in User I can update my password so that I can keep my profile secure. | Logged-in users can edit their password. They can do so by selecting the hamburger menu while being on their Explorer page and choosing the "Change password" option. | Explorers | Should-Have |
| As a User I can see the top 10 posts so that I can see what posts are the most popular. | The user can see the hottest posts on the right side of the page on desktop  and at the top on mobile (below the "Follow these popular explorers" container). The number of posts displayed on mobile is limited to three. | Posts | Should-Have |
| As a logged-in user I can view content filtered by explorers I have in my favorite list so that I can stay up-to-date with their posts. | When the user adds explorers to their favorites, their posts appear on the "Favorites" page accessible through the "For You" dropdown menu. | Favorites | Should-Have | 
| As a logged-in User I can remove other users from my favorite list so that I can remove updates of that user from my "Favorites" page. | The user can easily remove other explorers from their favorite list by visiting explorer's profile (when logged in) and click the "Unfan" button. All the posts of the "unfaned" explorer can no longer be seen on the "Favorites" page. | Favorites | Should-Have |
| As a logged-in User I can like other users' comments so that I can show my appreciation to their opinion. | All logged-in users, except the comment owner, can like comments, which increases the number of commentlikes. | Comments | Should-Have |
| As a User I can scroll endlessly through the posts list so that I don't have to click 'next' to view more. | When 10 posts are viewed, the next 10 posts load automatically. The user doesn't need to do anything to achieve that. | Posts | Should-Have |
| As a User I can scroll endlessly through the comments list so that I don't have to click 'next' to view more comments. | When 10 comments are viewed, the next 10 comments load automatically. The user doesn't need to do anything to achieve that. | Comments | Should-Have |
| As a logged-in User I can unfollow other explorers so that I can remove updates of that user from my feed. | The user can easily unfollow other explorers they follow. They can do that by visiting explorer's profile (when logged in) and click the "Unfollow" button or unfollow them by clicking the same button in the "Follow these popular explorers" container. | Follow | Should-Have |
| As a logged-in user I can view content filtered by explorers I follow so that I can stay up to date with their posts. | When the user follows another explorer, that explorer's posts appear on the "Following" page accessible through the "For You" dropdown menu. | Follow | Could-Have |
| As a logged-in User I can change my username so that other users will see my updated username on my profile. | Logged-in users can edit their username. They can do so by selecting the hamburger menu while being on their Explorer page and choosing the "Change username" option. | Explorers | Could-Have |
| As a User I can filter the posts list by category so that I can easily see all posts relating to one particular category. | All users can filter posts by choosing a region in the dropdown menu at the top of all posts pages. If no posts match the selected region, a message will inform the user. | Posts | Could-Have |

### Validator Testing

#### HTML

Validator: [W3C Validator](https://validator.w3.org/)

All the pages passed through the validator without any errors and warnings to show.

- **Home Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Explorer Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Edit Explorer Page | Edit username Page | Edit password Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Add Post Page | Edit Post Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Post Detail Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Bookmarks Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Following Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

- **Favorites Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

#### CSS

Validator: [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator).

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/css-validator_md8sv5.png)


#### JavaScript

Validator: [ESLint](https://eslint.org/).

All JavaScript files in the "With Travel In Mind" project have been run through the JavaScript ESLinter. 

The following errors were corrected:

- **`'React' must be in scope when using JSX`**
  
  _The solution_:

  Update the extends to look like below:

  ````
  module.exports = {
    extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
    ]
  }
  ````

- **`'React' is defined but never used`**

  _The solution_: 
    
  Install the following module `npm install --save-dev eslint-plugin-react`. 'plugin:react/recommended is already added ino extends in the .eslintrc.js file.
    
- **`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`**. 
  
  _The solution_:

  Take the text inside template literals: `{`${explorer?.owner}'s posts:`}`
  
  Click [here](https://stackoverflow.com/questions/73271987/19259-error-can-be-escaped-with-apos-lsquo-39-rsquo-r) to come to the source.

- **`Do not pass children as props. Instead, nest children between the opening and closing tags`**
  
  _The solution_:

  As the code is based on the code provided by Code Institute I chose to ignore that by disable the line: `eslint-disable-next-line` 

  Click [here](https://stackoverflow.com/questions/71097299/how-can-i-resolve-reactmarkdown-that-uses-children-as-a-prop-w-error-do-not-p) to come to the source.

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

- It has been identified that the React Bootstrap mobile Navbar has an issue where the Collapse burger menu does not automatically close after a selection is made. I tried using the solution suggested in the CI Moments walkthrough by creating the useClickOutsideToggle.js component. However, I found that this solution only works for a simple list of links and not for additional dropdown menus. I have three links in the dropdown menu, and I couldn't reach them because the navbar closed automatically when clicking on the dropdown header.

  My first solution was to delete UseClickOutsideToggle.js and toggle the links manually by using onClick event.

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701010028/on-click_ikhpz5.png)

  However, it caused another issue, which was poor cooperation with the "Add Post" link.
  When the user clicked on the "Add Post" link, the entire hamburger menu opened and was over the "Add Post" form.
  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701009310/hamburger-menu-bug_qkfce9.png)

  The menu toggled again when the user clicked the "Add Post" link one more time or when it was clicked after first opening the hamburger menu, but it was a poor user experience.

  **Fix:** Move the "Add Post" link to loggedInIcons so it ends up in the hamburger menu along with the other links. The burger menu only closes when some link is clicked; clicking outside the menu does not close it, but I find this behavior acceptable, at least for now.

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