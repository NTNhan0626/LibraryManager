import { BookService } from "./service/BookService";

const bookService = new BookService();

// 1. Kiểm tra danh sách ban đầu
console.log("📚 Initial list of books:");
console.log(bookService.getAllBook());

// 2. Tạo một cuốn sách mới
console.log("\n➕ Creating a new book:");
const newBook = bookService.createBook({
    id: 'b101',
    title: 'The Art of War',
    author: 'Sun Tzu'
});
console.log(newBook);

// 3. Kiểm tra lại danh sách sau khi thêm
console.log("\n📚 Updated list of books:");
console.log(bookService.getAllBook());

// 4. Lấy thông tin sách theo id
console.log("\n🔍 Get book by ID = 'b101':");
const bookById = bookService.getBook('b101');
console.log(bookById);

// 5. Cập nhật thông tin sách
console.log("\n✏️ Updating book 'b101':");
const updateResult = bookService.updateBook('b101', {
    title: 'The Art of War - Revised',
    author: 'Sun Tzu Master'
});
console.log("✅ Update successful?", updateResult);

// 6. Lấy lại sách sau khi update
console.log("\n📘 Book after update:");
console.log(bookService.getBook('b101'));

// 7. Thử update cuốn không tồn tại
console.log("\n❌ Updating non-existent book:");
const failUpdate = bookService.updateBook('nonexistent-id', {
    title: 'Not Found',
    author: 'Nobody'
});
console.log("✅ Update successful?", failUpdate);
