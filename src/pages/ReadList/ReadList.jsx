import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, removeFromStoredDB } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  const handleRemove = (bookId) => {
    // Remove the book from the local storage
    removeFromStoredDB(bookId);

    // Update the readList state
    const updatedList = readList.filter((book) => book.bookId !== bookId);
    setReadList(updatedList);
  };

  return (
    <div>
      <details className="dropdown ">
        <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I Read: {readList.length}</h2>
          {readList.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">No books in your read list.</p>
          ) : (
            readList.map((b) => (
              <div key={b.bookId} className="flex items-center justify-between">
                <Book singleBook={b}></Book>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleRemove(b.bookId)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;