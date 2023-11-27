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

- [Reusable Components](#reusable-components)

- [Testing and Validation](#testing-and-validation)
  
- [Fixed Bugs](#fixed-bugs)

- [Credits](#credits)
  - [Media](#media)
  - [Content](#content)
  - [Acknowledgements](#acknowledgements)

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

## Technologies Used

### Languages

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - defines the meaning and structure of web content.

- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - provides the styling for the website.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - provideds the interactivity and front-end functionality for the website.

### Frameworks, Libraries & Programs

- [React](https://react.dev/) - a free and open-source front-end JavaScript library for building user interfaces based on components. 

- [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - one of the oldest React libraries that helps to build solid, responsive, mobile-first sites.

- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - A set of web developer tools built directly into the chrome browser. Used to test responsiveness and debug.

- [Google Fonts](https://fonts.google.com/) - A web based font service by Google used to supply the site typography.

- [Font Awesome](https://fontawesome.com/) - A font and icon toolkit used for the "With Travel In Mind" icons.

- [Responsive Design Checker](https://www.responsivedesignchecker.com/) - used to check the site's responsiveness on the range of different devices.

- [Am I Responsive?](https://ui.dev/amiresponsive) - used to see how the site looks on four different screen sizes. 
  <details>
  <summary>The screen sizes</summary>

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701019154/responsiveness_diepvr.png)

  </details>

- [FreeLogoDesign](https://www.freelogodesign.org/) - used to create the "With Travel In Mind" logo.

- [Cloudinary](https://cloudinary.com/) - The cloud platform used to store the images.

- [Git](https://git-scm.com/) - Version control system used in this project.

- [GitPod](https://www.gitpod.io/) - The IDE used to create the project.

- [GitHub](https://github.com/) - The code hosting platform used to save and store the files for this repository.

- [Heroku](https://www.heroku.com/) - The cloud platform used to deploy the project into live environment.

- [SweetAlert2](https://sweetalert2.github.io/) - the library used to add Alert functionality to the app.

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

  The user can search posts by post title, place or the name of the author/explorer.

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

- This section will showcase the posts published by the user.

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

## Reusable Components

Several reusable React components were created to reduce code duplication.

**`Asset.js`**

The asset component is utilized throughout the site to display a loading spinner from react-bootstrap while content is being processed.
The component is used on the following pages:

- ExplorerPage.js
- PopularExplorers.js
- PopularPosts.js
- PostCreateForm.js
- PostDetail.js
- PostsPage.js

**`Avatar.js`**

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701030956/avatar_ya1mft.png)

This component displays the user's profile image, which can be customized or set to the default image. The default height is set to 55. The component is used on the following pages:

- Comment.js
- CommentCreateForm.js
- Explorer.js
- Post.js

**`EditDeleteDropdown.js`**

 The component is accessed for editing or deleting posts and comments, and for updating the explorer profile. 

**`ModalDeleteConfirmation.js`**

To enhance the defensive design of the website, I implemented a validation check to ensure that data is not deleted accidentally. To achieve this, I have created a modal component that prompts the user to confirm their choice before deleting data from the site. The modal component is triggered when the user clicks on the delete icon in the hamburger menu (EditDeleteDropdown component) for a post or a comment. This component verifies the type of data that the user intends to delete and customizes the confirmation message accordingly. Once the user clicks on the "Yes!" button, the corresponding handleDelete function is executed, and the data is permanently removed from the site.

**When choosing to delete a post:**

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671722/post-delete-confirmation_nwr1qi.png)

**When choosing to delete a comment:**

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1700671870/comment-delete-confirmation_lg2xax.png)


**`Navbar.js`**

The nav bar component is a crucial element of the website that manages the main site navigation menu. It incorporates a function to sign out the user. The icons are sorted into two groups, one for logged-out users and the other for logged-in users. The appropriate icons are displayed based on whether the user is authenticated or not.

Click [here](#navigation-bar) to find more information about Navigation bar.

## Testing and Validation

Detailed testing of the site can be found at [TESTING.md](TESTING.md). 

Testing includes following:

- Validator testing
- Responsivness & Browser Compability Testing
- Manual Testing
- Testing of User Stories

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

- If the user did not refresh the page, the search filter was not reset. I considered it a poor user experience because if the user didn't know they needed to refresh the page, they could be confused and think that the site had hanged. Additionally, if the user navigated to some of feed pages (Bookmarks | Following | Favorites) without refreshing the page beforehand, the previous search parameters would carry over and restrict the results. For instance, if the user performed a search for posts tagged with the region "Africa" and then proceeded to the bookmarks page, they would only be able to view bookmarked posts that belonged to the selected region.

  **Fix:**

  - Create the clearFilters function:
  
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701099827/createFilters_bwkhyx.png)

  - Add a ternary condition to call the function and display "Reset your search filter" button only on region selection or keyword input.
  
    ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701099827/reset-filter-button_m0ykav.png)


## Credits

### Media

- All the images posted on the site were taken by me or other people who was testing my site.

- [FreeLogoDesign](https://www.freelogodesign.org/) was used to create the "With Travel In Mind" logo.

- [Favicon Generator](https://favicon.io/favicon-converter/) was used to generate a favicon from the logo.

- [Font Awesome](https://fontawesome.com/) was used to add the icons to the Logo, Navbar links, post cards and dropdown menus.

- [Am I Responsive?](https://ui.dev/amiresponsive) was used to see how the site looks on four different screen sizes. 

- [unDraw](https://undraw.co/search) was used for displaying no-results and upload images.

### Content

- Code Institute's Advanced Front-end "Moments" walkthrough project served as inspiration and template for With Travel In Mind. Code was customized and expanded for further functionality.

- I used this article on [Stack Overflow](https://stackoverflow.com/questions/76969410/importerror-allauth-needs-to-be-added-to-installed-apps) to solve the problem with the Navbar's logged-in and logged-out view failing upon signing in. Click [here](#fixed-bugs) and read the first issue to get more details about the solution.

- Instructions and inspiration on how to reset the search filter was found in [this](https://stackoverflow.com/questions/66379498/how-to-reset-my-filter-options-to-their-initial-blank-state-react) Stack Overflow article.

- With the help of [this](https://stackoverflow.com/questions/74719490/how-to-test-a-dropdown-component-in-react-using-react-testing-library-jest) I got a better understanding on how to test (using JEST) whether the NavBar is rendering the links to the Bookmarks, Following and Favorites pages when clicking "For you" dropdown menu.

- [CODEMOTO](https://codemoto.io/coding/react/react-delete-confirmation-modal) provided me with the knowledge about creating the Reusable React Delete Confirmation Modal.

- [TutorialsPoint](https://www.tutorialspoint.com/how-to-align-the-modal-content-box-to-the-center-of-any-screen) was the source I used to decide the position of my Modal box.

- Information on how to use [SweetAlert2](https://sweetalert2.github.io/) library with React is taken from [this] Medium's article.

### Acknowledgements

I would like to express my gratitude towards:

- My mentor Jubril for providing me with exceptional briefings, constructive feedback, and valuable tips.

- Kay, the team facilitator, for consistently and patiently answering my questions during our Monday sessions.

- Sarah, Gemmma, Martin, Oisin, Holly, Sean and Joanne on the Tutor Assistance Team for helping me out with diverse things throughout the project.

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