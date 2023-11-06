/* eslint-disable no-undef */
import express from "express";
import Firestore from "@google-cloud/firestore";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";

dotenv.config();

const app = express();
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  console.error(
    "The FIREBASE_SERVICE_ACCOUNT environment variable is not set."
  );
  process.exit(1);
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const firestore = new Firestore({
  projectId: serviceAccount.project_id,
  credentials: serviceAccount, // use the parsed service account object
});

app.get("/", (req, res) => {
  res.send("Backend server is running.");
});

function validateFormInput(name, email) {
  const isNameValid = name && /^[A-Za-z\s]+$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);

  return isNameValid && isEmailValid;
}

app.post("/submitForm", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  if (!validateFormInput(name, email)) {
    return res
      .status(400)
      .send({ status: "failed", error: "Invalid input values." });
  }
  try {
    const docRef = firestore.collection("submissions").doc();

    await docRef.set({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.APP_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });

    let mailOptions = {
      from: process.env.APP_USER,
      to: process.env.APP_USER,
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    setTimeout(() => {
      let mailOptionsUser = {
        from: process.env.APP_USER,
        to: email,
        subject: "Thank you for your interest!",
        text: "We have received your form submission. Thanks.",
        // might need to spin back up my old email
      };
      transporter.sendMail(mailOptionsUser);
    }, 6000);

    res.status(200).send({ status: "success" });
  } catch (error) {
    res.status(500).send({ status: "failed", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
