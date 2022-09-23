# WebQuestionsSP

**WebQuestionsSP**<sup>[[1]](#myfootnote1)</sup> is the annotated version of WebQuestions, which contains questions that require a 1 or 2-hop relation path to arrive at the answer entity. 
More specifically, about 40% of the questions require a 2-hop relation to reach the answer. Freebase is its backgound KB. Originally, it splits into 3,298 questions 
as train set and 1,639 questions as test set. 

This dataset can be downloaded via the [link](https://www.microsoft.com/en-us/download/details.aspx?id=52763).


## Leaderboard 

| Model / System | Year |  F1   | Hits@1 | Language |                                    Reported by                                     |
|:--------------:|:----:|:-----:|:------:|:--------:|:----------------------------------------------------------------------------------:|
|   QNRKGQA+h    | 2022 |   -   |  75.7  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|    QNRKGQA     | 2022 |   -   |  74.9  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|      NSM       | 2021 |   -   | 74.30  |    EN    |                 [He et al.](https://arxiv.org/pdf/2101.03737.pdf)                  |
|      SGM       | 2022 | 72.36 |   -    |    EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|      NPI       | 2022 |   -   |  72.6  |    EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
|    TextRay     | 2022 |   -   |  72.2  |    EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
|    CBR-SUBG    | 2022 |   -   | 72.10  |    EN    |                 [Das et al.](https://arxiv.org/pdf/2202.10610.pdf)                 |
| KGQA Based on Query Path Generation| 2022 | - | 71.7 | EN | [Yang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_12) |
|     SSKGQA     | 2022 |   -   |  71.4  |    EN    |     [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)     |
|  TransferNet   | 2022 |   -   |  71.4  |    EN    |                 [Shi et al.](https://arxiv.org/pdf/2104.07302.pdf)                 |
|      SeqM      | 2020 | 71.83 |   -    |    EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|     STAGG      | 2015 | 69.00 |   -    |    EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|      UHop      | 2019 | 68.5  |   -    |    EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|     KBIGER     | 2022 | 68.4  |  75.3  |    EN    |  [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
|      NSM       | 2022 |   -   |  69.0  |    EN    |            [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)            |
| GraftNet-EF+LF | 2018 |   -   |  68.7  |    EN    |                [Sun et al.](https://aclanthology.org/D18-1455.pdf)                 |
|    PullNet     | 2019 |   -   |  68.1  |    EN    |                 [Sun et al.](https://arxiv.org/pdf/1904.09537.pdf)                 |
|  Topic Units   | 2019 | 67.9  |   -    |    EN    |  [Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)   |
|  NSM           | 2022 | 67.4 |  74.3  |    EN    |   [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
|      DCRN      | 2021 |   -   |  67.8  |    EN    |          [Cai et al.](https://aclanthology.org/2021.findings-acl.19.pdf)           |
|      NRQA      | 2022 |   -   |  67.1  |    EN    | [Guo et al.](https://link.springer.com/content/pdf/10.1007/s10489-022-03927-0.pdf) |
|    GraftNet    | 2022 |   -   |  66.4  |    EN    |     [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)     |
|   EmbedKGQA    | 2020 |   -   |  66.6  |    EN    |          [Saxena et al.](https://aclanthology.org/2020.acl-main.412.pdf)           |
|    GraftNet    | 2022 |   -   |  62.8  |    EN    |    [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |
| GraftNet-EF+LF | 2018 | 62.30 |   -    |    EN    |                [Sun et al.](https://aclanthology.org/D18-1455.pdf)                 |
|    TextRay     | 2019 | 60.3  |   -    |    EN    |        [Bhutani et al.](https://dl.acm.org/doi/pdf/10.1145/3357384.3358033)        |
|     ReifKB     | 2020 |   -   |  52.7  |    EN    |                [Cohen et al.](https://arxiv.org/pdf/2002.06115.pdf)                |
|    KV-MemNN    | 2022 |   -   |  46.7  |    EN    |     [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)     |
|    KV-Mem    | 2022 |  46.7   |  38.6  |    EN    |    [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)   |

## References 
<a name="myfootnote1">[1]</a> Yih, Wen-tau, Matthew Richardson, Christopher Meek, Ming-Wei Chang, and Jina Suh. [The value of semantic parse labeling for knowledge base question answering.](http://anthology.aclweb.org/P16-2033) In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pp. 201-206. 2016.


[Go back to the README](../README.md)
