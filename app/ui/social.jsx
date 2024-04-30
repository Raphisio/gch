import { FacebookIcon, InstagramIcon, WhatsAppIcon, GithubIcon } from "./icon";

export function Facebook() {
  return (
    <div className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <FacebookIcon color="#918D8B" />
    </div>
  )
}

export function Instagram() {
  return (
    <div className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <InstagramIcon color="#918D8B" />
    </div>
  )
}

export function WhatsApp() {
  return (
    <div className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <WhatsAppIcon color="#918D8B" />
    </div>
  )
}

export function Github() {
  return (
    <div className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <GithubIcon color="#918D8B" />
    </div>
  )
}