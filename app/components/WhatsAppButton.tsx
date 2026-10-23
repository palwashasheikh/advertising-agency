import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}