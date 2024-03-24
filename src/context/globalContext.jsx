import React, { useState, useEffect, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import {
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categFilter, setCategFilter] = useState("all");
  const [bookmarks, setBookMarks] = useState();
  const [bookmarksClone, setBookMarksClone] = useState(bookmarks);

  //GET BOOKMARKS FROM FIREBASE
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "bookmarks", user.uid), (doc) => {
        setBookMarks(doc.data().list);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  //GET CATEGORIES FROM FIREBASE
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "categories", user.uid), (doc) => {
        setCategories(doc.data().list);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  //UPDATE BOOKMARKS-CLONE
  useEffect(() => {
    setBookMarksClone(bookmarks);
  }, [bookmarks]);

  //ADD A NEW CATEGORY
  const addNewCategory = async (newCateg) => {
    if (user) {
      const result = categories.find(
        (categ) => categ.toLowerCase() == newCateg.trim().toLowerCase()
      );

      if (result || newCateg.trim().toLowerCase() == "all") {
        alert("Already Exist");
      } else {
        let newList = [...categories, newCateg.trim()];
        setCategories(newList);

        await setDoc(doc(db, "categories", user.uid), {
          list: newList,
        });

        setIsAddCategoryOpen(false);
        alert("Added Successfully");
      }
    } else {
      alert("sign In To Continue");
    }
  };

  //DELETE A CATEGORY
  const deleteCategory = async (categToDelete) => {
    if (user) {
      const docRef = doc(db, "categories", user.uid);

      await updateDoc(docRef, {
        list: arrayRemove(categToDelete),
      });

      let newList = bookmarks.filter(
        (bookmark) => bookmark.category != categToDelete
      );

      await setDoc(doc(db, "bookmarks", user.uid), {
        list: newList,
      });

      alert("Deleted");
    }
  };

  //FILTER BOOKMARKS BY CATEGORY
  const filterBookmarks = (categ) => {
    if (categ == "all") {
      setBookMarksClone(bookmarks);
    } else {
      setBookMarksClone(
        bookmarks.filter((bookmark) => bookmark.category == categ)
      );
    }
  };

  //ADD A NEW BOOKMARK
  const addBookmark = async (
    title,
    link,
    note,
    reminder,
    remindTime,
    category
  ) => {
    if (user) {
      let newList = [
        ...bookmarks,
        {
          id: uuidv4(),
          title,
          link,
          note,
          reminder,
          remindTime,
          addedTime: new Date(),
          category,
        },
      ];

      await setDoc(doc(db, "bookmarks", user.uid), {
        list: newList,
      });

      navigate("/bookmarks");
    } else {
      alert("sign In To Continue");
    }
  };

  //REMOVE A BOOKMARK
  const deleteBookmark = async (id) => {
    if (user) {
      let newList = bookmarks.filter((bookmark) => bookmark.id != id);

      await setDoc(doc(db, "bookmarks", user.uid), {
        list: newList,
      });

      alert("Deleted");
    } else {
      alert("sign In To Continue");
    }
  };

  return (
    <globalContext.Provider
      value={{
        isAddCategoryOpen,
        setIsAddCategoryOpen,
        categories,
        setCategories,
        addNewCategory,
        deleteCategory,
        bookmarksClone,
        filterBookmarks,
        addBookmark,
        deleteBookmark,
        categFilter,
        setCategFilter,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
