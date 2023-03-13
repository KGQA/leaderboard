# PathQuestion 

**PathQuestion**<sup>[[1]](#myfootnote1)</sup> includes two subsets, *PQ* and *PQL*, constructed by adopting two subsets of Freebase as Knowledge Bases. In this dataset, paths are extracted between two entities 
which span two hops (denoted by -2H) or three hops (denoted by -3H) and then generated natural language questions with templates. To make the generated questions analogical to real-world questions, paraphrasing templates and synonyms for relations are included by searching 
the Internet and two real-world datasets, WebQuestions<sup>[[2]](#myfootnote2)</sup> and WikiAnswers<sup>[[3]](#myfootnote3)</sup>. In this way, the syntactic structure and surface wording of the generated questions have been greatly enriched.

Please see the original [paper](https://arxiv.org/abs/1801.04726) for more details about the dataset.

This dataset can be downloaded via the [link](https://github.com/zmtkeke/IRN). 

## Leaderboard 

## PQ (2-hop)

### Leaderboard

| Model / System | Year | Precision  | Recall  |      F1       | Language |                                 Reported by                                  |
|:--------------:|:----:|:----------:|:-------:|:-------------:|:--------:|:----------------------------------------------------------------------------:|
|      ISM       | 2022 |     -      |    -    | 99.1(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|   ARN_TuckER   | 2023 |     -      |    -    | 98.95(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|   ARN_ConvE    | 2023 |     -      |    -    | 98.95(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     QAGCN      | 2022 |     -      |    -    | 98.5(Hits@1)  |    EN    |             [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)              |
|    Uhop-HR     | 2022 |     -      |    -    | 97.6(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|  AlAgha, 2022  | 2022 |     -      |    -    | 97.4(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|      SRN       | 2022 |     -      |    -    | 96.3(Hits@1)  |    EN    |             [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)              |
|     RL-MHR     | 2022 |     -      |    -    | 94.1(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|  TransferNet   | 2022 |     -      |    -    | 93.2(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|  ARN_ComplEX   | 2023 |     -      |    -    | 92.67(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      IRN       | 2022 |     -      |    -    | 91.9(Hits@1)  |    EN    |             [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)              |
|    ARN_DistMult    | 2023 |     -      |    -    | 84.29(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      IRN       | 2022 |     -      |    -    | 78.3(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|   HR-BiLSTM    | 2022 |     -      |    -    | 76.8(Hits@1)  |    EN    | [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917) |
|    MINERVA     | 2022 |     -      |    -    | 75.9(Hits@1)  |    EN    |             [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)              |


## PQL (2-hop)

### Leaderboard

|    Model / System    | Year | Precision | Recall |      F1       | Accuracy | Language |                            Reported by                            |
|:--------------------:|:----:|:---------:|:------:|:-------------:|:--------:|:--------:|:-----------------------------------------------------------------:|
|    ARN_TuckER     | 2023 |     -      |    -    | 97.50(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      ARN_ConvE       | 2023 |     -      |    -    | 95.63(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     AlAgha, 2022     | 2022 |     -     |   -    | 92.3(Hits@1)  |    -     |    EN    |  [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     ARN_DistMult     | 2023 |     -      |    -    | 88.75(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     ARN_ComplEx      | 2023 |     -      |    -    | 86.88(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|    Edge-aware GNN    | 2022 |     -     |   -    | 85.6(Hits@1)  |    -     |    EN    |    [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)   |
|         ISM          | 2022 |     -     |   -    | 84.9(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|     TransferNet      | 2022 |     -     |   -    | 84.1(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|       Uhop-HR        | 2022 |     -     |   -    | 82.6(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|        RL-MHR        | 2022 |     -     |   -    | 82.2(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     GlobalGraph      | 2022 |     -     |   -    | 76.0(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)   |
|        2HR-DR        | 2022 |     -     |   -    | 75.5(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|         IRN          | 2022 |     -     |   -    | 72.5(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|       SGReader       | 2022 |     -     |   -    | 71.9(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|      HR-BiLSTM       | 2022 |     -     |   -    | 71.9(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|      GRAFT-Net       | 2022 |     -     |   -    | 70.7(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|         IRN          | 2022 |     -     |   -    | 66.2(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|       KV-MemNN       | 2022 |     -     |   -    | 62.2(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
| MRP-QA-marginal_prob | 2022 |     -     |   -    |       -       |   98.4   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|         UHop         | 2022 |     -     |   -    |       -       |   97.5   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|      HR-BiLSTM       | 2022 |     -     |   -    |       -       |   97.5   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|        ABWIM         | 2022 |     -     |   -    |       -       |   94.3   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|       KV-MemNN       | 2022 |     -     |   -    |       -       |   72.2   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |


## PQ (3-hop)

### Leaderboard

| Model / System | Year | Precision | Recall |      F1       | Language |                            Reported by                            |
|:--------------:|:----:|:---------:|:------:|:-------------:|:--------:|:-----------------------------------------------------------------:|
|  AlAgha, 2022  | 2022 |     -     |   -    | 98.7(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|      ISM       | 2022 |     -     |   -    | 95.7(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|  TransferNet   | 2022 |     -     |   -    | 91.3(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|    Uhop-HR     | 2022 |     -     |   -    | 91.3(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|     QAGCN      | 2022 |     -     |   -    | 90.6(Hits@1)  |    EN    |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|    ARN_ConvE     | 2023 |     -      |    -    | 90.58(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|    ARN_TuckER     | 2023 |     -      |    -    | 90.19(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      SRN       | 2022 |     -     |   -    | 89.2(Hits@1)  |    EN    |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|     RL-MHR     | 2022 |     -     |   -    | 87.2(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|  ARN_ComplEx   | 2023 |     -      |    -    | 85.96(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|  ARN_DistMult  | 2023 |     -     |   -    | 84.62(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      IRN       | 2022 |     -     |   -    | 83.3(Hits@1)  |    EN    |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      IRN       | 2022 |     -     |   -    | 74.3(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|   HR-BiLSTM    | 2022 |     -     |   -    | 74.1(Hits@1)  |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|    MINERVA     | 2022 |     -     |   -    | 71.2(Hits@1)  |    EN    |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |


## PQL (3-hop)

### Leaderboard

|    Model / System    | Year | Precision | Recall |      F1       | Accuracy | Language |                            Reported by                            |
|:--------------------:|:----:|:---------:|:------:|:-------------:|:--------:|:--------:|:-----------------------------------------------------------------:|
|    ARN_TuckER     | 2023 |     -      |    -    | 97.12(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|      ARN_ConvE       | 2023 |     -      |    -    | 94.23(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     GlobalGraph      | 2022 |     -     |   -    | 94.1(Hits@1)  |    -     |    EN    |    [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)   |
|    Edge-aware GNN    | 2022 |     -     |   -    | 93.1(Hits@1)  |    -     |    EN    |    [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)   |
|        2HR-DR        | 2022 |     -     |   -    | 92.1(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|      GRAFT-Net       | 2022 |     -     |   -    | 91.3(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|     ARN_DistMult     | 2023 |     -      |    -    | 90.00(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     AlAgha, 2022     | 2022 |     -     |   -    | 89.7(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|       SGReader       | 2022 |     -     |   -    | 89.3(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|     ARN_ComplEx      | 2023 |     -      |    -    | 89.04(Hits@1) |    EN    |              [Cui et al.](https://www.sciencedirect.com/science/article/abs/pii/S0020025522013317)               |
|     TransferNet      | 2022 |     -     |   -    | 82.7(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|         ISM          | 2022 |     -     |   -    | 81.7(Hits@1)  |    -     |    EN    |  [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)             |
|       Uhop-HR        | 2022 |     -     |   -    | 80.1(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|        RL-MHR        | 2022 |     -     |   -    | 77.8(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|         IRN          | 2022 |     -     |   -    | 71.0(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|       KV-MemNN       | 2022 |     -     |   -    | 67.4(Hits@1)  |    -     |    EN    |   [Zhang](https://downloads.hindawi.com/journals/cin/2022/4734179.pdf)  |
|      HR-BiLSTM       | 2022 |     -     |   -    | 61.6(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
|         IRN          | 2022 |     -     |   -    | 59.1(Hits@1)  |    -     |    EN    |    [AlAgha, 2022](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9834917)   |
| MRP-QA-marginal_prob | 2022 |     -     |   -    |       -       |   97.8   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|         UHop         | 2022 |     -     |   -    |       -       |   89.3   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|        ABWIM         | 2022 |     -     |   -    |       -       |   89.3   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |
|      HR-BiLSTM       | 2022 |     -     |   -    |       -       |   87.9   |    EN    |  [Wang et al.](https://aclanthology.org/2022.naacl-main.294.pdf)   |

## References 
<a name="myfootnote1">[1]</a> Zhou, Mantong, Minlie Huang, and Xiaoyan Zhu. [An interpretable reasoning network for multi-relation question answering.](https://arxiv.org/abs/1801.04726) arXiv preprint arXiv:1801.04726 (2018).

<a name="myfootnote2">[2]</a> Berant, Jonathan, Andrew Chou, Roy Frostig, and Percy Liang. [Semantic parsing on freebase from question-answer pairs.](https://aclanthology.org/D13-1160/) In Proceedings of the 2013 conference on empirical methods in natural language processing, pp. 1533-1544. 2013.

<a name="myfootnote3">[3]</a> Fader, Anthony, Luke Zettlemoyer, and Oren Etzioni. [Paraphrase-driven learning for open question answering.](https://aclanthology.org/P13-1158/) In Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1608-1618. 2013.


[Go back to the README](../README.md)
