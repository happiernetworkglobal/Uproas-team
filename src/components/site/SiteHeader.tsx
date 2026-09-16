import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { A } from "@/content/page-data";
const links = [["Proof","proof"],["Our Process","strategy"],["Case Studies","cases"],["FAQ","faq"]];
export function SiteHeader() {
 const [open,setOpen]=useState(false);
 return <><div className="bg-primary px-4 py-2 text-center text-xs font-black uppercase text-primary-foreground sm:text-sm">Breaking news: Free strategy sessions are now open</div><header className="sticky top-0 z-50 border-b border-border/20 bg-ink/95 text-paper backdrop-blur"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="#top" aria-label="Uproas home"><img src={`${A}Uproas Logo.png`} alt="Uproas" className="size-16 object-contain brightness-0 invert"/></a><nav className="hidden items-center gap-8 md:flex">{links.map(([l,id])=><a key={id} href={`#${id}`} className="text-sm font-bold uppercase hover:text-primary">{l}</a>)}<Button asChild className="rounded-none font-black uppercase"><a href="#contact">Get started</a></Button></nav><Button variant="ghost" size="icon" className="text-paper md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="grid border-t border-paper/10 px-5 py-5 md:hidden">{links.map(([l,id])=><a onClick={()=>setOpen(false)} key={id} href={`#${id}`} className="border-b border-paper/10 py-4 font-bold uppercase">{l}</a>)}<a onClick={()=>setOpen(false)} href="#contact" className="mt-4 bg-primary p-4 text-center font-black uppercase text-primary-foreground">Get started</a></nav>}</header></>;
}
