const getStoredBook = () => {
    try {
        const storedBookSTR = localStorage.getItem("readList");
        if (storedBookSTR) {
            const storedBookData = JSON.parse(storedBookSTR);
            return Array.isArray(storedBookData) ? storedBookData : [];
        }
    } catch (error) {
        console.error("Error reading from local storage:", error);
    }
    return [];
};

const addToStoredDB = (id) => {
    try {
        const storedBookData = getStoredBook();

        if (storedBookData.includes(id)) {
            console.log("This book is already in the list!");
        } else {
            storedBookData.push(id);
            const data = JSON.stringify(storedBookData);
            localStorage.setItem("readList", data);
            console.log("Book added to the list!");
        }
    } catch (error) {
        console.error("Error adding to local storage:", error);
    }
};

export const removeFromStoredDB = (id) => {
    try {
        const storedBookData = getStoredBook();
        const updatedBookData = storedBookData.filter((bookId) => bookId !== id);
        localStorage.setItem("readList", JSON.stringify(updatedBookData));
        console.log("Book removed from the list!");
    } catch (error) {
        console.error("Error removing from local storage:", error);
    }
};

export const clearStoredBooks = () => {
    try {
        localStorage.removeItem("readList");
        console.log("All books have been cleared from the list!");
    } catch (error) {
        console.error("Error clearing local storage:", error);
    }
};

export const isBookInStoredDB = (id) => {
    try {
        const storedBookData = getStoredBook();
        return storedBookData.includes(id);
    } catch (error) {
        console.error("Error checking book in local storage:", error);
        return false;
    }
};

export { addToStoredDB, getStoredBook }; // Removed duplicate export of removeFromStoredDB