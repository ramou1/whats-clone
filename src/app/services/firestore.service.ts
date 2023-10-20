import { Injector } from '@angular/core';
import {
  getDocs,
  Firestore,
  query,
  collection,
  where,
  CollectionReference,
  limit,
  orderBy,
  doc,
  getDoc,
  setDoc,
  deleteDoc
} from '@angular/fire/firestore';

export interface Params {
  where?: {
    key: any;
    condition: '<' | '<=' | '==' | '>' | '>=' | '!=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';
    value: any;
  }[];
  orders?: {
    fieldPath: string;
    direction: 'asc' | 'desc';
  }[];
  limit?: number;
  lang?: string;
  mergeParent?: string[];
}

export abstract class FirestoreService {

  protected firestore: Firestore;
  protected collectionRef: CollectionReference | undefined;

  constructor(injector: Injector) {
    this.firestore = injector.get(Firestore);
  }

  public setCollectionRef(collectionName: string) {
    this.collectionRef = collection(this.firestore, collectionName);
  }

  public setCollectionRefByRef(collectionRef: CollectionReference) {
    this.collectionRef = collectionRef;
  }

  public async load(params: Params = {}) {
    let q: any;
    if (this.collectionRef) {
      q = query(this.collectionRef);
    }

    if (params.where) {

      params.where.forEach((doc: any) => {
        q = query(q, where(doc.key, doc.condition, doc.value));
      });
    }

    if (params.orders) {
      params.orders.forEach((doc: any) => {
        q = query(q, orderBy(doc.fieldPath, doc.direction));
      });
    }

    if (params.limit) {
      q = query(q, limit(params.limit));
    }

    const data: any[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      const document = docSnap.data();
      data.push(document);
    });
    return data;
  }

  public async get(docId: string): Promise<any> {
    let docRef: any;
    if (this.collectionRef) {
      docRef = doc(this.collectionRef, docId);
    }

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const document = docSnap.data();
      return document;
    } else {
      return null;
    }
  }

  public async addOrUpdateDocument(document: any) {
    try {
      let idDocument = document.id;
      let docRef: any;

      if (this.collectionRef) {
        if (!idDocument) {
          idDocument = doc(this.collectionRef).id;
        }
        docRef = doc(this.collectionRef, idDocument);
      }
      document.id = idDocument;

      await setDoc(docRef, document, { merge: true });
      return idDocument;
    } catch (error) {
      console.error('FirestoreService -> addOrUpdateDocument', error);
      return null
    }
  }

  public async deleteDocument(idDocument: string) {
    let docRef: any;
    if (this.collectionRef) {
      docRef = doc(this.collectionRef, idDocument);
    }
    await deleteDoc(docRef);
  }

}
