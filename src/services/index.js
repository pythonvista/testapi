
const { getDoc } = require('firebase/firestore');
const { db, firestore } = require('../services/engine');
const collection = firestore.collection;
const addDoc = firestore.addDoc;
const doc = firestore.doc;
const onSnapshot = firestore.onSnapshot;
const updateDoc = firestore.updateDoc;
const deleteDoc = firestore.deleteDoc;
const setDoc = firestore.setDoc;
const getDocs = firestore.getDocs;
const query = firestore.query;
const where = firestore.where;
function CRUD() {
  this.addDocWithId = (dbname, userId, arrayinfo) => {
    let data = setDoc(doc(db, dbname, userId), arrayinfo);
    return data;
  };

  this.addDocWithoutId = (dbname, dform) => {
    let collRef = collection(db, dbname);
    let data = addDoc(collRef, dform);
    s;
    return data;
  };

  this.getSingleDoc = (dbname, user_id) => {
    let res = getDoc(doc(db, dbname, user_id));
    return res;
  };

  this.getAllDoc = async (dbname) => {
    let docs = [];
    const querySnapshot = await getDocs(collection(db, dbname));
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  };

  this.collectionSnapDocs = (dbname) => {
    return collection(db, dbname);
  };

  this.SnapDoc = (dbname, userId) => {
    return doc(db, dbname, userId);
  };

  this.updateDocument = (dbname, userId, arrayinfo) => {
    const selectedUser = doc(db, dbname, userId);
    return updateDoc(selectedUser, arrayinfo);
  };

  this.queryDoc = (dbname, where1, where2) => {
    const collRef = collection(db, dbname);
    const q = query(collRef, where(where1, '==', where2));
    return q;
    
  };

  this.removeDoc = (dbname, db_id) => {
    return deleteDoc(doc(db, dbname, db_id));
  };
}
let crud = new CRUD();

module.exports  = {db, crud, onSnapshot}
