import Category from '../models/category';
import ToDoItem from '../models/todoitem';

export const CATEGORIES = [
  new Category('c1', 'Restaurants', '#f5428d'),
  new Category('c2', 'Bars', '#f54242'),
  new Category('c3', 'Cafes', '#f5a442'),
  new Category('c4', 'Theater', '#f5d142'),
  new Category('c5', 'Oper', '#368dff'),
  new Category('c6', 'Konzerte', '#41d95d'),
  new Category('c7', 'Clubs', '#9eecff'),
  new Category('c8', 'Family & Kids', '#b9ffb0'),
  new Category('c9', '...'),
  new Category('c10', 'Things to Learn', '#47fced')
];

export const TODOITEMS = [
  new ToDoItem('m1', 'c1', 'Finish Project Maven', true),
  new ToDoItem('m2', 'c1', 'Call Ellie', false),
  new ToDoItem('m3', 'c1', 'Take 15 min break', false),
  new ToDoItem('m4', 'c1', 'Research React Native', true),
  new ToDoItem('m5', 'c2', 'Finish homework assignment 1', false),
  new ToDoItem('m6', 'c2', 'Get new Student ID Card', false),
  new ToDoItem('m7', 'c3', 'Buy Tomatoes', false),
  new ToDoItem('m8', 'c3', 'Buy Beer', true),
  new ToDoItem('m9', 'c3', 'Buy Milk', true),
  new ToDoItem('m10', 'c4', 'Finish painting the boat', false),
  new ToDoItem('m11', 'c5', 'Call mom', false),
  new ToDoItem('m12', 'c5', 'Give back money to sis', false),
  new ToDoItem('m13', 'c6', 'Raspberry Pi', false),
  new ToDoItem('m14', 'c6', 'Socks', false),
  new ToDoItem('m15', 'c6', 'Cookbook', true),
  new ToDoItem('m16', 'c6', 'Yoga mat', true),
  new ToDoItem('m17', 'c7', 'Fix the AC', false),
  new ToDoItem('m18', 'c8', 'Bring Sunglasses', false),
  new ToDoItem('m19', 'c9', 'Write a new song', false),
  new ToDoItem('m20', 'c10', 'Learn React Native', true)
];
