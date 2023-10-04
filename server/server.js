/* eslint-disable no-undef */
import express from "express";
import bodyParser from "body-parser";
import Firestore from "@google-cloud/firestore";
import nodemailer from "nodemailer";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(
  // eslint-disable-next-line no-undef
  __dirname,
  "./secrets",
  "ildidev-form-firebase-adminsdk-5zac7-79e3b2cb99.json"
);

const app = express();
app.use(cors());
app.use(bodyParser());

const firestore = new Firestore({
  projectId: "ildidev-form",
  keyFilename: keyPath,
});

app.use(cors());
app.use(bodyParser.json());

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
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD,
      },
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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
