class Event {
  constructor(id, categoryId, title, latitude,longitude, isFav) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.latitude = latitude;
    this.longitude = longitude;
    this.isFav = isFav;
  }
}

export default Event;
