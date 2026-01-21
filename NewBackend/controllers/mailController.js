// const nodemailer = require('nodemailer')

// const TransportInfo = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "keerthisrimounika@gmail.com",
//         pass: process.env.EMAIL_PASS
//     }
// })

// const SendMail = async (req, res) => {
//     try {
//         const result = await TransportInfo.sendMail({
//             from: "keerthisrimounika@gmail.com",
//             to:"keerthisrimounika@gmail.com" ,
//             subject: "testing-subject",
//             text: "kf lkasjd flaksjd flaksjfh lkasj fhlaksjd falskj lasdk",
//             attachments: [
//                 {
//                     filename: "25M11CS033 1.JPG",
//                     path: "./src/public/images/25M11CS033 1.JPG"
//                 }
//             ]
//         })

//         return res.status(200).json(result)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

// module.exports = {
//     TransportInfo,
//     SendMail
// }

const sendMail = (req, res) => {
  res.json({
    message: "Mail sent successfully",
    user: req.user
  })
}

module.exports = { sendMail }
