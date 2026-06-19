"use client";

import { useState } from "react";

// Shows a practitioner photo from /public (e.g. /team/radha.jpg). Until a photo
// is uploaded there, it falls back to the person's initials in a styled circle,
// so the team section always looks intentional.
export default function Avatar({ src, initials, alt }) {
  const [failed, setFailed] = useState(!src);

  return (
    <span className="avatar" aria-hidden={failed ? "true" : undefined}>
      {failed ? (
        initials
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </span>
  );
}
