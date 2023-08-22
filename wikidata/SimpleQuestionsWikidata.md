---
    name: SimpleQuestionsWikidata
    datasetUrl: https://github.com/askplatypus/wikidata-simplequestions
---

|      Model / System       |Year|Precision|Recall|  F1  |Language|                                          Reported by                                          | Gold Entity |
|:-------------------------:|:---:|:-------:|:----:|:----:|:------:|:---------------------------------------------------------------------------------------------:|:-----------:|
|      Rigel-Baseline            |2021|  73.4   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     | ✅ |
|      Rigel-ER            |2021|  70.1   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     | ✅ |
|      KBQA-Adapter            |2021|  72.0   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     | ✅ |
|      Rigel-E2E            |2021|  68.2   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     | ❌  |
|      Text2Graph (MEKER Wikidata5m)  |2022|  -   | - | 61.81 ± 0.13 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     | ❌ |
|      MemNN            |2015|  61.6   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     | ❌ |
|      STaG-QA_pre [1]      |2021|  60.2   | 63.2 | 61.7 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     | ❌ |
|        STaG-QA [2]        |2021|  59.4   | 62.7 | 60.1 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     | ❌ |
|      Text2Graph (PTBG (TransE) Wikidata5m)  |2022|  -   | - | 59.97 ± 0.15 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     | ❌ |
|         SYGMA [3]         |2021|   42    |  55  |  44  |   EN   |                    [Neelam S et al](https://arxiv.org/pdf/2109.13430.pdf)                     | ❌ |
|      KEQA (TransE FB5M)  |2022|  -   | - | 40.48 ± 0.10 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     | ❌ |
| GETT-QA [4] | 2023 |  76.1  ± 0.2 | - | - |   EN   |        [Banerjee et al.](https://arxiv.org/pdf/2303.13284.pdf)                | ❌ |