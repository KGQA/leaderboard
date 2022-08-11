# PathQuestion 

**PathQuestion**<sup>[[1]](#myfootnote1)</sup> includes two subsets, *PQ* and *PQL*, constructed by adopting two subsets of Freebase as Knowledge Bases. In this dataset, paths are extracted between two entities 
which span two hops (denoted by -2H) or three hops (denoted by -3H) and then generated natural language questions with templates. To make the generated questions analogical to real-world questions, paraphrasing templates and synonyms for relations are included by searching 
the Internet and two real-world datasets, WebQuestions<sup>[[2]](#myfootnote2)</sup> and WikiAnswers<sup>[[3]](#myfootnote3)</sup>. In this way, the syntactic structure and surface wording of the generated questions have been greatly enriched.

Please see the original [paper](https://arxiv.org/abs/1801.04726) for more details about the dataset.

This dataset can be downloaded via the [link](https://github.com/zmtkeke/IRN). 

## Leaderboard 

## PQ (2-hop)

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|     ISM      | 2022 |    -    |  -   | 99.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|     QAGCN      | 2022 |    -    |  -   | 98.5(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|  Uhop-HR| 2022 |    -    |  -   | 97.6(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  AlAgha, 2022| 2022 |    -    |  -   | 97.4(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|      SRN       | 2022 |    -    |  -   | 96.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|  RL-MHR| 2022 |    -    |  -   | 94.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  TransferNet| 2022 |    -    |  -   | 93.2(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|      IRN       | 2022 |    -    |  -   | 91.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|  IRN| 2022 |    -    |  -   | 78.3(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  HR-BiLSTM| 2022 |    -    |  -   | 76.8(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|    MINERVA     | 2022 |    -    |  -   | 75.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |


## PQL (2-hop)

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|  AlAgha, 2022| 2022 |    -    |  -   | 92.3(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     ISM      | 2022 |    -    |  -   | 84.9(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|  TransferNet| 2022 |    -    |  -   | 84.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  Uhop-HR| 2022 |    -    |  -   | 82.6(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  RL-MHR| 2022 |    -    |  -   | 82.2(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  HR-BiLSTM| 2022 |    -    |  -   | 71.9(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  IRN| 2022 |    -    |  -   | 66.2(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |

## PQ (3-hop)

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|  AlAgha, 2022| 2022 |    -    |  -   | 98.7(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     ISM      | 2022 |    -    |  -   | 95.7(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|  TransferNet| 2022 |    -    |  -   | 91.3(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  Uhop-HR| 2022 |    -    |  -   | 91.3(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     QAGCN      | 2022 |    -    |  -   | 90.6(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      SRN       | 2022 |    -    |  -   | 89.2(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|  RL-MHR| 2022 |    -    |  -   | 87.2(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|      IRN       | 2022 |    -    |  -   | 83.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|  IRN| 2022 |    -    |  -   | 74.3(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  HR-BiLSTM| 2022 |    -    |  -   | 74.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|    MINERVA     | 2022 |    -    |  -   | 71.2(Hits@1)  | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |


## PQL (3-hop)

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|  AlAgha, 2022| 2022 |    -    |  -   | 89.7(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  TransferNet| 2022 |    -    |  -   | 82.7(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     ISM      | 2022 |    -    |  -   | 81.7(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|  Uhop-HR| 2022 |    -    |  -   | 80.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  RL-MHR| 2022 |    -    |  -   | 77.8(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  HR-BiLSTM| 2022 |    -    |  -   | 61.6(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  IRN| 2022 |    -    |  -   | 59.1(Hits@1) | EN  |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |


## References 
<a name="myfootnote1">[1]</a> Zhou, Mantong, Minlie Huang, and Xiaoyan Zhu. [An interpretable reasoning network for multi-relation question answering.](https://arxiv.org/abs/1801.04726) arXiv preprint arXiv:1801.04726 (2018).

<a name="myfootnote2">[2]</a> Berant, Jonathan, Andrew Chou, Roy Frostig, and Percy Liang. [Semantic parsing on freebase from question-answer pairs.](https://aclanthology.org/D13-1160/) In Proceedings of the 2013 conference on empirical methods in natural language processing, pp. 1533-1544. 2013.

<a name="myfootnote3">[3]</a> Fader, Anthony, Luke Zettlemoyer, and Oren Etzioni. [Paraphrase-driven learning for open question answering.](https://aclanthology.org/P13-1158/) In Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1608-1618. 2013.


[Go back to the README](../README.md)
