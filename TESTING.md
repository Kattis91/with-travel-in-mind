# With Travel In Mind testing

:back: [Go back to README](README.md)

## Table of contents

- [Validator Testing](#validator-testing)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)

- [Responsivness & Browser Compability Testing](#responsivness--browser-compability-testing)

- [Manual Testing](#manual-testing)

- [Automated Testing](#automated-testing)

- [Testing of User Stories](#testing-of-user-stories)
  - [Iteration 1](#iteration-1)
  - [Iteration 2](#iteration-2)
  - [Iteration 3](#iteration-3)

## Validator Testing

### HTML

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

- **Not Found Page**

  ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/html-validator_yxcwlw.png)

### CSS

Validator: [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator).

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701002515/css-validator_md8sv5.png)

### JavaScript

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

[Back to top ⇧](#table-of-contents)

## Responsivness & Browser Compability Testing

- In order to thoroughly test my website, I conducted a series of tests on various browsers including Google Chrome, Safari, and Mozilla Firefox.

- I also tested on multiple devices such as:
  - Laptop:
    - Dell xps 13.
  - Mobile Devices:
    - iPhone XS, 
    - Google Pixel 6a, 
    - Samsung Galaxy S10,
    - iPhone 15.

- I made sure to check every page using Google Chrome developer tools to confirm their responsiveness on various screen sizes.

- I used [Responsive Design Checker](https://www.responsivedesignchecker.com/) to check the site on the range of different devices.

  <details>
  <summary>Check the results here</summary>

  | Screen | Result |
  |--------|--------|
  | 24" Desktop | :white_check_mark: |
  | 23" Desktop | :white_check_mark: |
  | 22" Desktop | :white_check_mark: |
  | 20" Desktop | :white_check_mark: |
  | 19" Desktop | :white_check_mark: |
  | 15" Desktop | :white_check_mark: |
  | 13" Notebook | :white_check_mark: |
  | 10" Notebook | :white_check_mark: |
  | Apple iPad Mini | :white_check_mark: |
  | Apple iPad Retina | :white_check_mark: |
  | Apple iPad Pro | :white_check_mark: |
  | Amazon Kindle Fire | :white_check_mark: |
  | Amazon Kindle Fire HD | :white_check_mark: |
  | Asus Eee 1000 | :white_check_mark: |
  | Nexus 7 | :white_check_mark: |
  | Nexus 9 | :white_check_mark: |
  | Samsung Galaxy Tab 10 | :white_check_mark: |
  | Apple iPhone 3/4/4s | :white_check_mark: |
  | Apple iPhone 5/5s | :white_check_mark: |
  | Apple iPhone 6/6s/7 | :white_check_mark: |
  | Apple iPhone 6s Plus/7 Plus | :white_check_mark: |
  | Samsung Galaxy S5/S6/S7 | :white_check_mark: |
  | Sony Xperia Z2/Z3 | :white_check_mark: |
  | Google Pixel | :white_check_mark: |
  | Nexus 4 | :white_check_mark: |
  | Nexus 5 | :white_check_mark: |
  | Nexus 6 | :white_check_mark: |

  </details>

## Manual Testing

<details><summary>Navigation bar</summary>

Available for all users:

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Logo  | When the user clicks on the Logo, they should be redirected to the home page of the site. | Click on "With Travel In Mind" in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| Home  | Clicking "Home" should redirect the user to the homepage of the site. | Click on "Home" in the navigation bar at the top of the page. | The user is redirected to the home page of the site. | Pass |
| Sign in | When the user clicks "Sign In" they should be redirected to the sign in page. | Click on "Sign In" in the navigation bar at the top of the page. | The user is redirected to the sign in page. | Pass |
| Sign Up | Clicking "Sign Up" should redirect the user to the registration page. | Click on "Sign Up" in the navigation bar at the top of the page. | The user is redirected to the registration page. | Pass |

Available for logged-in users only:

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Add Post | When the user clicks "Add Post", they should be redirected to a form page their they can fill in data and publish a post. | Click on Add Post in the navigation bar at the top of the page. | The user is redirected to the form page. | Pass |
| For you | Clicking "For you" should open a dropdown with three links. | Click on "For you" in tje mavigation bar at the top of the page. | The links for "Bookmarks", "Favorites" and "Following" appear on the screen. | Pass |
| For you. Bookmarks | Clicking "Bookmarks" should take the user to the page showing all the posts the user has bookmarked. | Click on "For You" and select "Bookmarks" from the dropdown menu that appears. | The user is redirected to the page containing only the user's bookmarked posts. | Pass |
| For you. Bookmarks. _No Results_ | If the user hasn't bookmarked any posts yet, a message saying that should be displayed. | Remove all your bookmarked posts, if any, and select "Bookmarks". | The "No results found. You need to bookmark some posts to get them displayed here.." appears on the screen. | Pass |
| For you. Favorites | When the user clicks "Favorites", they should be directed to a page that displays all posts from the explorers they have in their favorite list.| Click on "For You" and select "Favorites" from the dropdown menu that appears. | The user is redirected to the page containing posts only from the explorers they have in their favorite list. | Pass |
| For you. Favorites. _No Results_ | If a user has not added anyone to their favorites list or if the people they have added have not posted anything, a message should be displayed indicating that there are no posts to show. | First, remove any users from the favorites list. After that, select "Favorites".| The "It seems that you don't have any users on your favorite list or the ones you have added haven't posted anything yet. Go to the profiles you like the most and click the 'Fan' button to get their posts displayed here." message appears on the screen. | Pass |
| For you. Following | When the user clicks "Following", they should be directed to a page that displays all posts from the explorers they follow. | Click on "For You" and select "Following" from the dropdown menu that appears. | The user is redirected to the page containing posts only from explorers they follow. | Pass |
| For you. Following. _No Results_ | If a user is not following anyone or if those they follow have not posted anything, a message should be displayed indicating that there are no posts to show. | If you are currently following any users, please unfollow them first. After that, select "Following".| The "No results found. Either you are not following anyone, or those you follow haven't posted anything yet." message appears on the screen. | Pass |
| Sign out  | Clicking "Sign out" should log the user out and redirect them to the home page. | Click on "Sign out" in the navigation bar at the top of the page. | The user is logged out and redirected to the home page. | Pass |
| Explorer | When the user clicks "Explorer", they should be redirected to their own explorer profile. | Click on "Explorer" in the navigation bar at the top of the page. | The user is redirected to their profile page. | Pass |

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

<details> 
<summary>Search functionality</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Filter posts by category | By selecting a region in the dropdown menu, all posts belonging to the selected region should be displayed on the page. | Visit the posts page to view represented regions. Choose one of those regions in the dropdown menu. | ONLY posts within the selected region are displayed on the screen. | Pass |
| Filter posts by category. No posts to show | If there are no posts to show within the selected region, the user should get a message saying that. | Visit the posts page to view represented regions. Find a region that is NOT represented among posts. Choose that region in the dropdown menu. | The "No results found. Adjust the search keyword or choose another region.." message appears on the screen. | Pass
| Search by keyword | The user should be able to search posts by the post title, place and the name of the author/explorer. | Visit the posts page to view represented posts. Find some title/place/author you like and type that title/place/author or just some first letters of one of them in the search bar. | ONLY post with that title/place/author and posts containing the typed-in letters in either title, place or the author's name (in the exact order the user typed them in) appears on the screen. | Pass |
| Search by keyword. No posts to show | If there are no posts that matches the typed-in keyword, the user should get a message saying that. | _Quick test:_ Type some very random and strange letter combination. _Some research:_ You can also go to the posts page and check what titles/authors/places are represented so you can exclude them from your search. | The "No results found. Adjust the search keyword or choose another region.." message appears on the screen. | Pass |
| Reset your search filter | When choosing a region from the dropdown menu or typing in the keyword in the search bar, the "Reset your search filter" button should be displayed on the screen. | Choose a region in the dropdown menu or type something in into the search bar. | The "Reset your search filter" button appears on the screen just below the search bar. | Pass |
| "Reset your search filter" functionality. The dropdown menu. | When the "Reset your search filter" button is clicked, the dropdown menu should be reset automatically without requiring the user to refresh the page. Once the button is clicked, it should disappear immediately. | Choose a region from the dropdown menu. Click the "Reset your search filter" button. | The search filter is reset, causing the region dropdown menu to display the default "Region". The button is gone. | Pass |
| "Reset your search filter" functionality. The search bar. | When the "Reset your search filter" button is clicked, the search bar  should be reset automatically without requiring the user to refresh the page. Once the button is clicked, it should disappear immediately. | Type something into the search bar. Click the "Reset your search filter" button. | The search filter is reset, causing the search bar to become cleared. The button is gone. | Pass |

</details>

<details> 
<summary>Popular explorers</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Popular explorers. Desktop | Only top ten most popular explorers should be displayed on the page. | Create more than 10 profiles and check that only 10 of them are displayed in the "Follow these popular explorers" container. | Only 10 profiles are shown. | Pass |
| Popular explorers. Mobile | Only top four most popular explorers should be displayed on the page. | Create more than four profiles and check that only four of them are displayed in the "Follow these popular explorers" container. | Only four profiles are shown. | Pass |
| Popular explorers. Functionality | Explorer profiles should be displayed in descending order, with the profile with most followers at the top. | 1.Create a few profiles (I have five that are my "own") and follow different explorers a different number of times. Refresh the page and check that the profile with the most followers is at the top. 2. Give another explorer more followers than the one who is currently at the top. Refresh the page to check if the order has changed. | The profiles are displayed in the descending order, with the profile with most followers on top. | Pass |
| Redirecting | Clicking on both the avatar and the username should take the user to the selected explorer's profile.| 1. Choose an explorer and click on their avatar. 2. Click on the explorer's username. | The user is redirectd to the selected explorer's profile. | Pass | 
| Follow | Logged-in users should be able to follow explorers listed in the "Follow these popular profiles" container by clicking the "Follow" button next to the username. | Log in and click "Follow". | The user is now following the chosen profile (For more information see the Follow section) | Pass |

</details>

<details> 
<summary>Hottest posts</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Hottest posts. Desktop | Only top ten hottest posts should be displayed in the "Hottest posts right now" container. | Create more than ten posts and check that only ten of them are displayed in the container. | Only ten posts are shown. | Pass |
| Popular posts. Mobile | Only top three hottest posts should be displayed in the "Hottest posts right now" container. | Create more than three posts and check that only three of them are displayed in the container. | Only three posts are shown. | Pass |
| Popular posts. Functionality | Hottest posts should be displayed in descending order, with the post with most likes at the top. | 1.Create a few profiles (I have five that are my "own") and like different posts a different number of times. Refresh the page and check that the post with the most likes is at the top. 2. Like another post more times than the one  that is currently at the top. Refresh the page to check if the order has changed. | The posts are displayed in the descending order, with the post with most followers on top. | Pass |
| Redirecting | Clicking on both the post image and title should take the user to the selected post's detail page.| 1. Choose a post and click on the post's image. 2. Click on the post's title. | The user is redirectd to the selected post's detail page. | Pass | 

</details>

<details> 
<summary>Like | Unlike (available for logged-in users only)</summary>

When I haven't liked a post yet - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701121680/unliked_vhkp0x.png)
If I have liked the post - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701121300/liked_rpv3st.png)

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Liking a post | Logged-in users should be able to like other explorers' posts. Clicking the like icon should increase the number of likes by one. | Log in and like another user's post. | The number of likes is increased by one. | Pass |
| Trying to like own post | It shouldn't be possible for the user to like the post published by them. | Log in and try to like a post you have published. | The "You can't like your own post!" message appears above the like icon. | Pass |
| Unliking a post | Logged in users should be able to unlike the post they earlier have liked. Clicking the like icon should decrease the number of likes by one. | Log in and unlike the post you earlier have liked. | The number of likes is decreased by one. | Pass |
| Trying to like a post when not logged in | It shouldn't be possible for unlogged users to like posts. | Log out and try to click the like icon. | The "Log in to like posts!" message appears above the like icon. | Pass | 

</details>

<details> 
<summary>Bookmark | Remove bookmark (available for logged-in users only)</summary>

When I haven't bookmarked a post yet - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701122021/unbookmarked_xgq7dq.png)
If I have bookmarked the post - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701122021/bookmarked_qcjxbf.png)

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Bookmaring a post | Logged-in users should be able to bookmark all the posts, even the one's published by them. Clicking the bookmark icon should increase the number of bookmrks by one, and the post should be added to the bookmarks page. | Log in and bookmark a post. | The number of bookmarks is increased by one. The post is now visible in the bookmarks feed. | Pass |
| Removing bookmark from a post | Logged in users should be able to remove bookmarks from the posts they earlier have bookmarked. Clicking the bookmark icon should decrease the number of bookmarks by one, the post should be removed from the user' bookmarks page. | Log in and go to your bookmarks feed. Choose a post and click the bookmark icon to remove the bookmark. | The number of bookmarks is decreased by one, the post is no longer in the bookmarks feed. | Pass |
| Trying to bookmark a post when not logged in | It shouldn't be possible for unlogged users to bookmark posts. | Log out and try to click the bookmark icon. | The "Log in to bookmark posts!" message appears above the bookmark icon. | Pass | 

</details>

<details> 
<summary>Follow | Unfollow (available for logged-in users only)</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Follow | The user should be able to follow another explorer by clicking the "Follow" button either in the "Check these popular explorers" container or by visiting the explorer's profile. The user who clicks the "Follow" button should increase the number of followers for the chosen explorer by one, as well as their own "following" count. The posts of the followed explorer should now be visible on the "Following" page. | Log in and choose an explorer to follow. | The number of followers for the chosen explorer increases by one, the "following" count of the user who is now following another explorer is increased by one. The posts published by the followed explorer, if any, can be found in the following feed. | Pass |
| Unfollow | The user should be able to unfollow another explorer by clicking the "Unfollow" button either in the "Check these popular explorers" container or by visiting the explorer's profile. The user who clicks the "Unfollow" button should decrease the number of followers for the chosen explorer by one, as well as their own "following" count. The posts of the followed explorer should be removed from the "Following" page. | Log in and choose an explorer you want to unfollow. | The number of followers for the chosen explorer decreases by one, the "following" count of the user who has just unfollowed another explorer is decreased by one. The posts published by the unfollowed explorer, if any, are removed from the following feed. | Pass | 

</details>

<details> 
<summary>Fan | Unfan (available for logged-in users only)</summary>

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| Fan | The user should be able to add their favorite explorers into their favorite list by clicking the "Fan" button when visiting explorers' profiles. The user who clicks the "Fan" button should increase the number of fans for the chosen explorer by one, as well as their own "favorites" count. The posts of that chosen explorer should now be visible on the "Favorites" page. | Log in and choose an explorer that you want to add to your favorite list. | The number of fans for the selected explorer increases by one, the "favorites" count of the user, who has just added another explorer in their favorite list, is increased by one. The posts published by the selected explorer, if any, can be found in the favorites feed. | Pass | 
| Unfan| The user should be able to remove another explorer from their favorite list by clicking the "Unfan" button in the explorer's profile. The user who clicks the "Unfan" button should decrease the number of fans for the chosen explorer by one, as well as their own "favorites" count. The posts of the removed explorer should as well be removed from the "Favorites" page. | Log in and choose an explorer you want to remove from yourfavorite list. | The number of fans for the chosen explorer decreases by one, the "favorites" count of the user, who has just removed another explorer from their favorite list, is decreased by one. The posts published by the removed explorer, if any, are removed from the favorites feed.| Pass | 

</details>

<details> 
<summary>Comments</summary>

No comments - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701125616/no-comments_wvlzbx.png)
There is one comment left - ![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701125616/comented_dqlnc8.png)

| Feature | Expect | Action | Result | Pass/Fail |
|---------|--------|--------|--------|-----------|
| View comments | All users should be able to view comments. | Go to the detail page of the post that have some comments left (the number is greater than zero, see above). | All the comments for the selected post are diplyed below the post description and information. | Pass | 
| No comments. Logged-in user | If there are no comments on the recipe, the user should see a message saying that. | Find a post with zero comments and go to that post's detail page. | The "There are no comments for this post yet. Be the first to comment!" message appears on the screen. | Pass |
| No comments. Unlogged user | If there are no comments on the recipe, the user should see a message saying that. | Find a post with zero comments and go to that post's detail page. | The "No comments... yet. Log in to leave a comment!" message appears on the screen. | Pass |
| Leave a comment. For logged in users only. | Logged-in users should be able to leave comments under the posts. The number of comments should be increased by one. | Log in and choose a post you would like to comment. | The user can leave a comment by typing in the comment form and clicking the "Post" button. The comment is displayed and the number of comments is increased by one. | Pass |

**Description of comment edit and delete functionality** (everything works as it should) can be found in the [Iteration2](#iteration-2) in the Testing of User Stories section (see row 4-5).

</details>

<details><summary>Edit | Delete post</summary>

This functionality was thoroughly tested with different posts and different logged-in statuses, both by the owner and non-owners of the post (not possible).

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701141556/edit-delete-feature_wc6yee.png)

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701141555/edit-delet-post_wzytfo.png)

</details>

## Automated Testing

As part of the project, I conducted automated testing towards the end.

The walkthrough project "Moments" was my mainstay, along with this article for testing dropdown objects.

**Result:**

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701111931/automated-testing_c1wgir.png)

I had to ignore the warning below because "activeClassName" needs to be in uppercase to follow naming conventions. Removing it would also remove the class.

![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701111931/automated-testing-warning_fzpgw4.png)

[Back to top ⇧](#table-of-contents)

## Testing of User Stories

### Iteration 1

Following User Stories will be tested in this section:
![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701127125/iteration-1_e4kdx5.png)

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

[Back to top ⇧](#table-of-contents)

### Iteration 2

Following User Stories will be tested in this section:
![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701127365/iteration-2_tssttb.png)

| User Story | How are they achieved? | EPIC | Label |
|------------|------------------------|------|-------|
| As a logged-in User I can update my own posts so that correct errors or add new information. | If a user wishes to update or add information to the post they have published, they can click on the dropdown menu followed by the "EDIT" icon. This will take the user to a prepopulated form where they can make the desired changes. | Posts | Must-Have |
| As a logged-in User I can delete my own posts so that I can remove the ones I don’t want to share anymore. | If a user wishes to delete a post they have published, they can click on the post's title or image, which will take them to the post's detail page. On this page, they can access the dropdown menu and click on the "DELETE" icon. The user will be redirected to a confirmation page, where they will have the option to either delete the post or return to the detail page. | Posts | Must-Have |
| As a logged-in User I can comment on posts so that I can engage with the community and the author. | The comment form is visible to all logged-in users. The user can leave a comment by typing in the form and clicking the "Post" button. | Comments | Must-Have |
| As a logged-in User I can edit my comment so that I can correct mistakes. | If a user wants to make any changes or add more information to a comment they've already created, they can do so by clicking on the dropdown menu located on the right side of the comment, and then selecting the "EDIT" icon. This action will redirect them to a pre-populated form, where they can easily make the desired changes. | Comments | Must-Have |
| As a logged-in User I can delete a comment posted by me so that I can remove the ones I don't want to be posted. | If a user wishes to delete a comment they have created, they can click on the dropdown menu located on the right side of the comment, and then select the "DELETE" icon. The user will be redirected to a confirmation page, where they will have the option to either delete the comment or return to the detail page. | Comments | Must-Have |
| As a User I can see a list of all posts so that I can browse through them and find inspiration. | All posts are displayed on the homepage, with the latest at the top. Users can scroll down to load more in groups of ten. | Posts | Must-Have |
| As a logged-in User I can add other users to my favorite list so that I easily see the latest from accounts I like the most. | The user can easily become fan of another explorer. They can do that by visiting explorer's profile (when logged in) and click the "Fan" button. | Favorites | Must-Have |
| As a User I can view other explorers' profiles so that I can see their posts and learn more about them. | All users can see other explorer's profiles by clicking on the explorer's explorer image or username of the user they are curious about. The information that is always displayed about every user is the number of posts, number of followers and favorites, and number of users the explorer is following and has on the favorite list. Bio, region and dream destination are optional fields. The user's actual posts, if any, are displayed after all the information. | Explorers | Must-Have |
| As a User I can view all the posts by a specific explorer so that I can catch up on their latest posts. | The user can see all the posts of the specific explorer by visiting their profile (see the User Story above for more details). | Explorers | Should-Have |
| As a User I can easily view the most followed explorers so that know which popular profiles to check out. | The user can see the most followed profiles on the right side of the page on desktop and at the top on mobile. | Explorers | Should-Have |
| As a logged-in User I can follow another user so that I easily can stay updated with any new posts that they create. | The user can easily follow another explorer. They can do that by visiting explorer's profile (when logged in) and click the "Follow" button or follow them by clicking the same button in the "Follow these popular explorers" container. | Follow | Should-Have |
| As a User I can view comments on posts so that can read what other users think about the posts. | All users, regardless of their login status, can view post comments shown on the post detail page. A clear message is displayed if there are no comments yet. | Comments | Could-Have |

[Back to top ⇧](#table-of-contents)

### Iteration 3

Following User Stories will be tested in this section:
![image](https://res.cloudinary.com/dx0imlozl/image/upload/v1701127366/iteration-3_wcqpsx.png)

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

[Back to top ⇧](#table-of-contents)

:back: [Go back to README](README.md)
