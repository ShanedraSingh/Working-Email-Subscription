# Day19
## Working Email Subscription

A responsive and fully functional email subscription form built with HTML, CSS, and JavaScript. This project allows users to subscribe by entering their email addresses, with form validation ensuring valid entries.

## Features

- **Responsive Design**: The form is mobile-friendly and adjusts to various screen sizes.
- **Form Validation**: Users cannot submit an empty or invalid email address.
- **Interactive UI**: Dynamic user feedback is provided for invalid inputs.
- **JavaScript Functionality**: Handles the subscription process in real-time.
- **Customizable Styles**: The design can be easily adjusted using CSS for various UI preferences.

## Demo

You can see the live demo [here](#).

## Technologies Used

- **HTML5**: Structure of the subscription form.
- **CSS3**: Styling for the layout and responsiveness.
- **JavaScript**: Handles email validation and user interaction.

## How It Works

1. **User Interaction**: Users input their email address into the form.
2. **Validation**: JavaScript checks if the email format is valid.
3. **Feedback**: If the email is valid, the form processes the request; otherwise, it displays an error message.
4. **Success**: A success message is displayed once a valid email is submitted.

## Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/working-email-subscription.git
    ```

2. Open the project directory:
    ```bash
    cd working-email-subscription
    ```

3. Open the `index.html` file in your browser to view the project.

## Email Validation Logic

The JavaScript uses a regular expression (regex) to check for a valid email format:
```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
