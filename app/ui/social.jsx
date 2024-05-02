import Link from 'next/link';
import Image from 'next/image';

export function Facebook() {
  return (
    <Link href="https://www.facebook.com/GCodeHarbor" target='_blank' className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <Image src="/icon/f.svg" alt="Facebook" className='size-5' width={0} height={0} />
    </Link>
  )
}

export function Instagram() {
  return (
    <Link href="#" className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <Image src="/icon/insta.svg" alt="Instagram" className='size-5' width={0} height={0} />
    </Link>
  )
}

export function WhatsApp() {
  return (
    <Link href="#" className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <Image src="/icon/whatsapp.svg" alt="Whatsapp" className='size-5' width={0} height={0} />
    </Link>
  )
}

export function Github() {
  return (
    <Link href="https://github.com/Global-Code-Harbor/" target='_blank' className="bg-[#191818] flex items-center justify-center cursor-pointer size-10 rounded-full transition-transform duration-150 ease-in hover:-translate-y-1">
      <Image src="/icon/github.svg" alt="Github" className='size-5' width={0} height={0} />
    </Link>
  )
}