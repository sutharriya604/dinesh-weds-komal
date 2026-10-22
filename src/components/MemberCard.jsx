import { useState } from "react";
import { User, Users } from "lucide-react";

// names me 1 naam = single card, 2 naam = couple card
export default function MemberCard({ member }) {
  const [hasPhoto, setHasPhoto] = useState(Boolean(member.photo));
  const couple = member.names.length > 1;
  const label = member.names.join(" & ");

  return (
    <figure className={couple ? "member member-couple" : "member"}>
      <div className="member-photo">
        {hasPhoto ? (
          <img src={member.photo} alt={label} loading="lazy" onError={() => setHasPhoto(false)} />
        ) : (
          <div className="member-ph">{couple ? <Users /> : <User />}</div>
        )}
      </div>
      <figcaption>
        <strong>
          {member.names.map((n, i) => (
            <span key={i}>{i > 0 && <i> & </i>}{n}</span>
          ))}
        </strong>
        {member.relation && <small>{member.relation}</small>}
      </figcaption>
    </figure>
  );
}