import { databases } from "./appwrite-config";
import { ID } from "appwrite";


const collections = [
    {
        "databaseId":import.meta.env.VITE_DATABASE_ID,
        "id": import.meta.env.VITE_COLLECTIONS_ID_PRODUCTS,
        "name": "Products"
    },
    {
        "databaseId":import.meta.env.VITE_DATABASE_ID,
        "id": import.meta.env.VITE_COLLECTIONS_ID_CUSTOMERS,
        "name": "Customers"
    }
]

const db = {}

collections.forEach(col=>{
    db[col.name]={
        createdoc:(id=ID.unique(),payload)=>databases.createDocument(
            col.databaseId,
            col.id,
            id,
            payload
        ),
        list:(queries)=>databases.listDocuments(
            col.databaseId,
            col.id,
            queries
        ),
        update:(id,payload)=>databases.updateDocument(
            col.databaseId,
            col.id,
            id,
            payload

        ),
        get:(id)=>databases.getDocument(
            col.databaseId,
            col.id,
            id
        ),
        delete:(id)=>databases.deleteDocument(
            col.databaseId,
            col.id,
            id
        )
    }
})


export {db}