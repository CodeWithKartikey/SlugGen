# Slug Generator

This application generates slugs from the given text input. It converts text into a slug format, which is commonly used for creating SEO-friendly URLs. The application is built using React and utilizes React Router for navigation.

## How to Use

1. **Installation**: 
   - Ensure you have Node.js and npm installed on your system.
   - Clone the repository to your local machine.

2. **Setup**:
   - Navigate to the project directory.
   - Run `npm install` to install the dependencies.

3. **Run the Application**:
   - Execute `npm start` to start the development server.
   - The application will be available at `http://localhost:3000` by default.

4. **Usage**:
   - Enter the desired text into the input field.
   - Click on the "Generate Slug" button.
   - The generated slug will be displayed in the output field.
   - Click on the "Reset Slug" button.
   - The input field will be reset to its original value which will be empty.
   - Optionally, click on the "Copy" button to copy the slug to the clipboard.

## Components

### App Component
- Responsible for rendering the application.
- Uses React Router for navigation.

### PageRouter Component
- Handles routing within the application.
- Routes to the Home page and handles undefined routes.

### Home Component
- Main component for generating slugs.
- Provides an input field for entering text.
- Generates a slug from the input text.
- Allows copying the generated slug to the clipboard.

### Error Component
- Handles 404 errors.
- Redirects to the home page after a specified duration.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications.

## Folder Structure

- `src/`: Contains the source code for the application.
  - `components/`: Holds React components.
  - `pages/`: Contains page components.
  - `routes/`: Defines routing configurations.
  - `styles/`: Contains CSS files for styling.
  
## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: DOM bindings for React Router.
- `react-scripts`: Scripts and configuration used by Create React App.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.