import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-primary font-clash text-xl">
            Questions or need assistance? <br />
            Let us know about it
          </h1>
          <p className="text-white font-sm">
            Email us below to any question related to our event
          </p>
        </div>
      </div>
      <div>
        <form>
          <Input placeholder="Teams Name" />
        </form>
      </div>
    </section>
  );
}
