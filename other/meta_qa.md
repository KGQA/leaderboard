# MetaQA 

**MoviE Text Audio QA (MetaQA)**<sup>[[1]](#myfootnote1)</sup> contains more than 400K questions for both single and multi-hop reasoning, and provides more realistic text and audio versions. MetaQA serves as a comprehensive extension of WikiMovies., in English language. Containing 400,000+ in Text, MP3 file format.

This dataset can be downloaded via the [link](https://github.com/yuyuz/MetaQA).
Note that this dataset is divided into 1-hop, 2-hop and 3-hop in the original paper: [Variational reasoning for question answering with knowledge graph](https://arxiv.org/pdf/1709.04071.pdf).

## 1-hop

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                                Reported by                                 |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:--------------------------------------------------------------------------:|
|     SSKGQA     | 2022 |    -    |  -   | 99.1(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      DCRN      | 2022 |    -    |  -   | 97.5(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      VRN       | 2022 |    -    |  -   | 97.5(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|   EmbedKGQA    | 2022 |    -    |  -   | 97.5(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|     QAGCN      | 2022 |    -    |  -   | 97.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      NSM       | 2022 |    -    |  -   | 97.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      SRN       | 2022 |    -    |  -   | 97.0(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|    GraftNet    | 2022 |    -    |  -   | 97.0(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    PullNet     | 2022 |    -    |  -   | 97.0(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|       MINERVA        | 2022 |    -    |  -   | 96.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|    KV-MemNN    | 2022 |    -    |  -   | 96.2(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|  TransferNet   | 2022 |    -    |  -   | 96.0(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      IRN       | 2022 |    -    |  -   | 85.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |

## 2-hop

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|    PullNet     | 2022 |    -    |  -   | 99.9(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      DCRN      | 2022 |    -    |  -   | 99.9(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      NSM       | 2022 |    -    |  -   | 99.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|     QAGCN      | 2022 |    -    |  -   | 99.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|     SSKGQA     | 2022 |    -    |  -   | 99.7(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|   EmbedKGQA    | 2022 |    -    |  -   | 98.8(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|  TransferNet   | 2022 |    -    |  -   | 98.5(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      SRN       | 2022 |    -    |  -   | 95.1(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|    GraftNet    | 2022 |    -    |  -   | 94.8(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    MINERVA     | 2022 |    -    |  -   | 92.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      VRN       | 2022 |    -    |  -   | 89.2(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    KV-MemNN    | 2022 |    -    |  -   | 82.7(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      IRN       | 2022 |    -    |  -   | 71.3(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |


## 3-hop

### Leaderboard

| Model / System | Year |Precision|Recall|      F1      |Language|                            Reported by                            |
|:--------------:|:----:|:-------:|:----:|:------------:|:------:|:-----------------------------------------------------------------:|
|     SSKGQA     | 2022 |    -    |  -   | 99.6(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      DCRN      | 2022 |    -    |  -   | 99.3(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      NSM       | 2022 |    -    |  -   | 98.9(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|     QAGCN      | 2022 |    -    |  -   | 97.6(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|   EmbedKGQA    | 2022 |    -    |  -   | 94.8(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|  TransferNet   | 2022 |    -    |  -   | 94.7(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    PullNet     | 2022 |    -    |  -   | 91.4(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    GraftNet    | 2022 |    -    |  -   | 77.7(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      SRN       | 2022 |    -    |  -   | 75.2(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|      VRN       | 2022 |    -    |  -   | 62.5(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|    MINERVA     | 2022 |    -    |  -   | 55.2(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |
|    KV-MemNN    | 2022 |    -    |  -   | 48.9(Hits@1) | EN  | [Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf) |
|      IRN       | 2022 |    -    |  -   | 35.6(Hits@1) | EN  |            [Wang et al.](https://arxiv.org/pdf/2206.01818.pdf)             |

## References 
<a name="myfootnote1">[1]</a> Zhang, Yuyu, Hanjun Dai, Zornitsa Kozareva, Alexander J. Smola, and Le Song. [Variational reasoning for question answering with knowledge graph.](https://arxiv.org/pdf/1709.04071.pdf) In Thirty-Second AAAI Conference on Artificial Intelligence. 2018.




[Go back to the README](../README.md)
