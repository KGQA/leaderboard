# WebQuestionsSP

**WebQuestionsSP**<sup>[[1]](#myfootnote1)</sup> is the annotated version of WebQuestions, which contains questions that require a 1 or 2-hop relation path to arrive at the answer entity. 
More specifically, about 40% of the questions require a 2-hop relation to reach the answer. Freebase is its backgound KB. Originally, it splits into 3,298 questions 
as train set and 1,639 questions as test set. 

This dataset can be downloaded via the [link](https://www.microsoft.com/en-us/download/details.aspx?id=52763).


## Leaderboard 

| Model / System | Year |  F1   | Hits@1 | Accuracy |Language |                                    Reported by                                     |
|:--------------:|:----:|:-----:|:------:|:--------:|:--------:|:----------------------------------------------------------------------------------:|
| DECAF (DPR + FiD-3B)  | 2022 |  78.8       |  82.1  | - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)                        |
| DECAF (DPR + FiD-large) | 2022 | 77.1 ± 0.2 |  80.7 ± 0.2|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)             |
| UniK-QA                 | 2022 | -        |  79.1|   - |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| SQALER+GNN              | 2022 | -        |  76.1  |  - |   EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
| EmQL                    | 2020 | -         |  75.5|   - |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| GMT-KBQA                | 2022 | 76.6     |  - |  73.1 |   EN    |    [Hu et al.](https://aclanthology.org/2022.coling-1.145.pdf)               |
| Program Transfer        | 2022 | 76.5      |  74.6|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| RnG-KBQA (T5-large)     | 2022 | 76.2 ± 0.2|  80.7 ± 0.2|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| RnG-KBQA                | 2022 | 75.6     |  - |  71.1|   EN    |    [Hu et al.](https://aclanthology.org/2022.coling-1.145.pdf)               |
| ArcaneQA                | 2022 | 75.3       | - |   - |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|   QNRKGQA+h             | 2022 |   -       |  75.7  |   - |  EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
| DECAF (BM25 + FiD-large)| 2022 | 74.9 ± 0.3 | 79.0 ± 0.4 |  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| MRP-QA-marginal_prob    | 2022 | 74.9  | -|  - |   EN    |   [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)          |
|    QNRKGQA              | 2022 |   -       |  74.9  |    - | EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
| ReTrack                 | 2022 | 74.7     |  - |  - |   EN    |    [Hu et al.](https://aclanthology.org/2022.coling-1.145.pdf)               |
| ReTrack                 | 2021 | 74.6       | 74.7 |  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| BART-large              | 2022 | 74.6     |  - |  - |   EN    |    [Hu et al.](https://aclanthology.org/2022.coling-1.145.pdf)               |
| QGG                     | 2022 | 74.0       | -|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| CBR-KBQA                | 2021 | 72.8        | -|   69.9 |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|      NSM                | 2021 |   -        | 74.30  |   - |  EN    |                 [He et al.](https://arxiv.org/pdf/2101.03737.pdf)                  |
| Rigel                   | 2022 | -          |  73.3  |   - |  EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
|      SGM                | 2022 | 72.36      |   -    |  - |   EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
| CBR-SUBG                | 2022 | 72.1       | - |  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|      NPI                | 2022 |   -        |  72.6  |   - |  EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
|    TextRay              | 2022 |   -        |  72.2  |   - |  EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
|    CBR-SUBG             | 2022 |   -        | 72.10  |   - |  EN    |                 [Das et al.](https://arxiv.org/pdf/2202.10610.pdf)                 |
| KGQA Based on Query Path Generation| 2022 | - | 71.7 | - | EN | [Yang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_12) |
| STAGG_SP                | 2022 | 71.7  | -|  - |   EN    |   [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)          |
|     SSKGQA              | 2022 |   -   |  71.4  |   - |  EN    |     [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)     |
|  TransferNet            | 2022 |   -   |  71.4  |  - |   EN    |                 [Shi et al.](https://arxiv.org/pdf/2104.07302.pdf)                 |
|      SeqM               | 2020 | 71.83 |   -    |  - |   EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
| REAREV                  | 2022 |  70.9 |  76.4  |  - |   EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
|    HGNet                | 2021 | 70.3   | 70.6|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| SQALER         | 2022 | - |  70.6  |   - |  EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
|     STAGG      | 2015 | 69.00 |   -    |   - |  EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|      UHop      | 2019 | 68.5  |   -    |  - |   EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|     KBIGER     | 2022 | 68.4  |  75.3  |  - |   EN    |  [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
|      NSM       | 2022 |   -   |  69.0  |  - |   EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
| GraftNet-EF+LF | 2018 |   -   |  68.7  |  - |   EN    |                [Sun et al.](https://aclanthology.org/D18-1455.pdf)                 |
|    PullNet     | 2019 |   -   |  68.1  |  - |   EN    |                 [Sun et al.](https://arxiv.org/pdf/1904.09537.pdf)                 |
| KBQA-GST       | 2022 | 67.9 | -|  - |   EN    |   [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)          |
|  Topic Units   | 2019 | 67.9  |   -    |  - |   EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|  NSM           | 2022 | 67.4 |  74.3  |  - |   EN    |   [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
|         SR+NSM | 2022 | 64.1| 69.5|  - |   EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
| NSM           | 2022 |  62.8 |  68.7  |  - |   EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
|    GraftNet    | 2022 | 62.8|  67.8  |   - |  EN    |    [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
|        PullNet | 2019 | 62.8|  67.8  |   - |  EN  |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|      DCRN      | 2021 |   -   |  67.8  |  - |   EN    |          [Cai et al.](https://aclanthology.org/2021.findings-acl.19.pdf)           |
|      NRQA      | 2022 |   -   |  67.1  |  - |   EN    | [Guo et al.](https://link.springer.com/content/pdf/10.1007/s10489-022-03927-0.pdf) |
|    GraftNet    | 2022 |   -   |  66.4  |  - |   EN    |     [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)     |
|   EmbedKGQA    | 2020 |   -   |  66.6  |  - |   EN    |          [Saxena et al.](https://aclanthology.org/2020.acl-main.412.pdf)           |
|    GraftNet    | 2022 |  62.4 |  66.7  |  - |   EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
| HR-BiLSTM      | 2022 | 62.3 | -|  - |   EN    |   [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)          |
| GraftNet-EF+LF | 2018 | 62.30 |   -    |  - |   EN    |                [Sun et al.](https://aclanthology.org/D18-1455.pdf)                 |
|    TextRay     | 2019 | 60.3  |   -    |  - |   EN    |        [Bhutani et al.](https://dl.acm.org/doi/pdf/10.1145/3357384.3358033)        |
|    SGReader    | 2022 |  57.3 |  67.2  |  - |   EN    | [Costas Mavromatis and George Karypis](https://arxiv.org/pdf/2210.13650.pdf)     |
|           KGT5 | 2022 | 56.1  |      -|   - |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|           FILM | 2022 | 54.7  |      -|   - |  EN    |    [Yu et al.](https://arxiv.org/pdf/2210.00063.pdf)               |
|     ReifKB     | 2020 |   -   |  52.7  |   - |  EN    |                [Cohen et al.](https://arxiv.org/pdf/2002.06115.pdf)                |
|    KV-Mem       | 2022 |  38.6 |  46.7  |   - |  EN    |    [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |


## References 
<a name="myfootnote1">[1]</a> Yih, Wen-tau, Matthew Richardson, Christopher Meek, Ming-Wei Chang, and Jina Suh. [The value of semantic parse labeling for knowledge base question answering.](http://anthology.aclweb.org/P16-2033) In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pp. 201-206. 2016.


[Go back to the README](../README.md)
