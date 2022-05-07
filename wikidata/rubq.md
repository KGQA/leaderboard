# RuBQ 

### Table of contents

- [RuBQ v1](#rubq-1)
- [RuBQ v2](#rubq-2)

## RuBQ v1

RuBQ<sup>[[1]](#myfootnote1)</sup> (**Ru**ssian Knowledge **B**ase **Q**uestions), pronounced [`rubik], is a KBQA dataset that consists of 1,500 Russian questions of varying complexity along with their English machine translations, 
corresponding SPARQL queries, answers, as well as a subset of Wikidata covering entities with Russian labels. It is the first Russian KBQA and semantic parsing dataset. The dataset is thought to be used 
as a development and test sets in cross-lingual transfer, few-shot learning, or learning with synthetic data scenarios.

### Leaderboard

## RuBQ v2

RuBQ 2.0<sup>[[2]](#myfootnote2)</sup>, the second version of RuBQ, was released in Decemeber 2020. The dataset extension is based on questions obtained through search engine query suggestion services. The dataset doubled in size: RuBQ 2.0 contains 2,910 questions 
along with the answers and SPARQL queries. The dataset was also expanded with machine reading comprehension capabilities: RuBQ 2.0 incorporates answer-bearing paragraphs from Wikipedia for the majority of questions. Thus, 
the dataset is now not only suitable for the evaluation of KBQA, but also can be used to evaluate machine reading comprehension, paragraph retrieval, and end-to-end open-domain question answering. The dataset can be also 
used for experiments in hybrid QA, where KBQA and text-based QA can enrich and complement each other.

### Leaderboard

| Model / System |Year|Precision|Recall| F1  |Language|                       Reported by                       |
|:--------------:|:---:|:-------:|:----:|:---:|:------:|:-------------------------------------------------------:|
|    Text2Graph(MEKER Wiki4M)   |2022|   -    |  -  | 49.06  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    Text2Graph(PTBG (TransE) Wiki4M)   |2022|   -    |  -  | 48.84  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    Text2Graph(PTBG (ComplEX) Wiki4M)   |2022|   -    |  -  | 48.16  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    QA-En   |2022|   -    |  -  | 32.3  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    SimBa   |2022|   -    |  -  | 32.3  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    QA-Ru   |2022|   -    |  -  | 30.8  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|
|    DeepPavlov   |2022|   -    |  -  | 30.5  |   EN   |[Chekalina1 V et al.](https://arxiv.org/pdf/2204.10629.pdf)|


## References
<a name="myfootnote1">[1]</a> Korablinov, Vladislav, and Pavel Braslavski. [RuBQ: a Russian dataset for question answering over Wikidata.](https://link.springer.com/chapter/10.1007/978-3-030-62466-8_7) In International Semantic Web Conference, pp. 97-110. Springer, Cham, 2020.

<a name="myfootnote2">[2]</a> Rybin, Ivan, Vladislav Korablinov, Pavel Efimov, and Pavel Braslavski. [RuBQ 2.0: An Innovated Russian Question Answering Dataset.](https://link.springer.com/chapter/10.1007/978-3-030-77385-4_32) In European Semantic Web Conference, pp. 532-547. Springer, Cham, 2021.


[Go back to the README](../README.md)
