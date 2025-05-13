import readline from "readline-sync";
import { UserService } from "./service/UserService";
import { BookService } from "./service/BookService";
import { BookItemService } from "./service/BookItemService";
import { BorrowTicketService } from "./service/BorrowTicketServie";
import { KindBooks } from "./enums/KindBooks";

const userService = new UserService();
const bookService = new BookService();
const bookItemService = new BookItemService();
const borrowTicketService = new BorrowTicketService();

function inputNotEmpty(promptText: string): string {
    let input = "";
    do {
        input = readline.question(promptText).trim();
        if (input === "") {
            console.log("❌ Input cannot be empty. Please try again.");
        }
    } while (input === "");
    return input;
}

function inputEnumChoices(enumValues: string[]): string[] {
    let input = "";
    let result: string[] = [];
    while (true) {
        input = readline.question("Enter kinds (e.g. 1,3): ");
        result = input
            .split(",")
            .map(i => parseInt(i.trim()) - 1)
            .filter(i => i >= 0 && i < enumValues.length)
            .map(i => enumValues[i]);

        if (result.length > 0) break;
        console.log("❌ Invalid selection. Please choose valid numbers from the list.");
    }
    return result;
}

function showMenu() {
    console.log("\n📚 LIBRARY MANAGEMENT SYSTEM");
    console.log("1. USER MANAGER ");
    console.log("2. BOOK MANAGER");
    console.log("0. Exit");
}

function showMenuUser() {
    console.log("\n USER MANAGEMENT SYSTEM");
    console.log("1. Add User");
    console.log("2. View All Users");
    console.log("3. Update User")
    console.log("0. Exit");
}

function showMenuBook() {
    console.log("\n BOOK MANAGEMENT SYSTEM");
    console.log("1. Add Book");
    console.log("2. View All Books");
    console.log("3. Create Book Copy (BookItem)");
    console.log("4. View All Book Copy")
    console.log("5. Borrow a Book");
    console.log("6. Return a Book");
    console.log("7. View All Borrow Tickets");
    console.log("0. Exit");
}

let running = true;

while (running) {
    showMenu();
    const choice = readline.question("👉 Enter your choice: ");

    switch (choice) {
        case "1": {
            let check = true;
            while (check) {
                showMenuUser();
                const choice = readline.question("Enter your choice: ");
                switch (choice) {
                    case "1": {
                        const userId = inputNotEmpty("User ID: ");
                        const userName = inputNotEmpty("Name: ");
                        const phone = inputNotEmpty("Phone number: ");
                        const newUser = userService.createUser({ id: userId, name: userName, phone });
                        
                        console.log("✅ User added successfully.");
                        break;
                    }
                    case "2":
                        console.table(userService.getAllUser());
                        break;
                    case "3":{
                        const userId = inputNotEmpty("User Id: ");
                        const userName = inputNotEmpty("Name: ");
                        const phone = inputNotEmpty("Phone number: ");
                        userService.updateUser(userId,{name:userName,phone:phone});
                        console.log("update user success"); 
                        break;
                    }

                    case "0":
                        check = false;
                        break;
                    default:
                        console.log("❌ Invalid choice. Please try again.");
                }
            }
            break;
        }
        case "2": {
            let check1 = true;
            while (check1) {
                showMenuBook();
                const choice = readline.question("Enter your choice: ");
                switch (choice) {
                    case "1": {
                        const bookId = inputNotEmpty("Book ID: ");
                        const title = inputNotEmpty("Title: ");
                        const author = inputNotEmpty("Author: ");

                        const kindOptions = Object.values(KindBooks);
                        console.log("Choose book kinds (comma-separated):");
                        kindOptions.forEach((k, index) => {
                            console.log(`${index + 1}. ${k}`);
                        });

                        const selectedKinds = inputEnumChoices(kindOptions).map(k => k as KindBooks);

                        const book = bookService.createBook({ id: bookId, title, author, kind: selectedKinds });
                        console.log("✅ Book added successfully.");
                        break;
                    }
                    case "2":
                        console.table(bookService.getAllBook());
                        break;
                    case "3": {
                        const bookItemId = inputNotEmpty("BookItem ID: ");
                        const bookRefId = inputNotEmpty("Book ID: ");
                        const bookItem = bookItemService.createBookItem({ id: bookItemId, idBook: bookRefId, available: true });
                        console.log("✅ BookItem created successfully.");
                        break;
                    }
                    case "4":{
                        console.table(bookItemService.getAllBookItem());
                        break;
                    }
                    case "5": {
                        const ticketId = inputNotEmpty("Borrow Ticket ID: ");
                        const uId = inputNotEmpty("User ID: ");
                        const biId = inputNotEmpty("BookItem ID: ");
                        const borrowDate = new Date(inputNotEmpty("Borrow Date (yyyy-mm-dd): "));
                        const dueDate = new Date(inputNotEmpty("Due Date (yyyy-mm-dd): "));
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
                    }
                    case "6": {
                        const returnId = inputNotEmpty("Borrow Ticket ID to return: ");
                        borrowTicketService.returnBorrowTicket(returnId);
                        console.log("✅ Book returned successfully.");
                        break;
                    }
                    case "7":
                        console.table(borrowTicketService.getAllBorrowTicket());
                        break;
                    case "0":
                        check1 = false;
                        break;
                    default:
                        console.log("❌ Invalid choice. Please try again.");
                }
            }
            break;
        }
        case "0":
            running = false;
            console.log("👋 Goodbye!");
            break;
        default:
            console.log("❌ Invalid choice. Please try again.");
    }
}
