# Restaurant Recommender System

Welcome to our Restaurant Recommender System! This system utilizes the power of OpenAI chatbot and Google Maps to provide users with personalized restaurant recommendations based on their preferences.

Try it out: https://my-concierge.vercel.app/ <br>
Note that this website works best on desktop or laptop screens.

## Features

- **Chatbot Interface**: Users can interact with our system through a chatbot powered by OpenAI, where they can specify their preferences and requirements for a restaurant. The Chatbot grades user prompts with 
  respect to 35 different factors.
- **Personalized Recommendation system**: Based on the user's input, the system generates personalized recommendations using Yelp API data. These recommendations are based on user prompts and the quality of the available data.
- **Google Maps Integration**: Users can view the recommended restaurants on Google Maps directly from our system.
- **Accessibility Guidelines**: We have added a third-party widget to ensure that our application adheres to WCAG 2.2 guidelines.

## Demo & Screenshots:
### Demo Video:
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/xwwB5GAV2og/0.jpg)](https://www.youtube.com/watch?v=xwwB5GAV2og)



### Screenshots:
#### Home Screen:
![start](https://github.com/ravishshardha/CSCE-482-Concierge/assets/90361755/addb25d2-72da-4e6a-9a22-0b3d1eba1e58)
Description: From the home screen, the user can navigate to the map screen by clicking the bell icon.

#### Chatbot Screen:
![Chatbot](https://github.com/ravishshardha/CSCE-482-Concierge/assets/90361755/b07b37bf-9df1-4f21-8d09-3134fe39392c)
Description: From the chatbot screen, the user first selects a city and then types their preferences to the chatbot. Once satisfied with their specifications, they can see their recommendations by clicking the results button  


#### Results Screen:
![Map](https://github.com/ravishshardha/CSCE-482-Concierge/assets/90361755/632c344e-a281-42b1-829c-6fd4aee2a0d8) <br>
Description: The Results page includes restaurant information including location, cuisine, rating, price range, and more. Users can ring the bell to speak with the concierge again and clarify additional preferences 

## Technologies Used

- **Frontend**: Built with React for a dynamic and interactive user interface.
- **Backend**: Developed using Flask, a lightweight web framework for Python.
- **Data**: Yelp API is utilized for retrieving restaurant data.
- **Integration**: Google Maps API is integrated for mapping restaurant locations and OpenAI API is used for chatbot.

## Getting Started

To run the backend server, make sure you have Python installed. Then, navigate to the my-concierge-server directory and install the required dependencies using pip:

### Backend
```bash
cd my-concierge-server
pip install -r requirements.txt

python app.py
```

To run the front-end server, make sure you have React installed. Then, navigate to the my-concierge directory and install the required dependencies:

### Front-end
```bash
cd my-concierge
npm install

npm run start
```
