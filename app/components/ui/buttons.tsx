"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

type ButtonProps = {
    text: string
}

type ButtonProps1 = {
    text: string
    href?: string
}

const PrimaryButton = ({ text, href = "#" }: ButtonProps1) => {
    return (
        <motion.a
            href={href}
            initial="rest"
            whileHover="hover"
            className="
        relative
        flex
        items-center
        justify-center
        gap-[6px]
        overflow-hidden
        rounded-[10px]
        py-[13px]
        pl-[16px]
        pr-[11px]
        max-h-[50px]
        text-[15px]
        font-semibold
        leading-[1.5]
        tracking-[-0.02em]
        text-white
        bg-gradient-to-b
        from-[#2476FF]
        to-[#0E54C9]
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]
        cursor-pointer
        w-full
      "
        >
            {/* Text */}
            <span className="whitespace-nowrap">
        {text}
      </span>

            {/* Arrow */}
            <div className="relative h-[22px] w-[22px] overflow-hidden flex-shrink-0">
                <motion.div
                    variants={{
                        rest: { x: 0, opacity: 1 },
                        hover: { x: 20, opacity: 0 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <ChevronRight size={18} />
                </motion.div>

                <motion.div
                    variants={{
                        rest: { x: -20, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <ChevronRight size={18} />
                </motion.div>
            </div>

            {/* Shiny diagonal shade */}
            <motion.div
                variants={{
                    rest: { x: "-120%" },
                    hover: { x: "120%" },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="
          pointer-events-none
          absolute
          top-1/2
          left-0
          h-[140px]
          w-[28px]
          -translate-y-1/2
          rotate-[35deg]
          bg-white/50
          blur-[6.5px]
        "
            />
        </motion.a>
    )
}

const SecondaryButton = ({ text }: ButtonProps) => {
    return (
        <div
            className="
        max-h-[50px]
        cursor-pointer
        font-sans
        py-[13px]
        px-[30px]
        rounded-[10px]
        border
        border-[#e6e6e6]
        hover:bg-[#e6e6e6]/40
        transition-all
        ease-in
        text-black
        flex
        items-center
        justify-center
        whitespace-nowrap
        w-full
        sm:w-auto
      "
        >
            {text}
        </div>
    )
}

export { PrimaryButton, SecondaryButton }
