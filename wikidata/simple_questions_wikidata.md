# SimpleQuestionsWikidata

**SimpleQuestionsWikidata**<sup>[[1]](#myfootnote1)</sup> is a version of the SimpleQuestions dataset mapped to Wikidata. 

This dataset can be downloaded via the [link](https://github.com/askplatypus/wikidata-simplequestions). 

## Leaderboard

|      Model / System       |Year|Precision|Recall|  F1  |Language|                                          Reported by                                          |
|:-------------------------:|:---:|:-------:|:----:|:----:|:------:|:---------------------------------------------------------------------------------------------:|
|      STaG-QA_pre [1]      |2021|  60.2   | 63.2 | 61.7 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     |
|        STaG-QA [2]        |2021|  59.4   | 62.7 | 60.1 |   EN   |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                     |
|         SYGMA [3]         |2021|   42    |  55  |  44  |   EN   |                    [Neelam S et al](https://arxiv.org/pdf/2109.13430.pdf)                     |
|           MemNN           |2021|    -    |  -   |  -   |   EN   |               [Oliya A et al](https://aclanthology.org/2021.emnlp-main.345.pdf)               |
|       KBQA-Adapter        |2021|    -    |  -   |  -   |   EN   |               [Oliya A et al](https://aclanthology.org/2021.emnlp-main.345.pdf)               |
|      Rigel-Baseline       |2021|    -    |  -   |  -   |   EN   |               [Oliya A et al](https://aclanthology.org/2021.emnlp-main.345.pdf)               |
|         Rigel-ER          |2021|    -    |  -   |  -   |   EN   |               [Oliya A et al](https://aclanthology.org/2021.emnlp-main.345.pdf)               |
|         Rigel-E2E         |2021|    -    |  -   |  -   |   EN   |               [Oliya A et al](https://aclanthology.org/2021.emnlp-main.345.pdf)               |
|         Rigel-E2E         |2021|    -    |  -   |  -   |   EN   |[Thomas Goette](https://ad-publications.cs.uni-freiburg.de/theses/Master_Thomas_Götte_2021.pdf)|
|   Aqqu Wikidata (rules)   |2021|    -    |  -   |  -   |   EN   |[Thomas Goette](https://ad-publications.cs.uni-freiburg.de/theses/Master_Thomas_Götte_2021.pdf)|
|Aqqu Wikidata (learned) [4]|2021|    -    |  -   |  -   |   EN   |[Thomas Goette](https://ad-publications.cs.uni-freiburg.de/theses/Master_Thomas_Götte_2021.pdf)|
|             -             | -  |    -    |  -   |  -   |   -    |                                               -                                               |

 * [1]  wikidata 03/2020. 
 * [2]  wikidata 03/2020. 
 * [3] wikidata version not stated. 
 * [4] Wikidata dump 2021-06-10. 


## References
<a name="myfootnote1">[1]</a> Diefenbach, Dennis, Thomas Tanon, Kamal Singh, and Pierre Maret. [Question answering benchmarks for wikidata.](http://ceur-ws.org/Vol-1963/paper555.pdf) In ISWC 2017. 2017.

[Go back to the README](../README.md)