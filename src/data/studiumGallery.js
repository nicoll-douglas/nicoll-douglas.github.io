import homeUrl from "../assets/projectScreenshots/home.png";
import dashboardUrl from "../assets/projectScreenshots/dashboard.png";
import toDoListUrl from "../assets/projectScreenshots/to-do-list.png";
import notesUrl from "../assets/projectScreenshots/notes.png";
import bookmarksUrl from "../assets/projectScreenshots/bookmarks.png";
import pomodoroUrl from "../assets/projectScreenshots/pomodoro.png";
import calculatorUrl from "../assets/projectScreenshots/calculator.png";

class GalleryItem {
  constructor(url, caption) {
    this.url = url;
    this.caption = caption;
  }
}

export default [
  new GalleryItem(homeUrl, "Home Page"),
  new GalleryItem(dashboardUrl, "Dashboard Page"),
  new GalleryItem(toDoListUrl, "To-do list app"),
  new GalleryItem(notesUrl, "Notes app"),
  new GalleryItem(bookmarksUrl, "Bookmarking app"),
  new GalleryItem(pomodoroUrl, "Pomodoro timer app"),
  new GalleryItem(calculatorUrl, "Calculator app"),
];
