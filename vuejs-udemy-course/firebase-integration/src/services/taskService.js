import { db } from "../firebase";
import { Observable } from "rxjs";


class TaskService {

  getTasks() {
    return Observable.create((observer) => {
      db.collection("tareas")
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

  getTask(id) {
    return Observable.create((observer) => {
      db.collection("tareas")
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

  editTask(tarea) {
    return Observable.create((observer) => {
        db.collection("tareas")
      .doc(tarea.id)
      .update({
        nombre: tarea.nombre,
      });
      observer.next(tarea);
    });
  }

  addTask(tarea) {
    db.collection("tareas").add({
      nombre: tarea.nombre,
    });
  }

  deleteTask(id) {
    return Observable.create((observer) => {
      db.collection("tareas")
        .doc(id)
        .delete()
        .then(() => {
          observer.next("Ok");
        });
    });
  }
}

export default new TaskService();
