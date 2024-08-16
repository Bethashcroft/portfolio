"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [showErrors, setShowErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const updateVal = (
    setState: Dispatch<SetStateAction<string>>,
    val: string
  ) => {
    setShowErrors({
      name: false,
      email: false,
      message: false,
    });
    setState(val);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
      setShowErrors({
        name: name.length <= 0,
        email: email.length <= 0,
        message: message.length <= 0,
      });
    } else {
      // use emailjs to submit email
      if (
        process.env.NEXT_PUBLIC_EMAIL_SERVICE &&
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE
      ) {
        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
            {
              from_name: name,
              from_email: email,
              message: message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          );

          setName("");
          setEmail("");
          setMessage("");
          console.log("sent email! notify the user");
          toast({
            title: "Email sent!",
            description: "I will get back to you ASAP!",
          });
        } catch {
          toast({
            title: "Error sending email",
            description: "Please try again later, or contact me via Linkedin",
            variant: "destructive",
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-[2em]" id="contact">
      <h2 className="text-3xl">Contact</h2>
      <form
        className="flex flex-col md:grid md:grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => updateVal(setName, e.target.value)}
            />
            {showErrors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => updateVal(setEmail, e.target.value)}
            />
            {showErrors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
        </div>
        <div>
          <Textarea
            className="h-full"
            placeholder="Message"
            value={message}
            onChange={(e) => updateVal(setMessage, e.target.value)}
          />
          {showErrors.message && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>
        <Button
          className="w-full md:w-[10em] justify-self-center col-span-2 md:mt-[1em]"
          type="submit"
          variant="outline"
          disabled={
            name.length <= 0 || email.length <= 0 || message.length <= 0
          }
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
