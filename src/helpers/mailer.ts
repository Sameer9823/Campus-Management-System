import User from '@/models/userModels';
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'

export const sendEmail = async({email, emailType, userId}:any) => 
{
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000 

                })}
                else if(emailType === "RESET"){
                    await User.findByIdAndUpdate(userId,
                        {
                            forgotPasswordToken: hashedToken,
                            forgotPasswordTokenExpiry: Date.now() + 3600000 
                        })
                }

                const transport = nodemailer.createTransport({
                    host: "sandbox.smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                      user: "584f4e86d1bf23",
                      pass: "********417f"
                    }
                  });

          const mailOptions = {
            from: 'factsbyai3@gmail.com', 
            to: email,
            subject: emailType === "VERIFY" ? "verify your email" : "Reset your password", 
            text: "Hello world?", 
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to $
            {emailType === "VERIFY" ? "verify your email" : "Reset your password"}
            or copy and paste the lunk below in your browser.
            <br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`, 
          }

        const mailResponse =  await transport.sendMail(mailOptions)
        return mailResponse
          
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}