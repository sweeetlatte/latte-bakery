import React from "react";

import getintouch1 from "../../assets/images/getintouch-1.png";
import getintouch2 from "../../assets/images/getintouch-2.png";
import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import twitter from "../../assets/icons/Twitter.svg";
import youtube from "../../assets/icons/Youtube.svg";

export default function GetInTouch() {
    return (
        <div className="pt-60 pb-24">
            <div className="absolute left-36">
                <img src={getintouch1} alt="get in touch 1" />
            </div>
            <div className="mt-32 bg-light h-max relative px-14 py-14 mx-[245px] rounded-lg">
                <div className="text-primary font-bold text-2xl underline underline-offset-8">
                    Get In Touch
                </div>
                <div className="text-left pt-12 text-xl">
                    Leave us a message
                </div>
                <div className="flex space-x-14 pt-8">
                    <form className="basis-7/12">
                        <input
                            className="w-full bg-light border rounded py-3.5 px-3.5 mb-6"
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Name"
                        />
                        <input
                            className="w-full bg-light border rounded py-3.5 px-3.5 mb-6"
                            type="text"
                            id="email"
                            name="firstname"
                            placeholder="Email Address"
                        />
                        <textarea
                            className="w-full bg-light border rounded py-3.5 px-3.5 mb-10 h-32"
                            id="message"
                            name="firstname"
                            placeholder="Your Message"
                        />
                        <button className="border w-full border-primary bg-primary px-5 py-2.5 rounded-md">
                            Send
                        </button>
                    </form>
                    <div className="basis-5/12 text-left flex flex-col justify-between">
                        <div>
                            Infomation technologies building, Victoria Island,
                            Lagos, Nigeria.
                        </div>
                        <div>+234 081-1236-4568</div>
                        <div>hello@info.com.ng</div>
                        <div className="flex space-x-4">
                            <img
                                className="cursor-pointer"
                                src={youtube}
                                alt="youtube"
                            />
                            <img
                                className="cursor-pointer"
                                src={instagram}
                                alt="instagram"
                            />
                            <img
                                className="cursor-pointer"
                                src={facebook}
                                alt="facebook"
                            />
                            <img
                                className="cursor-pointer"
                                src={twitter}
                                alt="twitter"
                            />
                        </div>
                        <iframe
                            title="map"
                            className="w-full rounded"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.26066752016!2d106.7824544!3d10.88264815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1646993995829!5m2!1svi!2s"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
