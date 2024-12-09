---
theme: seriph
title: Closing the Gap in Non-Latin Script Data
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
  strong {
    color: #B31FB8;
  }
</style>

# KI Kolloquium

Entwicklung von <span v-mark.circle.red>AI Literacy</span>

---

# Maschinelles Lernen

- Überwachtes Lernen (Supervised Learning)
  - Regression (Regression)
    - Gibt eine numerische Aussage
  - Klassifikation (Classification)
    - Kategorisierende Aussage
- Nicht-überwachtes Lernen (Unsupervised Learning)
  - Erkennen von Mustern (z.B. Clustering)
- Verstärkendes Lernen (Reinforcement Learning)
  - Bestmögliches Verhalten entwickeln (z.B. Robotik)
- Generative KI
  - Inhalte aus Eingaben generieren

---

# Wie "lernt" die Maschine?

Trainingsdatensatz:

| Größe | Monatliche Kaltmiete |
| --- | --- |
| 40m2 | 430,00 |
| 105m2 | 1200,00 |
| 80m2 | 1010,00 |
| 84m2 | 800,00 |
| 87m2 | 920,00 |
| 30m2 | 400,00 |
| 120m2 | 1530,00 |

---

# Training

Wir können mit dem bekannten Modell berechenn, wie der wahrscheinliche Mietpreis einer Wohnung mit 75m2 ist. Testen wir das gegen einen Testdatensatz mit verifizierten Daten und können bestätigen, dass die Information korrekt ist oder mit geringer abweichung (=Loss) zum tatsächlichen Wert, können wir die Information zum Modell dazugeben (=Training).

´´´mermaid
A(Trainingsdaten)-->B(Model)-->C(Vorhersage)-->D(Testdaten)-->A
```

Fügt man dem Datensatz - mit Blick auf ein bestimmtes Ziel - verifizierte Daten (z.B. weitere Parameter) hinzu, spricht man von "fine-tuning".

Generell gilt: Je größer und diverser ein Datensatz ist, desto wahrscheinlicher treffen die Vorhersagen zu.

Man nennt dieses System auch ein <span v-mark.circle.pink>künstliches neuronales Netz</span>.

---

#
