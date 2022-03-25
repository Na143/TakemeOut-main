import Category from '../models/category';
import Location from '../models/Location';

export const CATEGORIES = [
  new Category('c1', 'Restaurants', '#f5428d'),
  new Category('c2', 'Bars', '#f54242'),
  new Category('c3', 'Cafes', '#f5a442'),
  new Category('c4', 'Kultur', '#f5d142'),
  new Category('c5', 'Clubs', '#9eecff'),

  
];

export const LOCATIONS = [
  new Location('m1', 'c1', 'El Toro',53.56685,9.96872, 'Kleiner Schäferkamp 21, 20357 Hamburg',true),
  new Location('m2', 'c1', 'Otto\'s Burger',51.0625170822,13.7498831749, 'Schanzenstraße 58, 20357 Hamburg', false),
  new Location('m3', 'c1', 'Kimo',53.56442,9.96538,'Schanzenstraße 111, 20357 Hamburg', false),
  new Location('m4', 'c1', 'Yin Yang',53.60096,9.99541, 'Lattenkamp 8, 22299 Hamburg',true),
  new Location('m5','c1', 'Soulkebab', 53.58799,10.04574,'Fuhlsbüttler Str. 97, 22305 Hamburg',false),
  new Location('m6', 'c2', 'Haus 73',53.562347,9.961065 , 'Schulterblatt 73, 20357 Hamburg', false),
  new Location('m7', 'c2', 'Black Forest Bar',53.585318,9.980334, 'Curschmannstraße 9, 20251 Hamburg', false),
  new Location('m9', 'c2', 'Botanic District',53.585261,9.98102, 'Hegestraße 14-16, 20251 Hamburg', false),
  new Location('m10', 'c2', 'Tipsy Baker Bar',53.55806,9.98953, 'Esplanade 29/30, 20354 Hamburg', false),
  new Location('m11', 'c2', 'Aurel',53.55841,9.92859, 'Bahrenfelder Str. 157, 22765 Hamburg', false),
  new Location('m12', 'c3', 'Cafe MAY',53.57828,10.06286, 'Stormarner Str. 34, 22049 Hamburg', false),
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
