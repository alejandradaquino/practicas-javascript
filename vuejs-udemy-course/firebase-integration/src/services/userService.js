import { auth } from "../firebase";
import { Observable, BehaviorSubject } from "rxjs";

class UserService {
  userSubject;
  initCompleted=false;
  getUserSubject() {
    console.log(this.userSubject);
    return this.userSubject;
  }
  constructor() {
    this.userSubject = new BehaviorSubject(null);
    auth.onAuthStateChanged((user) => {
      if (user) {
        const current = {
          email: user.email,
          uid: user.uid,
        };
        this.userSubject.next(current);
      } else {
        this.userSubject.next(null);
      }
      this.initCompleted =true;
    });
  }

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
      observer.next();
    });
  }
  isLoggedIn() {
      console.log(this.initCompleted);
    return !this.initCompleted || auth.currentUser != null;
  }
}

export default new UserService();
