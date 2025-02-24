import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import Connect from "@/lib/connection"
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helper/mailer";


export async function POST(request: NextRequest) {
    await Connect();
    try {
        const reqBody = await request.json();
        const { fullname, email, password } = reqBody;


        //check if user already exist
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);


        const newUser = new User({
            fullname,
            email,
            password: hashPassword,
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created SUccessfully",
            success: true,
            savedUser,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                err: "Connot fetch " + error.message,
            },
            { status: 500 }
        );
    }
}