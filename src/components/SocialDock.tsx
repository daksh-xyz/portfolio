"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Social from "../../public/icons/social.png";
import Github from "../../public/icons/github.png";
import Linkedin from "../../public/icons/linkedin.png";
import Mail from "../../public/icons/email.png";
import Phone from "../../public/icons/phone.png";

export default function SocialDock() {
    const icons = [Github, Linkedin, Mail, Phone];
    const links = ["https://github.com/daksh-xyz", "https://linkedin.com/in/daksh-xyz", "mailto:dakshrklal@gmail.com", "phoneto:+918287086661"]

    return (
        // purely for centering
        <div className="relative flex justify-center">
            <motion.div
                initial="rest"
                whileHover="hover"
                className="relative h-10 w-10"
            >
                {/* Dynamic hitbox */}
                <motion.div
                    variants={{
                        rest: {
                            width: 40,
                        },
                        hover: {
                            width: 220,
                        },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                    className="absolute top-0 right-0 h-10 pointer-events-auto"
                />

                {/* Social bubble */}
                <motion.div
                    variants={{
                        rest: {
                            opacity: 1,
                            scale: 1,
                        },
                        hover: {
                            opacity: 0,
                            scale: 0.5,
                        },
                    }}
                    className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center"
                >
                    <Image src={Social} alt="social" width={24} height={24} />
                </motion.div>

                {/* Icons */}
                {icons.map((icon, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            rest: {
                                opacity: 0,
                                scale: 0.5,
                                x: 0,
                            },
                            hover: {
                                opacity: 1,
                                scale: 1,
                                x: -(i * 55),
                            },
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 22,
                            delay: i * 0.03,
                        }}
                        className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center"
                    >
                        <a href={links[i]}>
                            <Image src={icon} alt="" width={24} height={24} />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}