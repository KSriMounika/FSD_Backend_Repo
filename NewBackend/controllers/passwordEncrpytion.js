const bcrypt = require("bcryptjs");

const Encryption = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        return res.status(200).json({
            encryptedPassword: hashedPassword
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const VerifyEncryption = async (req, res) => {
    try {
      
        const encrypted = "$2b$10$7kwGdojOTDBGl91D/VGvAuWGLok479ecLijZ6SUX.DPKffTP5I8sS";

        const result = await bcrypt.compare(
            req.body.password,
            encrypted
        );

        return res.status(200).json({
            isMatch: result
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

module.exports = { Encryption, VerifyEncryption };
