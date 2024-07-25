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

# Closing the Gap in Non-Latin Script Data

Pragmatic methods to manage corpora with diverse languages

---

# Aim of the project

- provide an overview over projects that work with non-latin script
- provide insight into 
  - tech stack
  - tools
  - policies
  - contacts
- provide a best practice example for corpus management

---

# Basic needs

- no conventional setup required (no server-side infrastructure)
- should survive longer than the usual third-party funding period
- no "could I please have"-infrastructure
- use established workflows and industry standards
- **FAIR**
- transparent
- easy and nice frontend (initial phase: [**Vue.js**](https://vuejs.org/), now: [**SvelteKit**](https://kit.svelte.dev/))
- as static as possible
- clear separation between data and frontend
- accessible from (almost) everywhere

---

# Initial ideas

- established formats: `.json`, `.xml` or `.yaml`
  - `.json` as the first choice for its widespread use and comparably easy use with non-latin Script
- **GitHub** for repository and public issue management
- **GitHub Pages** for frontend
- implementing of taxonomies and existing standards
- implementing [**CRediT**](https://credit.niso.org/)
- CC-BY license
- heavily committing to **Open Science**
- every major decision should be documented transparently
- "practice what we preach": provide an example to show it is actually possible to work **FAIR**.

--- 

# Why not GitHub?

- owned by **Microsoft**, thus we use "Big Tech" solutions instead of local academic infrastructure
- data is "out in the wild"
  - this is an issue for sensitive data

---

# Why GitHub?

- data is "out in the wild"
- **GitHub** has a higher probability to be working even in 5 or 10 years
- accessibility without academic credentials
- **GitHub Actions** and **GitHub Pages**
- future alternatives can be non-profit providers, e.g. [**Codeberg**](https://codeberg.org/)
- project and issue management resources to allow collaboration

---
layout: quote
---

# <span v-mark="{ color: `#8b0000`, type: `circle`}">Real Talk</span>

I would prefer academic infrastructure, but there is often no way or will to provide for a platform that is as accessible, easy to use and long-term supported as providers like GitHub. It is just not possible yet to realize a similar setup compared to ours in a conventional academic context (and in an appropriate timespan).


---

# Closing the Gap Database

#### folder structure:
```
/PROJECTS/
.. {simplified_project_name}/
..  .. {uuid}.json
/DOCS/
/KEYWORDS/
/SCHEMATA/
...
/projects.json

```

the `projects.json` contains a mapping of `{uuid}` to `{simplified_project_name}`, resulting in a:
- human-readable folder structure
- machine-readable UUID-mapping

---

# Closing the Gap Datamodel

- versioned and [**Zod**](https://zod.dev/)-validated `json` schema
- multiple sections:
  - metadata on the `.json`-file
  - metadata on the project
  - metadata on the relations of the project
- example: **AnonymClassic** (`d1e6d69b-5e9a-4b4a-85ad-09aac56ed2d9`)

```json {*}{maxHeight: '200px'}
{
  "schema_version": "0.2.4",
  "record_metadata": {
    "uuid": "d1e6d69b-5e9a-4b4a-85ad-09aac56ed2d9",
    "record_created_on": "2021-11-08",
    "record_created_by": "Kudela, Xenia Monika",
    "last_edited_on": "2022-02-18",
    "interviewed": false
  },
  "project": {
    "title": "Kalila and Dimna – AnonymClassic",
    "abbr": "",
    "type": "project",
    "ref": [],
    "date": [
      {
        "from": "2018-01-01",
        "to": "2022-12-31"
      }
    ],
    "maintained": null,
    "websites": [
      "https://www.geschkult.fu-berlin.de/en/e/kalila-wa-dimna/index.html",
      "https://kalila-and-dimna.fu-berlin.de/"
    ],
    "project_desc": "AnonymClassic is the first ever comprehensive study of Kalila and Dimna, one of the most important text of premodern world literature which passed from Hinduism and Buddhism via Islam to Christianity. Its Arabic versions constitute a source of all further translations into European languages and are also the main focus of the project, which analyzes the transmission processes of the work from India to Europe with Arabic as cultural bridge.",
    "places": [
      {
        "place_name": {
          "text": "Berlin",
          "ref": [
            "https://www.geonames.org/2950159/berlin.html"
          ]
        },
        "coordinates": {
          "lat": "52.52437",
          "lng": "13.41053"
        }
      }
    ],
    "lang": [
      "deu",
      "eng"
    ],
    "related_institutions": [
      {
        "relation_type": "host",
        "org_name": {
          "text": "Freie Universität Berlin",
          "ref": [
            "https://ror.org/046ak2485",
            "https://www.wikidata.org/wiki/Q153006"
          ]
        },
        "websites": [
          "https://www.fu-berlin.de/"
        ]
      }
    ],
    "related_entities": [
      {
        "relation_type": "sibling",
        "title": "Verse und Sprueche: Impulse und Reichweiten wissenschaftlicher und popularisierender Diskurse im arabischen Sprachraum",
        "uuid": "a2984fec-9396-488e-ad56-d3d21dc49052"
      },
      {
        "relation_type": "sibling",
        "title": "Country of Words: Reading and Reception of Palestinian Literature from 1948 to the Present",
        "uuid": "2adf7ddc-9dd5-49b3-842c-9dc48dbbf36e"
      },
      {
        "relation_type": "sibling",
        "title": "Keywords for the Study of the Arabic Literary and Manuscript Tradition",
        "uuid": "7050ac6d-523c-4ba0-b381-48ec200ff6c4"
      },
      {
        "relation_type": "cooperation",
        "title": "Arabic Literature Cosmopolitan",
        "uuid": "46aff246-b6ef-4632-90c2-0993a9f9b1f5"
      },
      {
        "relation_type": "sibling",
        "title": "Memory Spaces: Mapping Oral History in Mosul",
        "uuid": "aec92ee9-7c8a-49ce-8491-46667fc75505"
      }
    ],
    "contacts": [
      {
        "pers_name": {
          "text": "Gruendler, Beatrice",
          "ref": [
            "https://d-nb.info/gnd/111749344X"
          ]
        },
        "roles": [
          "supervision"
        ],
        "websites": [
          "https://www.geschkult.fu-berlin.de/e/semiarab/arabistik/Seminar/Mitarbeiterinnen-und-Mitarbeiter/Professuren/Gruendler/"
        ]
      }
    ],
    "research_data": {
      "lang": [
        "ara",
        "fas"
      ],
      "sustainability_plan": null,
      "publications": {
        "open_access": 0,
        "licensing": [
          ""
        ]
      },
      "data": {
        "datatypes": [],
        "repositories": []
      }
    },
    "stack": {
      "database": [
        "sql",
        "xml",
        "json",
        "nosql"
      ],
      "backend": [
        "laravel"
      ],
      "frontend": [
        "vue"
      ],
      "tools": [],
      "languages": [
        "php",
        "javascript",
        "python"
      ]
    },
    "policies": [
      {
        "description": "",
        "ref": []
      }
    ],
    "keywords": [
      "arabic_studies",
      "classical_text",
      "digital_edition",
      "digital_preservation",
      "literary_studies",
      "manuscript",
      "translation",
      "vre"
    ],
    "category": "digital_preservation",
    "comment": ""
  }
}

```

---

# Additional workflows:

- regular releases on [**GitHub**](https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/releases) and [**Zenodo**](https://zenodo.org/records/12579502) of the complete project (DOI: `https://zenodo.org/doi/10.5281/zenodo.8329145`)
- monthly snapshots of the frontend in the [**Web Archive**](https://web.archive.org/web/20240000000000*/https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data/) (`https://web.archive.org/web/20240000000000*/https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data/`)
- regular link-checks via **Lychee**

---

# Additional services

- link-checking helps to track dying project websites or unstable links
- support in networking and flat corpus management
- data analysis for academic politics

<img border="rounded" src="/ctg_vis1.png" alt="" style="height:350px; float: left; margin-right: 10px; margin-top: 10px;">
<img border="rounded" src="/ctg_vis2.png" alt="" style="height:350px; float: left; margin-top: 10px;">

---

# Issue 1: Taxonomies

- implementation of taxonomies for descriptive keywords (e.g. [**DHA**](https://vocabs.acdh.oeaw.ac.at/dha_taxonomy/en/))
- [**ISO 639-3**](https://iso639-3.sil.org/code_tables/639/data) codes for languages

BUT: non-latin script related concepts may not be supported by existing taxonomies (e.g. "arabic_studies").

workaround: mapping a *short* self-developed taxonomy to established taxonomies.

<img border="rounded" src="/ctg_disciplines.png" alt="" style="height:200px">

---

# Issue 2: Data acquisition
How to get comprehensive data?

as so often: the project requires people to provide data, but people are not always willing to do so:

>"we have better things to do"
>
>"this is OUR data"
>
>"someone may steal the data"
>
>"I'd rather use google"

and soon probably:

> "what about chatGPT and artificial intelligence?"

---

# Conclusion

The CtG project provides a metadata corpus on projects working with non-latin scripts

The infrastructure...
- requires <span v-mark.underline.red>no conventional setup and sysadmin</span>
- is free of charge and accessible from (almost) everywhere
- provides multiple methods to provide <span v-mark.underline.red>sustainable long-term archiving (github, web archive, zenodo)</span>
- provides human- and machine-readable data for further processing
- provides insight in topics that are commonly ignored (e.g. the wide lack of sustainability plans)
- provides an overview over different stacks, tools and methods in use
- is <span v-mark.underline.red>independent from limited third party funding</span>

... but ...
- may be problematic with sensitive or complex data
- requires services like github actions and github pages to stay alive to be fully functional
- requires a certain amount of tech affinity to allow for collaboration without further assistance

--- 
layout: two-cols-header
---

# Last Slide

Thank you for your attention. Questions?

::left::

## backend

<img border="rounded" src="/ctg_github.png" alt="" style="height:200px;margin-top: 10px;">

::right::

## frontend

<img border="rounded" src="/ctg_frontend.png" alt="" style="height:200px;margin-top: 10px;">




