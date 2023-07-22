class EventManager {
  addEventOnElement(element, type, callback) {
    if (element.length > 1) {
      for (let i = 0; i < element.length; i++) {
        element[i].addEventListener(type, callback);
      }
    } else {
      element.addEventListener(type, callback);
    }
  }
}

export default EventManager;
