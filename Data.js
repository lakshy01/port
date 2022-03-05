import Credit from '../src/images/Credit.png';
import Image from '../src/images/Image.png';
import Menu from '../src/images/Menu.png';
import Song from '../src/images/Song.png';
import Season from '../src/images/Season.png';
import Youtube from '../src/images/Youtube.png';
import Tic from '../src/images/Tic.png';
import Todo from '../src/images/Todo.png';
import Ferrari from '../src/images/Ferrari.png';
import Cart from '../src/images/Cart.png';
import Payment2 from '../src/images/Payment2.jpg';
import Payment1 from '../src/images/Payment1.png';
import Quiz from '../src/images/Quiz.jpg';
import Blog from '../src/images/Blog.png';
import Chat from '../src/images/Chat.png';
import API from '../src/images/API.png';

const front = [
    {
        id: 0,
        title: "Credit Exchange",
        stack: 'React',
        description: 'Credit Exchange App is an app that allows multiple users to send credits to their loved ones.',
        imgSrc: Credit,
        link: "https://github.com/lakshy01/CreditExcangerApp",
        selected: false
    },
    {
        id: 1,
        title: "Image Searcher",
        stack: 'React-Redux',
        description: "The app provides the user with a search box where searched item by the user will be shown in the form of a grid template on the user screen.",
        imgSrc: Image,
        link: "https://github.com/lakshy01/ryd/tree/master/src",
        selected: false
    },
    {
        id: 2,
        title: "Menu",
        stack: 'React',
        description: "Menu App is a representation of the real-time scenario where guests in the hotel can order items from the menu as many times and are able to see the bill of all the items eaten by them in one go.",
        imgSrc: Menu,
        link: "https://github.com/lakshy01/menu-app",
        selected: false
    },
    {
        id: 3,
        title: "Songs",
        stack: 'React-Redux',
        description: "Songs App shows the list of songs with some details about them like duration, description. On clicking any of the songs, the particular song will be displayed on the user screen with all the necessary information about it.",
        imgSrc: Song,
        link: "https://github.com/lakshy01/songs-app",
        selected: false
    },
    {
        id: 4,
        title: "Seasons",
        stack: 'React-Redux',
        description: "Season App checks the different seasons by itself by getting the details about latitude and longitude and is able to change the UI of the app according to a particular season.",
        imgSrc: Season,
        link: "https://github.com/lakshy01/seasons-app",
        selected: false
    },
    {
        id: 5,
        title: "Youtube-Clone",
        stack: 'React-Redux',
        description: "Youtube Clone App provides the basic functionality of our very own youtube like a list of different videos that appear on the rightmost side of the user screen and the selected video playing in the center.",
        imgSrc: Youtube,
        link: "https://github.com/lakshy01/yt-app",
        selected: false
    },
    {
        id: 6,
        title: "Tic-Tac-Toe",
        stack: 'React',
        description: "Tic-tac-toe, noughts, and crosses, or Xs and Os, is a paper-pencil game for two players, who take turns marking the spaces in a 3×3 grid.",
        imgSrc: Tic,
        link: "https://github.com/lakshy01/ReactJsTic-Tac-Toe",
        selected: false
    },
    {
        id: 7,
        title: "Todo List",
        stack: 'Html  CSS  JavaScript',
        description: "Todo-list App is a simple app where user can enter the task to do. App provides the functionality to delete or update the task or to mark the task as complete or incomplete.",
        imgSrc: Todo,
        link: "https://github.com/lakshy01/TodoList",
        selected: false
    },
    {
        id: 8,
        title: "Basic Ferrari Template",
        stack: 'Html  CSS',
        description: "The Basic Ferrari Template App is a completely responsive template. The template consists of the horizontal navigation bar and changed to a vertical navigation bar for middle screen size and changed to hamburger menu for the mobile screen.",
        imgSrc: Ferrari,
        link: "https://github.com/lakshy01/Task1-FerrariBackgroungPage",
        selected: false
    }
];

const back = [
    {
        id: 0,
        title: "Cart",
        stack: 'NodeJs  MongoDB',
        description: 'Cart App consists of the four HTTP verb Get, Post, Put/Patch, Delete.Used for implementing all the functionalities of a cart in E-commerce websites.',
        imgSrc: Cart,
        link: "https://github.com/lakshy01/Cart",
        selected: false
    },
    {
        id: 1,
        title: "Basic Api function",
        stack: 'NodeJs  MongoDB',
        description: 'Basic API Function implements the uniform interface of RESTful Web Services and all four HTTP verbs.',
        imgSrc: API,
        link: "https://github.com/lakshy01/Assignment1",
        selected: false
    }, {
        id: 2,
        title: "Payement Gateway with PayU",
        stack: 'NodeJs  MongoDB',
        description: 'Integrated the payment gateway from PayU which enables businesses in India to accept online payments with all payment modes including credit card, debit card, net banking, etc.',
        imgSrc: Payment2,
        link: "https://github.com/lakshy01/PayU",
        selected: false
    }
]

const full = [
    {
        id: 0,
        title: "Payment GateWay With Stripe",
        stack: 'React NodeJs',
        description: 'The app is built for a real-time cause where the user is able to donate money for others in need. Integrated with payment gateway from Stripe which enables businesses in India to accept online payments with all payment modes including credit card, debit card, net banking, etc. ',
        imgSrc: Payment1,
        link: "https://github.com/lakshy01/PaymentGateWayIntegration",
        selected: false
    },
    {
        id: 1,
        title: "Quiz",
        stack: 'React-Redux  hooks  Redux-thunk  NodeJs',
        description: 'Quiz App is a fully responsive app provided with OAuth authentication for login functionslity in the app. It provides an exam interface where a timer of one minute will be set on once the user starts taking the exam and allows the user to submit the exam or automatically end after one minute of the start of the exam. User can see the score after the exam and improve according to it.',
        imgSrc: Quiz,
        link: "https://github.com/lakshy01/Quiz",
        selected: false
    },
    {
        id: 2,
        title: "Blogs",
        stack: 'React-Redux  Redux-thunk  NodeJs',
        description: "Blogs App is the implementation of the blogs section of E-commerce websites where users are able to see other people's blogs and add their own blogs. ",
        imgSrc: Blog,
        link: "https://github.com/lakshy01/Blogs",
        selected: false
    },
    {
        id: 3,
        title: "Chat App",
        stack: 'HTML  CSS  Nodejs  WebSocket',
        description: 'Chat App is a fully responsive app that allows bi-directional and event-based communication. User can send the message to all his friends in the app or also send to a particular friend.',
        imgSrc: Chat,
        link: "https://github.com/lakshy01/Chat-App",
        selected: false
    }
]

const items = {
    front: front,
    back: back,
    full: full
};

export default items;