# SimpleQuestionsWikidata

**SimpleQuestionsWikidata**<sup>[[1]](#myfootnote1)</sup> is a version of the SimpleQuestions dataset mapped to Wikidata. 

This dataset can be downloaded via the [link](https://github.com/askplatypus/wikidata-simplequestions). 

## Leaderboard

|      Model / System       |Year|Precision|Recall|  F1  |Language|                                          Reported by                                          |
|:-------------------------:|:---:|:-------:|:----:|:----:|:------:|:---------------------------------------------------------------------------------------------:|
|      Rigel-E2E            |2021|  68.2   | - | - |   EN   |        [Oliya et al.](https://arxiv.org/pdf/2109.05817.pdf)                     |
|      Text2Graph (MEKER Wikidata5m)  |2022|  -   | - | 61.81 ± 0.13 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     |
|      STaG-QA_pre [1]      |2021|  60.2   | 63.2 | 61.7 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     |
|        STaG-QA [2]        |2021|  59.4   | 62.7 | 60.1 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     |
|      Text2Graph (PTBG (TransE) Wikidata5m)  |2022|  -   | - | 59.97 ± 0.15 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     |
|         SYGMA [3]         |2021|   42    |  55  |  44  |   EN   |                    [Neelam S et al](https://arxiv.org/pdf/2109.13430.pdf)                     |
|      KEQA (TransE FB5M)  |2022|  -   | - | 40.48 ± 0.10 |   EN   |        [Chekalina et al.](https://arxiv.org/pdf/2204.10629.pdf)                     |

 * [1]  wikidata 03/2020. 
 * [2]  wikidata 03/2020. 
 * [3] wikidata version not stated.


## References
<a name="myfootnote1">[1]</a> Diefenbach, Dennis, Thomas Tanon, Kamal Singh, and Pierre Maret. [Question answering benchmarks for wikidata.](http://ceur-ws.org/Vol-1963/paper555.pdf) In ISWC 2017. 2017.

[Go back to the README](../README.md)
