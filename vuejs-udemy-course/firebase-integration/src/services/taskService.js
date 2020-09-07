import { db } from "../firebase";
import { Observable } from "rxjs";


class TaskService {

  getTareas() {
    return Observable.create((observer) => {
      const tareas = [];
      db.collection("tareas")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
          observer.next(tareas);
        });
    });
  }

  getTarea(id) {
    return Observable.create((observer) => {
      db.collection("tareas")
        .doc(id)
        .get()
        .then((doc) => {
          let tarea = doc.data();
          tarea.id = doc.id;
          console.log(tarea);
          observer.next(tarea);
        });
    });
  }

  editTarea(tarea) {
    return Observable.create((observer) => {
        db.collection("tareas")
      .doc(tarea.id)
      .update({
        nombre: tarea.nombre,
      });
      observer.next(tarea);
    });
  }

  addTarea(tarea) {
    db.collection("tareas").add({
      nombre: tarea.nombre,
    });
  }

  deleteTarea(id) {
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
