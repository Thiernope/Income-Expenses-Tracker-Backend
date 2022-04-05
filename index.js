import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import incomeTypesRoutes from "./routes/incomeTypes.js"
import userRoutes from "./routes/user.js"
import expensesRoutes from "./routes/Expenses.js"
import transactionsRoutes from "./routes/transactions.js"
import dotenv from "dotenv";
dotenv.config()
const App = express();
App.use(cors())
App.use(bodyParser.json({limit: "30mb", extended: true}));
App.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
App.use("/user", userRoutes)
App.use("/incomes", incomeTypesRoutes );
App.use("/expenses", expensesRoutes)
App.use("/transactions", transactionsRoutes);
const CONNECTION_URL = process.env.DB_CONNECTION;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    App.listen(PORT, () => console.log(`App listening on port ${PORT}`))
})
.catch(error => console.log(error))