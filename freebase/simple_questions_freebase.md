
**simple_questions_freebase**<sup>[[1]](#myfootnote1)</sup> is an created built on a subset of Freebase - FB5M. The dataset is manually created and annotated against Freebase. This dataset consists of a total of 108,442 questions written in natu-al language by human English-speaking annota- tors each paired with a corresponding fact from FB2M that provides the answer and explains it. These questions are randomy shufffled, and seperated by 70% of them (75910) as training set, 10% as validation set (10845), and the remaining 20% as test set.

The dataset is available for download at this [link](https://github.com/davidgolub/SimpleQA/tree/master/datasets/SimpleQuestions).

## Leaderboard 


| Model / System | Year | Precision | Recall |  F1   |  Accuracy  | Language |                                         Reported by                                          |
|:--------------:|:----:|:---------:|:------:|:-----:|:-----:|:--------:|:--------------------------------------------------------------------------------------------:|
|  KGQA-RR(Kepler) | 2023 |   -     |    -   |   -   | 77.41 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(Roberta)| 2023 |   -     |    -   |   -   | 77.12 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(Luke)   | 2023 |   -     |    -   |   -   | 77.00 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(Bert)   | 2023 |   -     |    -   |   -   | 76.76 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(XLnet)  | 2023 |    -    |     -  |    -  | 76.26 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(ALbert) | 2023 |    -    |     -  |    -  | 76.20 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(Luke)   | 2023 |   -     |     -  | -     |  75.67 |  EN    |  [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(Roberta)| 2023 |   -     |     -  |   -   |  75.32 |  EN    |  [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(DistilBert) | 2023 |   - |     -  |    -  | 75.11 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(BERT) | 2023 |   -       |    -   |   -    | 74.79 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(Kepler) | 2023 |   -     |    -   |   -    | 74.87 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(XLnet) | 2023 |   -      |    -   |   -    | 74.30 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
| KGQA-CL(DistilBert) | 2023 |   -  |    -   |   -    | 74.29   |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(ALbert) | 2023 |   -     |    -   |   -    | 74.26   |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(DistilRoberta) | 2023 | -  |    -   |   -    | 74.04   |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-CL(GPT2) | 2023 |   -         |    -   |   -    | 73.39   |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  KGQA-RR(DistilRoberta) | 2023 |   - |     -  |    -  | 73.24 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |
|  STaG-QA_pre   | 2023 |   60.20   | 63.20  | 61.70 |   -  |   EN    |  [Badenes-Olmedo and Corcho](https://www.semantic-web-journal.net/system/files/swj3379.pdf)  |
|     MuHeQA     | 2023 |   59.70   | 56.33  | 57.97 |  -  |    EN    |  [Badenes-Olmedo and Corcho](https://www.semantic-web-journal.net/system/files/swj3379.pdf)  |
|     SYGMA      | 2023 |   42.00   | 55.00  | 44.00 |  -  |    EN    |  [Badenes-Olmedo and Corcho](https://www.semantic-web-journal.net/system/files/swj3379.pdf)  |
|   Falcon 2.0   | 2023 |   34.00   | 41.10  | 36.30 |   -  |   EN    |  [Badenes-Olmedo and Corcho](https://www.semantic-web-journal.net/system/files/swj3379.pdf)  |
|  KGQA-RR(GPT2) | 2023 |   - |     -  |    -  | 23.18 |  EN    | [Hu et al.](https://arxiv.org/pdf/2303.10368.pdf)  |


## References
<a name="myfootnote1">[1]</a> Antoine Bordes, Nicolas Usunier, Sumit Chopra, Jason Weston. [Large-scale Simple Question Answering with Memory Networks](https://arxiv.org/pdf/1506.02075.pdf) arXiv preprint arXiv:1603.06807 (2016).
<a name="myfootnote1">[2]</a> We only update system performance after 01.01.2023.


[Go back to the README](../README.md)