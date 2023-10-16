# React Native Onboarding Screen

Welcome to the React Native Onboarding Screen project! This project is built using React Native and Expo, and it features an onboarding screen with interactive and customizable slides. It utilizes the `react-native-onboarding-swiper` library for smooth onboarding transitions and Lottie files for engaging animations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contribution)
- [Credits](#credits)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/your-project.git
   cd your-project

2. Install the required dependencies using npm or yarn:

    ```shell
    npm install
    # or
    yarn install
    ```

3. Start the Expo development server:

    ```shell
    expo start
    ```

4. Open the project in the Expo Go app on your mobile device or use an emulator.

## Usage
To integrate the onboarding screen into your own project, follow these steps:

1. Import the Onboarding component from react-native-onboarding-swiper.

2. Create an array of slides, each containing the content you want to display on each screen. Customize the slides to match your app's branding and message.

3. Render the Onboarding component with the slides array.

4. You can further customize the onboarding experience by exploring the options provided by react-native-onboarding-swiper.

  ```javascript
  import React from 'react';
  import Onboarding from 'react-native-onboarding-swiper';
  
  const slides = [
    {
      title: 'Welcome to My App',
      subtitle: 'Discover the amazing features of our app.',
      backgroundColor: '#007AFF',
    },
    // Add more slides here
  ];
  
  function OnboardingScreen() {
    return <Onboarding pages={slides} />;
  }
  
  export default OnboardingScreen;
  ```

## Features
Interactive and customizable onboarding screen.
Smooth transitions between slides.
Easy integration with the react-native-onboarding-swiper library.
Engaging animations using Lottie files.

## Contribution
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature/your-feature.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push your changes to your fork: git push origin feature/your-feature.
5. Submit a pull request to the main repository.

## Credits
This project uses the react-native-onboarding-swiper library: GitHub Repo
Lottie animations by LottieFiles

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact Information
If you have any questions or need assistance, please feel free to contact me at azrishaharin94@gmail.com.
