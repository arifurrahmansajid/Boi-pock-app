const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        console.log("hello");
        alert("This book is already in the list!");
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
};

const removeFromStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        const updatedBookData = storedBookData.filter((bookId) => bookId !== id);
        localStorage.setItem("readList", JSON.stringify(updatedBookData));
    } else {
        console.log("Book ID not found in the list.");
    }
};

export { addToStoredDB, getStoredBook, removeFromStoredDB };