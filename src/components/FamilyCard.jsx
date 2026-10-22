import MemberCard from "./MemberCard.jsx";

// Ek taraf (groom ya bride) ka poora family section
export default function FamilyCard({ family }) {
  return (
    <article className="family-side">
      <div className="flower">❀</div>
      <h3>{family.couple}</h3>
      <div className="divider">──── ✦ ────</div>
      {family.groups.map((g) => (
        <div className="family-group" key={g.title}>
          <h4><span>{g.title}</span></h4>
          <div className={g.oneLine ? "member-list one-line" : "member-list"}>
            {g.members.map((m, i) => <MemberCard key={i} member={m} />)}
          </div>
        </div>
      ))}
    </article>
  );
}