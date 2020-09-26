import { db } from "../firebase";
import { Observable } from "rxjs";

class TaskService {
  getTasks(collection) {
    return Observable.create((observer) => {
      db.collection(collection)
        .get()
        .then((res) => {
          const tasks = [];
          res.forEach((doc) => {
            let task = doc.data();
            task.id = doc.id;
            tasks.push(task);
          });
          observer.next(tasks);
        });
    });
  }

  getTask(id, collection) {
    return Observable.create((observer) => {
      db.collection(collection)
        .doc(id)
        .get()
        .then((doc) => {
          let task = doc.data();
          task.id = doc.id;
          console.log(task);
          observer.next(task);
        });
    });
  }

  editTask(tarea, collection) {
    return Observable.create((observer) => {
      db.collection(collection)
        .doc(tarea.id)
        .update({
          nombre: tarea.nombre,
        });
      observer.next(tarea);
    });
  }

  addTask(tarea, collection) {
    db.collection(collection).add({
      nombre: tarea.nombre,
    });
  }

  deleteTask(id, collection) {
    return Observable.create((observer) => {
      db.collection(collection)
        .doc(id)
        .delete()
        .then(() => {
          observer.next("Ok");
        });
    });
  }
}

export default new TaskService();
