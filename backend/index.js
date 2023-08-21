import express from "express";
import cors from "cors";
// import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express();

// dotenv.config({ path: "C:\Users\rodri\Documents\GitHub\db_project\.env" });

app.use(express.json());
app.use(cookieParser())
app.use(cors());

let PORT = process.env.PORT || 8800;

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/user", userRoutes)

app.get("/test", (req,res)=> {
  res.json("this is post")
})


// app.get("/", (req, res) => {
//   res.json("Hello this is the backend!");
// });

// app.get("/account", (req, res) => {
//   const q = "SELECT * FROM account";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.get("/accountid", (req, res) => {
//   const q = "SELECT MAX(account_id) FROM account";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.get("/student/:id", (req, res) => {
//     const student_id = req.params.id;
//     const q = "SELECT * FROM account WHERE student_id = ?";
//     db.query(q, (err, data) => {
//       if (err) return res.json(err);
//       return res.json(data);
//     });
//   });

// app.post("/account", (req, res) => {
//   const q =
//     "INSERT INTO account (`username`,`email`,`password`) VALUES (?)";
//   const values = [
//     req.body.username,
//     req.body.email,
//     req.body.password,
//   ];
//   db.query(q, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("Account created successfully.");
//   });
// });

// app.post("/student", (req, res) => {
//   const q =
//     "INSERT INTO student (`student_id`, `account_id`, `first_name`,`last_name`,`address`, `phone_number`, `date_of_birth`, `gpa`) VALUES (?)";
//   const values = [
//     req.body.student_id,
//     req.body.account_id,
//     req.body.first_name,
//     req.body.last_name,
//     req.body.address,
//     req.body.phone_number,
//     req.body.date_of_birth,
//     req.body.gpa,
//   ];
//   db.query(q, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("Student info added successfully.");
//   });
// });

// app.put("/student/:id", (req, res) => {
//   const student_id = req.params.id;
//   const q =
//     "UPDATE student SET `first_name` = ?,`last_name` = ?,`address` = ?, `phone_number` = ?, `date_of_birth` = ?, `gpa` WHERE student_id = ?";

//   const values = [
//     req.body.student_id,
//     req.body.account_id,
//     req.body.first_name,
//     req.body.last_name,
//     req.body.address,
//     req.body.phone_number,
//     req.body.date_of_birth,
//     req.body.gpa,
//     req.body.account_id,
//   ];

//   db.query(q, [...values, student_id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("Student updated successfully.");
//   });
// });

// app.delete("/student/:id", (req, res) => {
//     const student_id = req.params.id;
//     const q = "DELETE FROM account WHERE account_id = ? DELETE FROM student WHERE student_id = ?"
//     db.query(q, [student_id], (err, data) => {
//         if (err) return res.json(err);
//         return res.json("Student deleted successfully.");
//     });
// })

app.listen(PORT, () => {
  console.log("App listening on PORT", PORT);
});
