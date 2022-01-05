# Large-scale Complex Question Answering

LC-QuAD v1.0 and v2.0 are large-scale QA datasets towards complex questions against knowledge graphs. 

### Table of contents

- [LC-QuAD 1.0](#lc-quad-v1)
- [LC-QuAD 2.0](#lc-quad-v2)
  
  
## LC-QuAD v1

The [Largescale Complex Question Answering Dataset 1.0 (LC-QuAD 1.0)](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) is a Question Answering dataset with 5000 pairs of question and its corresponding SPARQL query. The target knowledge base is DBpedia, specifically, the April, 2016 version. 
Please see the original [paper](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) for details about the dataset creation process and framework.

### Leaderboard

|         Model / System          | Year | Precision  | Recall  |   F1   | Language  |                                         Reported by                                          |
|:-------------------------------:|:----:|:----------:|:-------:|:------:|:---------:|:--------------------------------------------------------------------------------------------:|
|              LAMA               | 2019 |     -      |    -    | 81.60  |    EN     |        [Radoev et. al.](http://www.semantic-web-journal.net/system/files/swj2537.pdf)        |
| G Maheshwari et. al. Pointwise  | 2019 |     65     |   76    |   70   |    EN     |                 [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)                 |
|  G Maheshwari et. al. Pairwise  | 2019 |     66     |   77    |   71   |    EN     |                 [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)                 |
|              mBERT              | 2021 |     73     |    -    | 85.50  |    EN     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 71.70  |    FA     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 82.40  |    DE     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 72.60  |    RO     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 72.30  |    IT     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 74.50  |    RU     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 73.20  |    FR     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 80.90  |    NL     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 76.10  |    ES     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    | 71.90  |   HI_IN   |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|              mBERT              | 2021 |     -      |    -    |   74   |    PT     |              [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)               |
|             STaG-QA             | 2021 |   76.50    |  52.80  | 51.40  |    EN     |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                    |
|           STaG-QA_pre           | 2021 |   74.50    |  54.80  | 53.60  |    EN     |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                    |
|              NSQA               | 2021 |   44.80    |  45.80  | 44.40  |    EN     |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                    |
|              QAMP               | 2021 |     25     |   50    |   33   |    EN     |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                    |
|             WDAqua              | 2021 |     22     |   38    |   28   |    EN     |                    [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                    |
|          WDAqua-core1           | 2021 |     59     |   38    |   46   |    EN     |       [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)        |
|          Frankenstein           | 2021 |     20     |   21    |   20   |    EN     |       [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)        |
|          Liang et al.           | 2021 |     88     |   56    |   68   |    EN     |       [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)        |
|             WDAqua              | 2021 |     -      |    -    |   15   |    EN     |                    [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                     |
|             Qanary              | 2021 |     -      |    -    |   1    |    EN     |                    [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                     |
|            QASparql             | 2021 |     -      |    -    |   34   |    EN     |                    [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                     |
|             AskNow              | 2021 |     -      |    -    |   11   |    EN     |                    [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                     |
|             WDAqua              | 2021 |     22     |   38    |   28   |    EN     |          [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)          |
|              QAMP               | 2021 |     25     |   50    |   33   |    EN     |          [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)          |
|              DTQA               | 2021 |   33.94    |  34.99  | 33.72  |    EN     |          [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)          |
|              QAmp               | 2021 |     25     |   50    |   33   |    EN     |       [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)       |
|             WDAqua              | 2021 |     22     |   38    |   28   |    EN     |       [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)       |
|             Falcon              | 2021 |     42     |   44    |   43   |    EN     |               [Naseem et al.](https://aclanthology.org/2021.acl-short.34.pdf)                |
|              SLING              | 2021 |     41     |   55    |   47   |    EN     |               [Naseem et al.](https://aclanthology.org/2021.acl-short.34.pdf)                |
|             SemReL              | 2021 |     51     |   51    |   51   |    EN     |               [Naseem et al.](https://aclanthology.org/2021.acl-short.34.pdf)                |
|             WDAqua              | 2021 |     22     |   38    |   28   |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|              QAmp               | 2021 |     25     |   50    | 33.33  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|        Stage-I No Noise         | 2021 |   83.11    |  83.04  | 83.08  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|       Stage-I Part Noise        | 2021 |   42.40    |  42.26  | 42.33  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|       Stage-I Full Noise        | 2021 |   25.54    |  25.64  | 25.59  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|        Stage-II w/o type        | 2021 |   32.12    |  32.20  | 32.18  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|        Stage-II w/ type         | 2021 |   37.03    |  37.06  | 37.05  |    EN     |                  [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                  |
|            sparql-qa            | 2021 |   49.50    |  49.20  | 49.10  |    EN     |                  [ M. Borroto et al](https://arxiv.org/pdf/2111.03000.pdf)                   |
|              STAGG              | 2021 |     -      |    -    |   69   |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|            HR-BiLSTM            | 2021 |     -      |    -    |   70   |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|          Slot-Matching          | 2021 |     -      |    -    |   71   |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|             AQGnet              | 2021 |     -      |    -    | 74.80  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|               DAM               | 2021 |     -      |    -    |   72   |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|            S-Ranking            | 2021 |   65.89    |  75.30  | 69.53  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|            O-Ranking            | 2021 |   75.54    |  74.95  | 74.81  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|              BART               | 2021 |   48.01    |  49.19  | 47.62  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|              NHGG               | 2021 |   46.93    |  48.36  | 46.12  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|              HGNet              | 2021 |   75.82    |  75.22  | 75.10  |    EN     |                     [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                      |
|              SYGMA              | 2021 |     47     |   48    |   47   |    EN     |                   [ S Neelam et al](https://arxiv.org/pdf/2111.00732.pdf)                    |
|       Evseev D. A. et al        | 2020 |  acc:56.3  |    -    |   -    |    EN     | [ Evseev D. A. et al](https://www.dialog-21.ru/media/5088/evseevdaplusarkhipov-myu-048.pdf)  |


## LC-QuAD v2

The [Largescale Complex Question Answering Dataset 2.0 (LC-QuAD 2.0)](http://jens-lehmann.org/files/2019/iswc_lcquad2.pdf) is a Large Question Answering dataset with 30,000 pairs of question 
and its corresponding SPARQL query. The target knowledge base is [Wikidata](https://wikidata.org/wiki/Wikidata:Main_Page/) and [DBpedia](https://dbpedia.org/), specifically the 2018 version. 
Please see our [paper](https://figshare.com/projects/LCQuAD_2_0/62270) for details about the dataset creation process and framework.

### Leaderboard

|       Model / System       | Year |    Precision    | Recall  |   F1   | Language  |                                         Reported by                                          |
|:--------------------------:|:----:|:---------------:|:-------:|:------:|:---------:|:--------------------------------------------------------------------------------------------:|
|      ElNeuQA-ConvS2S       | 2021 |      26.90      |   27    | 26.90  |    EN     |                    [Diomedi, Hogan](https://arxiv.org/pdf/2107.02865.pdf)                    |
|          AQG-net           | 2021 |        -        |    -    | 44.90  |    EN     |                      [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                      |
|       Multi-hop QGG        | 2021 |        -        |    -    | 52.60  |    EN     |                      [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                      |
| Zou et al. + Tencent Word  | 2021 |        -        |    -    | 52.90  |    EN     |                      [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                      |
|     Zou et al. + Bert      | 2021 |        -        |    -    | 59.30  |    EN     |                      [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                      |
|       Template-based       | 2021 |      0.92       |  0.92   |  0.92  |    EN     |                [Dileep et al.](https://ieeexplore.ieee.org/document/9364492)                 |
|            NSQA            | 2021 |      38.19      |  40.39  | 38.29  |    EN     |              [Kapanipathi et al.](https://ieeexplore.ieee.org/document/9364492)              |
|            QAMP            | 2021 |       25        |   50    |   33   |    EN     |              [Kapanipathi et al.](https://ieeexplore.ieee.org/document/9364492)              |
|         GRAFT-Net          | 2021 | hits@1    28.2  |    -    |   -    |    EN     |                [Y Feng et al.](https://ieeexplore.ieee.org/document/9364492)                 |
|        NT-GRAFT-Net        | 2021 | hits@1    34.5  |    -    |   -    |    EN     |                [Y Feng et al.](https://ieeexplore.ieee.org/document/9364492)                 |
|            NSM             | 2021 | hits@1    33.6  |    -    |   -    |    EN     |                [Y Feng et al.](https://ieeexplore.ieee.org/document/9364492)                 |
|           NT-NSM           | 2021 | hits@1    39.1  |    -    |   -    |    EN     |                [Y Feng et al.](https://ieeexplore.ieee.org/document/9364492)                 |
|     Evseev D. A. et al     | 2020 |    acc:56.3     |    -    |   -    |    EN     | [ Evseev D. A. et al](https://www.dialog-21.ru/media/5088/evseevdaplusarkhipov-myu-048.pdf)  |


[Go back to the README](../README.md)