import Category from '../models/category';
import Location from '../models/Location';

export const CATEGORIES = [
  new Category('c1', 'Restaurants', '#d1d2fb'),
  new Category('c2', 'Bars', '#d1d2fb'),
  new Category('c3', 'Cafes', '#d1d2fb'),
  new Category('c4', 'Kultur', '#d1d2fb'),
  new Category('c5', 'Clubs', '#d1d2fb'),

  
];

export const LOCATIONS = [
  new Location('m1', 'c1', 'El Toro',53.56685,9.96872, 'Kleiner Schäferkamp 21, 20357 Hamburg',true),
  new Location('m2', 'c1', 'Otto\'s Burger',53.56182,9.96594, 'Schanzenstraße 58, 20357 Hamburg', false),
  new Location('m3', 'c1', 'Kimo',53.56442,9.96538,'Schanzenstraße 111, 20357 Hamburg', false),
  new Location('m4', 'c1', 'Yin Yang',53.60096,9.99541, 'Lattenkamp 8, 22299 Hamburg',true),
  new Location('m5','c1', 'Soulkebab', 53.58799,10.04574,'Fuhlsbüttler Str. 97, 22305 Hamburg',false),
  new Location('m6', 'c2', 'Haus 73',53.562347,9.961065 , 'Schulterblatt 73, 20357 Hamburg', false),
  new Location('m7', 'c2', 'Black Forest Bar',53.585318,9.980334, 'Curschmannstraße 9, 20251 Hamburg', false),
  new Location('m9', 'c2', 'Botanic District',53.585261,9.98102, 'Hegestraße 14-16, 20251 Hamburg', false),
  new Location('m10', 'c2', 'Tipsy Baker Bar',53.55806,9.98953, 'Esplanade 29/30, 20354 Hamburg', false),
  new Location('m11', 'c2', 'Aurel',53.55841,9.92859, 'Bahrenfelder Str. 157, 22765 Hamburg', false),
  new Location('m12', 'c3', 'Cafe MAY',53.57828,10.06286, 'Stormarner Str. 34, 22049 Hamburg', false),
  new Location('m13', 'c3', 'MalinaStories Cafe',53.59205,10.042585, 'Hellbrookstraße 61, 22305 Hamburg', false),
  new Location('m14', 'c3', 'Mit Herz und Zucker',53.56142,10.03001, 'Lübecker Str. 29, 22087 Hamburg', false),
  new Location('m15', 'c3', 'Cafe Molina',53.40821,10.20820, 'Kirchwerder Mühlendamm 75a, 21037 Hamburg', false),
  new Location('m16', 'c3', 'snoopkraam',53.56412,10.04262, 'Hirschgraben 44, 22089 Hamburg', false),
  new Location('m17', 'c4', 'Hamburger Kunsthalle',53.55565,10.00253, 'Glockengießerwall 5, 20095 Hamburg', false),
  new Location('m18', 'c4', 'Deutsches SchauSpielHaus Hamburg',53.55663,10.00916, 'Kirchenallee 39, 20099 Hamburg', false),
  new Location('m19', 'c4', 'Thalia Theater',53.55206,9.99830, 'Alstertor, 20095 Hamburg', false),
  new Location('m20', 'c4', 'Hamburgische Staatsoper',53.55703,9.98868, 'Große Theaterstraße 25, 20354 Hamburg', false),
  new Location('m21', 'c4', 'Altonaer Musuem',53.54927,9.93474, 'Museumstraße 23, 22765 Hamburg', false),
  new Location('m22', 'c4', 'Deichtorhallen Hamburg',53.54720,10.00686, 'Deichtorstraße 1, 20095 Hamburg', false),
  new Location('m23', 'c5', 'Übel und Gefährlich',53.55680,9.97019, 'Feldstraße 66, 20359 Hamburg', false),
  new Location('m24', 'c5', 'Molotow Musikclub',53.55017,9.95653, 'Nobistor 14, 22767 Hamburg', false),
  new Location('m25', 'c5', 'Südpol',53.54649,10.03282, 'Süderstraße 112, 20537 Hamburg', false),
  new Location('m26', 'c5', 'H1 Club & Lounge',53.56394,10.03646, 'Conventstraße 8-10/Eingang C, 22089 Hamburg', false),
  new Location('m27', 'c5', 'Mojo Club',53.55023,9.96793, 'Reeperbahn 1, 20359 Hamburg', false),
  
];
