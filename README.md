📜 How to Run queries.js Script in MongoDB

To execute the queries.js script containing MongoDB queries and aggregations, follow the steps below using the MongoDB Shell (mongosh):

✅ Prerequisites
Ensure you have MongoDB and mongosh installed on your system.

The script file queries.js should be saved locally and contain valid MongoDB commands.

🧪 Steps to Run the Script
Open your terminal or command prompt.

Navigate to the directory where the queries.js file is located:
Windows Terminal
cd path/to/your/folder

Run the script using mongosh:
Windows Terminal
mongosh < queries.js

This command tells MongoDB to read and execute each line of the script sequentially.

🔍 Optional: Connecting to a Specific Database
If you want to run the script on a particular database (e.g., plp_bookstore), you can use:

Windows Terminal
mongosh "mongodb://localhost:27017/plp_bookstore" < queries.js
For remote databases (e.g., MongoDB Atlas), use your connection string:

Windows Terminal
mongosh "mongodb+srv://username:password@cluster-url.mongodb.net/plp_bookstore" < queries.js


✅ Result
The commands in queries.js will be executed in order.

You’ll see the output for each query directly in the terminal.

Indexing and aggregation pipelines will perform as written in the script.