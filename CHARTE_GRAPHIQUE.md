# Charte Graphique — Gondor Chic / Magic VentesStock

---

## 🎨 Palette de Couleurs

### Couleur Principale (Terre / Ocre)

| Nom             | Code Hex   | Usage                                      |
|-----------------|------------|--------------------------------------------|
| **Ochre**       | `#CC7722`  | Couleur primaire, CTA, accents, liens hover |
| Gold Light      | `#DD8833`  | Variante claire, dégradés                  |
| Gold Dark       | `#A05E18`  | Variante foncée, hover states              |
| Terra           | `#B86B1D`  | Tons intermédiaires, backgrounds chauds    |
| Sienna          | `#945520`  | Accents profonds, dégradés foncés          |
| Bronze          | `#7A4810`  | Tons les plus sombres de la gamme ocre     |

### Couleurs Neutres (Bruns)

| Nom             | Code Hex   | Usage                                      |
|-----------------|------------|--------------------------------------------|
| Brown Dark      | `#3A2510`  | Fond hero/login, texte très foncé          |
| Brown           | `#5C3D1E`  | Texte principal foncé, bordures            |
| Brown Light     | `#7A5A3A`  | Texte secondaire, labels                   |
| Stone           | `#4A3828`  | Backgrounds foncés, dégradés               |
| Charcoal        | `#2A1E14`  | Fond footer, texte body                    |

### Couleurs de Surface (Clairs)

| Nom             | Code Hex   | Usage                                      |
|-----------------|------------|--------------------------------------------|
| Ivory           | `#FBF5EC`  | Fond de page principal                     |
| Parchment       | `#F7EDE0`  | Fond sections, cartes, navbar              |
| Cream           | `#F2E6D0`  | Bordures, séparateurs, fond boutons        |
| Cream Dark      | `#E0D0B5`  | Bordures plus marquées, hover              |

### Couleurs Complémentaires

| Nom             | Code Hex   | Usage                                      |
|-----------------|------------|--------------------------------------------|
| Mithril         | `#B8B0A5`  | Éléments désactivés, texte léger           |
| Mithril Light   | `#D6CFC7`  | Bordures subtiles                          |
| Emerald         | `#3D6B4A`  | Statut "En stock", succès                  |
| Ruby            | `#8B2332`  | Erreurs, alertes, rupture de stock         |

---

## 🔤 Typographies

### Police Principale — Titres

| Propriété       | Valeur                                     |
|-----------------|--------------------------------------------|
| **Nom**         | Cinzel                                     |
| **Source**      | Google Fonts                               |
| **Variable CSS**| `--font-cinzel`                            |
| **Graisses**    | 400, 500, 600, 700, 800, 900              |
| **Usage**       | Titres, boutons, logo, navigation, badges  |
| **Style**       | Serif élégant, inspiré des inscriptions romaines |

### Police Secondaire — Corps de texte

| Propriété       | Valeur                                     |
|-----------------|--------------------------------------------|
| **Nom**         | Cormorant Garamond                         |
| **Source**      | Google Fonts                               |
| **Variable CSS**| `--font-cormorant`                         |
| **Graisses**    | 300, 400, 500, 600, 700                    |
| **Usage**       | Paragraphes, descriptions, labels formulaires |
| **Style**       | Serif classique, lisibilité élevée         |

### Tailles de Texte

| Élément                 | Taille (desktop)      | Taille (mobile)       |
|-------------------------|-----------------------|-----------------------|
| H1 Hero                 | 4.5rem (72px)         | 2.25rem (36px)        |
| H2 Section              | 2.25rem (36px)        | 1.875rem (30px)       |
| H3 Carte                | 1.125rem (18px)       | 1.125rem (18px)       |
| Body                    | 1.125rem (18px)       | 1rem (16px)           |
| Small / Labels          | 0.875rem (14px)       | 0.875rem (14px)       |
| Badges / Tracking       | 0.625rem (10px)       | 0.625rem (10px)       |

---

## 📐 Espacements & Grilles

| Élément              | Valeur                                   |
|----------------------|------------------------------------------|
| Max-width contenu    | 80rem (1280px)                           |
| Padding latéral      | 1rem (mobile) / 1.5rem (sm) / 2rem (lg) |
| Gap grille produits  | 1.5rem (24px)                            |
| Padding sections     | 6rem (96px) vertical                     |
| Border-radius cartes | 1rem (16px)                              |
| Border-radius boutons| 0.5rem (8px)                             |

---

## 🖱️ Boutons

### Variantes

| Variante     | Style                                                  |
|--------------|--------------------------------------------------------|
| **Primary**  | Dégradé `gold-dark → ochre → gold-light`, texte blanc, ombre dorée |
| **Secondary**| Fond cream, bordure ochre, texte brown-dark            |
| **Ghost**    | Transparent, texte ochre, hover fond cream             |

### Tailles

| Taille | Padding         | Font-size                    |
|--------|-----------------|------------------------------|
| sm     | 0.5rem 1rem     | 14px                         |
| md     | 0.75rem 1.5rem  | 16px                         |
| lg     | 1rem 2rem       | 16px (mobile) / 18px (sm+)  |

---

## 🌑 Ombres

| Nom              | Valeur                                      |
|------------------|---------------------------------------------|
| `shadow-gondor`  | `0 4px 24px rgba(92, 61, 30, 0.15)`        |
| `shadow-gondor-lg` | `0 8px 40px rgba(92, 61, 30, 0.22)`     |
| `shadow-gondor-gold` | `0 4px 20px rgba(204, 119, 34, 0.30)` |

---

## ✨ Animations

| Nom              | Description                               | Durée   |
|------------------|-------------------------------------------|---------|
| `fade-in-up`     | Apparition avec translation vers le haut  | 0.7s    |
| `stagger-children` | Apparition séquentielle des enfants    | 0.6s × index |
| `shimmer`        | Effet de brillance ocre en boucle         | 3s loop |

---

## 📱 Breakpoints Responsive

| Nom  | Largeur min | Usage                           |
|------|-------------|---------------------------------|
| sm   | 640px       | Tablettes portrait              |
| md   | 768px       | Tablettes paysage               |
| lg   | 1024px      | Desktop                         |
| xl   | 1280px      | Grand écran                     |

---

## 🏛️ Éléments Décoratifs

| Élément             | Description                                           |
|---------------------|-------------------------------------------------------|
| `gondor-separator`  | Ligne dégradée avec losange (◆) central               |
| `text-gradient-gold`| Texte en dégradé gold-light → ochre → bronze          |
| `glass-card`        | Fond semi-transparent avec blur et bordure ocre       |
| Radial glows        | Halos `#CC7722` en arrière-plan (blur-3xl)            |
| SVG patterns        | Motifs géométriques ocre en overlay très subtil        |

---

## 🖼️ Logo & Favicon

| Élément        | Description                                          |
|----------------|------------------------------------------------------|
| **Icône**      | Couronne (lucide-react `Crown`)                      |
| **Texte**      | "Gondor" + " Chic" (gradient)                        |
| **Sous-titre** | "Magic VentesStock" (10px, tracking large, uppercase)|
| **Favicon**    | SVG couronne (`/public/crown.svg`) — tons ocre/bronze|

---

## 📏 Règles d'Usage

1. **Couleur dominante** : `#CC7722` doit être présente sur chaque écran (boutons, accents, séparateurs, hover)
2. **Contraste** : Texte foncé (`brown-dark` / `charcoal`) sur fonds clairs ; texte clair (`cream` / `parchment`) sur fonds sombres
3. **Hiérarchie** : Cinzel pour tout ce qui attire l'œil (titres, CTA, navigation) ; Cormorant pour le contenu de lecture
4. **Espacement** : Respecter un rythme vertical régulier (multiples de 8px)
5. **Animations** : Subtiles et élégantes — pas de rebonds ou effets excessifs
6. **Coins arrondis** : 16px pour les cartes, 8px pour les boutons et inputs
7. **Langue** : Français pour tout le contenu visible (`lang="fr"`)
