# TravelApp – React Native Navigation Lab

Student Name: Ece Sevval Mulhan  
Student ID: 210408025 
Course: Mobile Programming  
Lab: Lab 08 – Navigation & Multi-Screen Apps  


---

## Project Description

TravelApp is a simple React Native application built using Expo and React Navigation.  
The purpose of this project is to demonstrate multi-screen navigation, tab-based navigation, and passing data between screens in a mobile application.

This project was developed as part of the Mobile Programming course Lab 08.

---

## Objective

The main objectives of this lab are:
- To understand React Navigation fundamentals
- To implement Stack Navigator and Bottom Tab Navigator
- To navigate between multiple screens
- To pass data between screens using route parameters
- To customize navigation appearance using icons and styles

---

## Project Structure

TravelApp
│
├── App.js
├── screens
│   ├── HomeScreen.js
│   ├── DetailsScreen.js
│   └── SettingsScreen.js
│
├── assets
├── package.json
└── README.md

---

## Features by Lab Part

Part 1 – Project Setup & Navigation Installation
- Expo project created
- React Navigation dependencies installed
- NavigationContainer configured successfully

Part 2 – Stack Navigator
- HomeScreen and DetailsScreen created
- Stack Navigator implemented
- Navigation between screens enabled

Part 3 – Passing Data Between Screens
- Route parameters passed from HomeScreen to DetailsScreen
- Dynamic content displayed based on selected destination

Part 4 – Bottom Tab Navigator
- Bottom Tab Navigator implemented
- Explore tab contains Stack Navigator
- Settings tab displays application information

Part 5 – Custom Styling & Icons
- Ionicons added to bottom tab navigation
- Active and inactive tab icons implemented
- Stack header customized with background and text color

---

## How to Run the Project

Prerequisites:
- Node.js and npm installed
- Expo Go app installed on a physical device or emulator

Steps:
1. Install dependencies:
   npm install

2. Start the project:
   npx expo start

3. Scan the QR code using Expo Go or run on an emulator

---

## Testing Checklist

- App launches on Explore (Home) screen
- Navigation to Details screen works correctly
- Passed data (place and rating) is displayed properly
- Bottom tab bar remains visible during navigation
- Tab icons change when switching tabs
- Settings screen is accessible

---

## Git & Version Control

Each major part of the lab was committed separately with clear commit messages:
- chore: initial project setup
- feat: implement stack navigator with Home and Details screens (Part 2)
- feat: add route params to pass data between screens (Part 3)
- feat: implement bottom tab navigator with Explore and Settings tabs (Part 4)
- feat: add icons and custom styling to navigation (Part 5)

