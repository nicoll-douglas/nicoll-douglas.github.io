import homeUrl from "../assets/projectScreenshots/studium/home.png";
import dashboardUrl from "../assets/projectScreenshots/studium/dashboard.png";
import toDoListUrl from "../assets/projectScreenshots/studium/to-do-list.png";
import notesUrl from "../assets/projectScreenshots/studium/notes.png";
import bookmarksUrl from "../assets/projectScreenshots/studium/bookmarks.png";
import pomodoroUrl from "../assets/projectScreenshots/studium/pomodoro.png";
import calculatorUrl from "../assets/projectScreenshots/studium/calculator.png";

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
