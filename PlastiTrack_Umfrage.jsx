import { useState } from "react";

const SECTIONS = [
  {
    id: "intro",
    title: "Über dich",
    subtitle: "Kurz & persönlich — wer bist du?",
    color: "#1A6B47",
    emoji: "👤",
    questions: [
      {
        id: "q1",
        type: "single",
        text: "Wie alt bist du?",
        options: ["Unter 18", "18–22 Jahre", "23–27 Jahre", "28–35 Jahre", "Über 35"],
      },
      {
        id: "q2",
        type: "single",
        text: "Was ist dein Studienfach / Bereich?",
        options: [
          "Wirtschaft / BWL",
          "Informatik / Technik",
          "Gestaltung / Design",
          "Natur- / Umweltwissenschaften",
          "Sozial- / Geisteswissenschaften",
          "Anderes",
        ],
      },
      {
        id: "q3",
        type: "single",
        text: "Wie nachhaltig lebst du aktuell im Alltag?",
        options: [
          "Kaum — ich denke selten darüber nach",
          "Ein bisschen — ich achte manchmal drauf",
          "Mittel — ich versuche es aktiv",
          "Sehr — Nachhaltigkeit ist mir wichtig",
        ],
      },
      {
        id: "q4",
        type: "single",
        text: "Nutzt du aktuell andere Nachhaltigkeits- oder Tracking-Apps?",
        options: ["Ja, regelmäßig", "Ja, aber selten", "Nein, aber ich wäre interessiert", "Nein, kein Interesse"],
      },
    ],
  },
  {
    id: "concept",
    title: "Das Konzept",
    subtitle: "Dein erster Eindruck von PlastiTrack",
    color: "#0891B2",
    emoji: "💡",
    questions: [
      {
        id: "q5",
        type: "scale",
        text: "Wie verständlich war die Grundidee von PlastiTrack für dich?",
        scale: ["Gar nicht verständlich", "Sehr gut verständlich"],
      },
      {
        id: "q6",
        type: "scale",
        text: "Wie relevant ist das Problem (Plastikverbrauch im Alltag) für dich persönlich?",
        scale: ["Nicht relevant", "Sehr relevant"],
      },
      {
        id: "q7",
        type: "multi",
        text: "Was hat dich am Konzept am meisten angesprochen? (Mehrfachauswahl)",
        options: [
          "Der Fisch-Avatar als visuelles Feedback",
          "Das Punkte- & Belohnungssystem",
          "Die Level-Progression (0–100%)",
          "Der Bezug zu echtem Plastikverbrauch",
          "Die Idee, Tiere zu retten",
          "In-App-Währung & Skins",
          "Nichts davon",
        ],
      },
      {
        id: "q8",
        type: "single",
        text: "Glaubst du, dass PlastiTrack dein Verhalten langfristig verändern könnte?",
        options: [
          "Ja, auf jeden Fall",
          "Wahrscheinlich schon",
          "Eher nicht",
          "Nein, glaube ich nicht",
          "Weiß ich noch nicht",
        ],
      },
    ],
  },
  {
    id: "avatar",
    title: "Avatar & Gamification",
    subtitle: "Der Kern der App — Fisch & Punkte",
    color: "#7C3AED",
    emoji: "🐟",
    questions: [
      {
        id: "q9",
        type: "scale",
        text: "Wie motivierend findest du die Idee, einen Avatar durch Verhalten zu verbessern?",
        scale: ["Gar nicht motivierend", "Sehr motivierend"],
      },
      {
        id: "q10",
        type: "single",
        text: "Welches Avatar-Design findest du am ansprechendsten?",
        options: [
          "Fisch (wie im Prototyp)",
          "Menschliche Silhouette (mit Plastik gefüllt)",
          "Tier nach Wahl (z.B. Vogel, Schildkröte)",
          "Fantasiefigur / abstraktes Wesen",
          "Ist mir egal",
        ],
      },
      {
        id: "q11",
        type: "scale",
        text: "Wie klar war das Level-System (Sehr gut → Gut → Ok → Schlecht → Überfüllt)?",
        scale: ["Gar nicht klar", "Sehr klar"],
      },
      {
        id: "q12",
        type: "single",
        text: "Wie oft würdest du deinen Avatar in der App checken?",
        options: [
          "Mehrmals täglich",
          "Einmal täglich",
          "Ein paar Mal pro Woche",
          "Selten",
          "Nie",
        ],
      },
      {
        id: "q13",
        type: "multi",
        text: "Welche Belohnungen würden dich am meisten motivieren? (Mehrfachauswahl)",
        options: [
          "Avatar-Skins & Outfits",
          "Virtuelles Retten von echten Tieren",
          "Badges & Achievements",
          "Ranglisten mit Freunden",
          "Echte Rabatte / Gutscheine",
          "CO₂-Zertifikate oder Spenden",
          "Wöchentliche Challenges",
        ],
      },
    ],
  },
  {
    id: "app",
    title: "App Interface & Usability",
    subtitle: "Wie benutzerfreundlich ist die App?",
    color: "#D97706",
    emoji: "📱",
    questions: [
      {
        id: "q14",
        type: "scale",
        text: "Wie übersichtlich war das App-Interface?",
        scale: ["Sehr unübersichtlich", "Sehr übersichtlich"],
      },
      {
        id: "q15",
        type: "scale",
        text: "Wie ansprechend findest du das visuelle Design der App?",
        scale: ["Gar nicht ansprechend", "Sehr ansprechend"],
      },
      {
        id: "q16",
        type: "scale",
        text: "Wie einfach war es, deinen Plastikverbrauch einzutragen?",
        scale: ["Sehr umständlich", "Sehr einfach"],
      },
      {
        id: "q17",
        type: "multi",
        text: "Was würde die App für dich noch benutzerfreundlicher machen? (Mehrfachauswahl)",
        options: [
          "Schnelleres Eintragen (1-Click)",
          "Automatisches Tracking via Sensor",
          "Push-Erinnerungen",
          "Barcode-Scanner für Produkte",
          "Bessere Infografiken / Statistiken",
          "Dark Mode",
          "Offline-Nutzung",
        ],
      },
      {
        id: "q18",
        type: "single",
        text: "Auf welchem Gerät würdest du PlastiTrack hauptsächlich nutzen?",
        options: ["iPhone / iOS", "Android-Smartphone", "Tablet", "Desktop / Web", "Wearable / Smartwatch"],
      },
    ],
  },
  {
    id: "daily",
    title: "Alltagstauglichkeit",
    subtitle: "Passt die App in deinen Alltag?",
    color: "#059669",
    emoji: "🗓️",
    questions: [
      {
        id: "q19",
        type: "scale",
        text: "Wie gut lässt sich PlastiTrack in deinen Alltag integrieren?",
        scale: ["Überhaupt nicht", "Perfekt"],
      },
      {
        id: "q20",
        type: "single",
        text: "Wie viel Zeit pro Tag würdest du bereit sein, für die App aufzuwenden?",
        options: [
          "Unter 1 Minute",
          "1–3 Minuten",
          "5–10 Minuten",
          "Mehr als 10 Minuten",
          "Keine Zeit",
        ],
      },
      {
        id: "q21",
        type: "single",
        text: "Würdest du PlastiTrack deinen Freunden empfehlen?",
        options: [
          "Ja, definitiv",
          "Wahrscheinlich schon",
          "Eher nicht",
          "Nein",
        ],
      },
      {
        id: "q22",
        type: "single",
        text: "Was würde dich langfristig bei der Stange halten?",
        options: [
          "Sichtbarer Fortschritt im Avatar",
          "Soziale Vergleiche mit Freunden",
          "Wöchentliche neue Challenges",
          "Echte Belohnungen (Rabatte etc.)",
          "Das Bewusstsein, etwas zu bewirken",
          "Nichts davon — ich würde die App nicht nutzen",
        ],
      },
    ],
  },
  {
    id: "feedback",
    title: "Offenes Feedback",
    subtitle: "Deine Meinung in eigenen Worten",
    color: "#DB2777",
    emoji: "✍️",
    questions: [
      {
        id: "q23",
        type: "text",
        text: "Was hat dir an PlastiTrack am besten gefallen?",
        placeholder: "Schreib hier dein Feedback...",
      },
      {
        id: "q24",
        type: "text",
        text: "Was würdest du an der App verändern oder verbessern?",
        placeholder: "Schreib hier deine Verbesserungsvorschläge...",
      },
      {
        id: "q25",
        type: "text",
        text: "Gibt es Funktionen, die du vermisst oder die du dir wünschen würdest?",
        placeholder: "Deine Wünsche & Ideen...",
      },
      {
        id: "q26",
        type: "single",
        text: "Würdest du PlastiTrack nutzen, wenn es als echte App verfügbar wäre?",
        options: [
          "Ja, sofort herunterladen",
          "Ja, es ausprobieren",
          "Vielleicht — kommt auf die finale Version an",
          "Eher nicht",
          "Nein",
        ],
      },
    ],
  },
];

const ScaleQuestion = ({ question, value, onChange }) => {
  const nums = [1, 2, 3, 4, 5];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 11, color: "#64748b", maxWidth: 120 }}>{question.scale[0]}</span>
        <span style={{ fontSize: 11, color: "#64748b", maxWidth: 120, textAlign: "right" }}>{question.scale[1]}</span>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {nums.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            style={{
              width: 48, height: 48, borderRadius: "50%", border: value === n ? "none" : "2px solid #e2e8f0",
              background: value === n ? "var(--accent)" : "#f8fafc",
              color: value === n ? "#fff" : "#475569",
              fontWeight: 700, fontSize: 16, cursor: "pointer",
              transform: value === n ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s ease",
              boxShadow: value === n ? "0 4px 14px rgba(0,0,0,0.18)" : "none",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
};

const SingleQuestion = ({ question, value, onChange, accent }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    {question.options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        style={{
          padding: "12px 16px", borderRadius: 10, border: value === opt ? `2px solid ${accent}` : "2px solid #e2e8f0",
          background: value === opt ? accent + "15" : "#f8fafc",
          color: value === opt ? accent : "#334155",
          textAlign: "left", fontSize: 14, cursor: "pointer", fontWeight: value === opt ? 600 : 400,
          transition: "all 0.15s ease",
        }}
      >
        <span style={{ marginRight: 8 }}>{value === opt ? "●" : "○"}</span>
        {opt}
      </button>
    ))}
  </div>
);

const MultiQuestion = ({ question, value = [], onChange, accent }) => {
  const toggle = (opt) => {
    const next = value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt];
    onChange(next);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {question.options.map((opt) => {
        const checked = value.includes(opt);
        return (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            style={{
              padding: "12px 16px", borderRadius: 10, border: checked ? `2px solid ${accent}` : "2px solid #e2e8f0",
              background: checked ? accent + "15" : "#f8fafc",
              color: checked ? accent : "#334155",
              textAlign: "left", fontSize: 14, cursor: "pointer", fontWeight: checked ? 600 : 400,
              transition: "all 0.15s ease",
            }}
          >
            <span style={{ marginRight: 8 }}>{checked ? "☑" : "☐"}</span>
            {opt}
          </button>
        );
      })}
    </div>
  );
};

const TextQuestion = ({ question, value, onChange }) => (
  <textarea
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    placeholder={question.placeholder}
    rows={4}
    style={{
      width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid #e2e8f0",
      fontSize: 14, color: "#334155", resize: "vertical", fontFamily: "inherit",
      outline: "none", background: "#f8fafc", boxSizing: "border-box",
      transition: "border-color 0.15s",
    }}
    onFocus={(e) => (e.target.style.borderColor = "#1A6B47")}
    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
  />
);

export default function PlastiTrackUmfrage() {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const section = SECTIONS[sectionIdx];
  const totalQ = SECTIONS.reduce((a, s) => a + s.questions.length, 0);
  const answeredQ = Object.keys(answers).length;
  const progress = Math.round((answeredQ / totalQ) * 100);

  const setAnswer = (qid, val) => setAnswers((prev) => ({ ...prev, [qid]: val }));

  const canAdvance = section.questions.every((q) => {
    const a = answers[q.id];
    if (q.type === "text") return true; // optional
    if (q.type === "multi") return a && a.length > 0;
    return a !== undefined && a !== null && a !== "";
  });

  const isLast = sectionIdx === SECTIONS.length - 1;

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0D2B1F 0%, #1A6B47 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: 48, maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🐟</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1A6B47", marginBottom: 8 }}>Vielen Dank!</h2>
          <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
            Dein Feedback hilft uns, PlastiTrack besser zu machen und wirklich alltagstauglich zu gestalten. Gemeinsam für eine plastikärmere Zukunft! 🌍
          </p>
          <div style={{ background: "#E8F5EE", borderRadius: 12, padding: 16, fontSize: 14, color: "#1A6B47", fontWeight: 600 }}>
            {answeredQ} von {totalQ} Fragen beantwortet
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ "--accent": section.color, minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0D2B1F 0%, #1A6B47 50%, #0891B2 100%)", padding: "20px 24px 0", color: "#fff" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 22 }}>🐟</span>
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>PlastiTrack</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#2DC97E", fontFamily: "monospace" }}>
              {answeredQ}/{totalQ} beantwortet
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#A7D9BC", marginBottom: 16 }}>Nutzerfeedback-Umfrage · Studierende</p>

          {/* Progress bar */}
          <div style={{ height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2, marginBottom: 0 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#2DC97E", borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>

          {/* Section tabs */}
          <div style={{ display: "flex", gap: 0, marginTop: 16, overflowX: "auto" }}>
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => i <= sectionIdx && setSectionIdx(i)}
                style={{
                  flex: "0 0 auto", padding: "10px 14px", background: "transparent",
                  border: "none", borderBottom: i === sectionIdx ? `3px solid ${s.color}` : "3px solid transparent",
                  color: i === sectionIdx ? "#fff" : "rgba(255,255,255,0.45)",
                  fontSize: 12, fontWeight: i === sectionIdx ? 700 : 400, cursor: i <= sectionIdx ? "pointer" : "default",
                  whiteSpace: "nowrap", transition: "all 0.15s",
                }}
              >
                {s.emoji} {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section header */}
      <div style={{ background: section.color, color: "#fff", padding: "24px 24px 20px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 32, marginBottom: 4 }}>{section.emoji}</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.5px" }}>{section.title}</h1>
          <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>{section.subtitle}</p>
        </div>
      </div>

      {/* Questions */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px 100px" }}>
        {section.questions.map((q, qi) => (
          <div key={q.id} style={{
            background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9",
          }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
              <span style={{
                flexShrink: 0, width: 26, height: 26, borderRadius: "50%",
                background: section.color, color: "#fff", fontSize: 12, fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {qi + 1}
              </span>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1e293b", lineHeight: 1.5 }}>{q.text}</p>
            </div>

            {q.type === "scale" && (
              <ScaleQuestion question={q} value={answers[q.id]} onChange={(v) => setAnswer(q.id, v)} />
            )}
            {q.type === "single" && (
              <SingleQuestion question={q} value={answers[q.id]} onChange={(v) => setAnswer(q.id, v)} accent={section.color} />
            )}
            {q.type === "multi" && (
              <MultiQuestion question={q} value={answers[q.id]} onChange={(v) => setAnswer(q.id, v)} accent={section.color} />
            )}
            {q.type === "text" && (
              <TextQuestion question={q} value={answers[q.id]} onChange={(v) => setAnswer(q.id, v)} />
            )}
          </div>
        ))}

        {/* Navigation */}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          {sectionIdx > 0 && (
            <button
              onClick={() => setSectionIdx((i) => i - 1)}
              style={{
                flex: 1, padding: "14px 20px", borderRadius: 12, border: "2px solid #e2e8f0",
                background: "#fff", color: "#475569", fontSize: 15, fontWeight: 600, cursor: "pointer",
              }}
            >
              ← Zurück
            </button>
          )}
          <button
            onClick={() => {
              if (isLast) setSubmitted(true);
              else setSectionIdx((i) => i + 1);
            }}
            disabled={!canAdvance}
            style={{
              flex: 2, padding: "14px 20px", borderRadius: 12, border: "none",
              background: canAdvance ? section.color : "#cbd5e1",
              color: "#fff", fontSize: 15, fontWeight: 700, cursor: canAdvance ? "pointer" : "not-allowed",
              boxShadow: canAdvance ? `0 4px 16px ${section.color}55` : "none",
              transition: "all 0.2s",
            }}
          >
            {isLast ? "Umfrage abschicken 🐟" : `Weiter → ${SECTIONS[sectionIdx + 1]?.emoji} ${SECTIONS[sectionIdx + 1]?.title}`}
          </button>
        </div>

        {!canAdvance && (
          <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 8 }}>
            Bitte beantworte alle Fragen in diesem Abschnitt.
          </p>
        )}
      </div>
    </div>
  );
}
