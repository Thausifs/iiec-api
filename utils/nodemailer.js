import nodemailer from "nodemailer";
require("dotenv").config();

async function sentmail(toaddress, Coun_Date , Coun_Time  ) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.gmail_username,
        pass: process.env.gmail_password,
      },
    });
    const mailoptions = {
      from: process.env.gmail_username,
      to: toaddress,
      subject: "IIEC COUNSELLING ALERT",
      html: `<p>Your Counselling has been scheduled on ${Coun_Date} at ${Coun_Time}. Please conplete your payment in the link provide below <a href="https://pages.razorpay.com/pl_LJC6faHwr9s1Ki/view">https://pages.razorpay.com/pl_LJC6faHwr9s1Ki/view</a>. </P>`,
    };
    transporter.sendMail(mailoptions, async (error, info) => {
      if (error) {
        console.log(`🔴 ${error} requires elevated privileges`);
      } else {
        // db store data
        console.log(`🟢 Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(`Error from mail ->  ${error.message}`);
  }
}

async function setpassword(toaddress, Employee_Id, Employee_Name, Password) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.gmail_username,
        pass: process.env.gmail_password,
      },
    });
    const mailoptions = {
      from: process.env.gmail_username,
      to: toaddress,
      subject: "IIEC SET PASSWORD",
      html: `<p>Hi ${Employee_Name} your employee id ${Employee_Id} has been  added as an employee in IIEC . Please use this generated password ${Password} to login .  </P>`,
    };
    transporter.sendMail(mailoptions, async (error, info) => {
      if (error) {
        console.log(`🔴 ${error} requires elevated privileges`);
      } else {
        // db store data
        console.log(`🟢 Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(`Error from mail ->  ${error.message}`);
  }
}

export { sentmail, setpassword };

