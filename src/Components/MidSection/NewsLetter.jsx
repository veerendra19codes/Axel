import React, { useState } from "react"
import { Input } from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleEmail = (e) => {
        e.preventDefault();
        console.log("email", email);
        setEmail("");
    }

    return (
        <div className="flex items-center justify-center content-center justify-items-center relative">
            <div className="bottom-14 h-full flex justify-evenly bg-darkBlue w-4/5 py-24 rounded-xl translate-y-32 duration-700">
                <div>
                    <h2 className="w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white">
                        Sign Up for our NewsLetter
                    </h2>
                    <p className="block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white">
                        Join our newsletter and get news in your inbox every week!
                    </p>
                </div>
                <div className="flex items-center jutify-center content-center">
                    <div className="pb-4 pt-4 w-64 text-white">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-whiite"
                            label="Email"
                        />
                    </div>
                    <div>
                        <Button onClick={handleEmail} ripple={true} className="ml-2 bg-blue-400 text-white">Button</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;