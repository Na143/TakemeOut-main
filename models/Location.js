class Location {
  constructor(id, categoryId, title, latitude,longitude, address,isFav) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
    this.isFav = isFav;
  }
}

export default Location;
