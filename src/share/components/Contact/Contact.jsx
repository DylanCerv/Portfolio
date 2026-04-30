import React from 'react'
import { Link } from 'react-router-dom'
import { LuSendHorizonal } from "react-icons/lu";
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton'

const FIELD_DEFAULT = "border-2 bg-slate-900 border-slate-700";

export default function Contact({ text, linkSend, className = "", fieldClassName }) {
  const field =
    fieldClassName !== undefined ? fieldClassName : FIELD_DEFAULT;
  return (
    <section className={`grid grid-cols-8 flex-wrap md:flex-nowrap items-center gap-3 ${className}`}>
        <div className={`col-span-8 md:col-span-6 w-full px-4 py-2 ${field} rounded-xl overflow-hidden line-clamp-1`}>{text}</div>
        {linkSend && 
            <Link to={linkSend} target='_blank' className="col-span-4 md:col-span-1 relative px-4 py-2 group/copy text-black bg-sky-300 rounded-lg grid place-content-center">
                <LuSendHorizonal size={24} />
            </Link>
        }
        <CopyToClipboardButton value={text} />
    </section>
  )
}
