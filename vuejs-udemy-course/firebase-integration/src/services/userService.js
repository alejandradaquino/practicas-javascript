import { auth } from "../firebase";
import { Observable } from "rxjs";

class UserService {
  createUser(user) {
    return Observable.create((observer) => {
      try {
        auth
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            console.log(res);
            const user = {
              email: res.user.email,
              uid: res.user.uid,
            };
            observer.next(user);
          });
      } catch (error) {
        observer.error(error);
      }
    });
  }
  login(user) {
    return Observable.create((observer) => {
      try {
        auth
          .signInWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            console.log(res);
            const user = {
              email: res.user.email,
              uid: res.user.uid,
            };
            observer.next(user);
          })
          .catch((error) => {
            console.log(error);
            observer.error(error);
          });
      } catch (error) {
        console.log("errir catch", error);
        observer.error(error);
      }
    });
  }
  logout() {
    return Observable.create((observer) => {
        auth.signOut();
        observer.next()
    });
  }
}

export default new UserService();
