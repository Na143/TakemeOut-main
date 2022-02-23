import Category from '../models/category';
import Event from '../models/event';

export const CATEGORIES = [
  new Category('c1', 'Restaurants', '#f5428d'),
  new Category('c2', 'Bars', '#f54242'),
  new Category('c3', 'Cafes', '#f5a442'),
  new Category('c4', 'Theater', '#f5d142'),
  new Category('c5', 'Oper', '#368dff'),
  new Category('c6', 'Konzerte', '#41d95d'),
  new Category('c7', 'Clubs', '#9eecff'),
  new Category('c8', 'Family & Kids', '#b9ffb0'),
  
];

export const EVENTS = [
  new Event('m1', 'c1', 'El Toro','Kleiner Schäferkamp 21, 20357 Hamburg', true),
  new Event('m2', 'c1', 'Otto\'s Burger','Schanzenstraße 58,20357 Hamburg', false),
  new Event('m3', 'c1', 'Kimo','Schanzenstraße 111, 20357 Hamburg', false),
  new Event('m4', 'c1', 'Yin Yang','Lattenkamp 8, 22299 Hamburg', true)
  // new Event('m5', 'c2', 'Finish homework assignment 1', false),
  // new Event('m6', 'c2', 'Get new Student ID Card', false),
  // new Event('m7', 'c3', 'Buy Tomatoes', false),
  // new Event('m8', 'c3', 'Buy Beer', true),
  // new Event('m9', 'c3', 'Buy Milk', true),
  // new Event('m10', 'c4', 'Finish painting the boat', false),
  // new Event('m11', 'c5', 'Call mom', false),
  // new Event('m12', 'c5', 'Give back money to sis', false),
  // new Event('m13', 'c6', 'Raspberry Pi', false),
  // new Event('m14', 'c6', 'Socks', false),
  // new Event('m15', 'c6', 'Cookbook', true),
  // new Event('m16', 'c6', 'Yoga mat', true),
  // new Event('m17', 'c7', 'Fix the AC', false),
  // new Event('m18', 'c8', 'Bring Sunglasses', false),
  // new Event('m19', 'c9', 'Write a new song', false),
  // new Event('m20', 'c10', 'Learn React Native', true)
];
