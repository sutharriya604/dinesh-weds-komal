import { useState } from "react";
import { Heart } from "lucide-react";
import { families } from "../data/families.js";
import SectionHeading from "./SectionHeading.jsx";
import FamilyCard from "./FamilyCard.jsx";

export default function Family() {
  const [active, setActive] = useState(families[0].id);
  const side = families.find((f) => f.id === active);

  return (
    <section className="section" id="family">
      <SectionHeading
        eyebrow="With love & blessings"
        title="Two Families,"
        accent="One Celebration"
        description="With the blessings of our parents and the love of our families, we invite you to celebrate Dinesh and Komal."
      />
      <div className="family-tabs" role="tablist">
        {families.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={f.id === active}
            className={f.id === active ? "family-tab on" : "family-tab"}
            onClick={() => setActive(f.id)}
          >
            {f.title}
          </button>
        ))}
      </div>
      <FamilyCard family={side} key={side.id} />
      <p className="blessing"><Heart size={16} /> With love, blessings and warm wishes from both families.</p>
    </section>
  );
}