import Image from "next/image";
import BGImage from "@/public/images/contact/images/background2.png";
// import ilustration from "@/public/images/contact/images/image 20.svg";
import scrollIcon from "@/public/images/contact/images/scroll.svg";
import messageIcon from "@/public/images/contact/images/message-2.svg";
import callIcon from "@/public/images/contact/images/call.svg";
import ContactForm from "./components/form";
export default function ContactPage() {
  return (
    <>
      <div className="w-full">
        <div>
          {/* Background image */}
          <div className="absolute w-full h-[535px]">
            <Image className="w-full h-[535px]" src={BGImage} alt=""></Image>
          </div>
          {/* text */}
          <div className="flex flex-col justify-center items-center relative mt-[100px] w-full">
            <span className="text-center">
              <h1 className="font-bold text-3xl text-white mb-10">
                {"We're"} Here to Help!
              </h1>
              <p className="font-normal text-[16px] text-white">
                Whether you have a question, need support, or want to <br />
                learn more about how DAVI can help your business <br /> harness
                the power of data, {"We're"} here for you. Reach <br /> out to
                our team, and {"We'll"} get back to you as soon as <br />{" "}
                possible.
              </p>
            </span>
          </div>

          {/* contact us form */}
          <ContactForm />
          {/* Get in touch and let's talk */}
          <section>
            <div className="flex flex-col  text-center">
              <h1 className="font-extrabold text-4xl text-[#3F4655] my-20">
                Get in Touch with Us & {"let's"} Talk
              </h1>
              {/* connect with us */}
              {/* get in touch */}
            </div>
            <div className="w-auto mx-[150px] grid grid-cols-3 gap-40 ">
              {/* schedule a demo */}
              <div className="space-y-5">
                <header className="flex  items-center text-center space-x-3">
                  <div>
                    <Image src={scrollIcon} alt=""></Image>
                  </div>
                  <span className="font-bold text-[20px]">Contact with Us</span>
                </header>
                <p>
                  Experience how DAVI can transform your data <br /> into
                  actionable insights. Book a free demo with <br /> one of our
                  experts to see DAVI in action.
                </p>
                <button className="bg-[#443DFF] text-white border p-3 rounded-lg font-bold">
                  Get Started
                </button>
              </div>
              {/* contact with us */}
              <div className="space-y-5">
                <header className="flex items-center text-center space-x-5">
                  <div>
                    <Image src={messageIcon} alt=""></Image>
                  </div>
                  <span className="font-bold text-[20px]">Schedule a Demo</span>
                </header>
                <li>LinkedIn: DAVI Solutions</li>
                <li>Twitter: @DAVI_Data</li>
                <li>Facebook: DAVI Data Analytics</li>
              </div>
              {/* get in touch */}
              <div className="space-y-5">
                <header className="flex items-center text-center space-x-5">
                  <div>
                    <Image src={callIcon} alt=""></Image>
                  </div>
                  <span className="font-bold text-[20px]">Schedule a Demo</span>
                </header>
                <li>Email: support@davi.com</li>
                <li>Phone: +1-800-DAVI-SUP</li>
                <li>Office Hours: Monday - Friday</li>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
