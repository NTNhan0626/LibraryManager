import readline from "readline-sync";
import { UserService } from "./service/UserService";
import { BookService } from "./service/BookService";
import { BookItemService } from "./service/BookItemService";
import { BorrowTicketService } from "./service/BorrowTicketServie";

const userService = new UserService();
const bookService = new BookService();
const bookItemService = new BookItemService();
const borrowTicketService = new BorrowTicketService();

function showMenu() {
    console.log("\n📚 LIBRARY MANAGEMENT SYSTEM");
    console.log("1. Add User");
    console.log("2. View All Users");
    console.log("3. Add Book");
    console.log("4. View All Books");
    console.log("5. Create Book Copy (BookItem)");
    console.log("6. Borrow a Book");
    console.log("7. Return a Book");
    console.log("8. View All Borrow Tickets");
    console.log("0. Exit");
}

let running = true;

while (running) {
    showMenu();
    const choice = readline.question("👉 Enter your choice: ");

    switch (choice) {
        case "1":
            const userId = readline.question("User ID: ");
            const userName = readline.question("Name: ");
            const phone = readline.question("Phone number: ");
            const newUser = userService.createUser({ id: userId, name: userName, phone });
            userService.arrUser.push(newUser);
            console.log("✅ User added successfully.");
            break;

        case "2":
            console.table(userService.getAllUser());
            break;

        case "3":
            const bookId = readline.question("Book ID: ");
            const title = readline.question("Title: ");
            const author = readline.question("Author: ");
            const book = bookService.createBook({ id: bookId, title, author });
            console.log("✅ Book added successfully.");
            break;

        case "4":
            console.table(bookService.getAllBook());
            break;

        case "5":
            const bookItemId = readline.question("BookItem ID: ");
            const bookRefId = readline.question("Book ID: ");
            const bookItem = bookItemService.createBookItem({ id: bookItemId, idBook: bookRefId, available: true });
            console.log("✅ BookItem created successfully.");
            break;

        case "6":
            const ticketId = readline.question("Borrow Ticket ID: ");
            const uId = readline.question("User ID: ");
            const biId = readline.question("BookItem ID: ");
            const borrowDate = new Date(readline.question("Borrow Date (yyyy-mm-dd): "));
            const dueDate = new Date( readline.question("Due Date (yyyy-mm-dd): "));
            const ticket = borrowTicketService.createBorrowTicket({
                id: ticketId,
                userId: uId,
                bookItemId: biId,
                borrowDate,
                dueDate,
                returnDate: null,
                isReturned: false
            });
            console.log("✅ Borrow ticket created.");
            break;

        case "7":
            const returnId = readline.question("Borrow Ticket ID to return: ");
            borrowTicketService.returnBorrowTicket(returnId);
            console.log("✅ Book returned successfully.");
            break;

        case "8":
            console.table(borrowTicketService.getAllBorrowTicket());
            break;

        case "0":
            running = false;
            console.log("👋 Goodbye!");
            break;

        default:
            console.log("❌ Invalid choice. Please try again.");
    }
}
