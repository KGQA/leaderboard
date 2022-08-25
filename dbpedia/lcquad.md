# Large-scale Complex Question Answering

LC-QuAD v1.0 and v2.0 are large-scale QA datasets towards complex questions against knowledge graphs. 

### Table of contents

- [LC-QuAD 1.0](#lc-quad-v1)
- [LC-QuAD 2.0](#lc-quad-v2)
  
  
## LC-QuAD v1

The Largescale Complex Question Answering Dataset 1.0 (LC-QuAD 1.0)<sup>[[1]](#myfootnote1)</sup> is a Question Answering dataset with 5000 pairs of question and its corresponding SPARQL query. The target knowledge base is DBpedia, specifically, the April, 2016 version. 
Please see the original [paper](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) for details about the dataset creation process and framework.

This dataset can be downloaded via the [link](https://github.com/AskNowQA/LC-QuAD).

### Leaderboard


|         Model / System         |  Year  |Precision| Recall |   F1   |Accuracy |Language|                                                                        Reported by                                                                        |
|:------------------------------:|:------:|:-------:|:------:|:------:|:-------:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------:|
|            T5-Base             |  2022  |    -    |   -    |   91   |  -    |   EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|            T5-Small            |  2022  |    -    |   -    |   90   |    -    | EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|         PGN-BERT-BERT          |  2022  |    -    |   -    |   88   |    -    | EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|             mBERT              |  2021  |   73    |   -    | 85.50  |   -    |   EN   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             SubQG              |  2019  |    -    |   -    |   85   |   -    |  EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|              BART              |  2022  |    -    |   -    |   84   |    -    | EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|        Stage-I No Noise        |  2021  |  83.11  | 83.04  | 83.08  |   -    |  EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|             mBERT              |  2021  |    -    |   -    | 82.40  |   -    |  DE   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|              LAMA              |  2019  |    -    |   -    | 81.60  |   -    |  EN   |                                      [Radoev et. al.](http://www.semantic-web-journal.net/system/files/swj2537.pdf)                                       |
|             mBERT              |  2021  |    -    |   -    | 80.90  |   -    |  NL   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             CompQA             |  2018  |    -    |   -    |   77   |    -    | EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|             mBERT              |  2021  |    -    |   -    | 76.10  |   -    |  ES   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             HGNet              |  2021  |  75.82  | 75.22  | 75.10  |    -    | EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|            AQG-net             |  2021  |   76    |   75   |   76   |   -    |  EN   |                                              [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)                                               |
|              SQG               |  2018  |    -    |   -    |   75   |   -    |  EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|           O-Ranking            |  2021  |  75.54  | 74.95  | 74.81  |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|            AQG-net             |  2021  |    -    |   -    | 74.80  |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|             mBERT              |  2021  |    -    |   -    | 74.50  |   -    |  RU   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             mBERT              |  2021  |    -    |   -    |   74   |    -    | PT   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             mBERT              |  2021  |    -    |   -    | 73.20  |   -    |  FR   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             mBERT              |  2021  |    -    |   -    | 72.60  |    -    | RO   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             mBERT              |  2021  |    -    |   -    | 72.30  |   -    |  IT   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|              DAM               |  2021  |    -    |   -    |   72   |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|              GSM               |  2021  |   71    |   73   |   72   |   -    |  EN   |                                              [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)                                               |
|             mBERT              |  2021  |    -    |   -    | 71.90  |  -    | HI_IN  |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|             mBERT              |  2021  |    -    |   -    | 71.70  |   -    |  FA   |                                             [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf)                                             |
|              GGNN              |  2022  |   66    |   78   |   71   |   -    |  EN   |                                              [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)                                               |
|              DAM               |  2022  |   65    |   77   |   71   |   -    |  EN   |                                              [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)                                               |
|         Slot-Matching          |  2021  |    -    |   -    |   71   |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
| G Maheshwari et. al. Pairwise  |  2019  |   66    |   77   |   71   |   -    |  EN   |                                               [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)                                                |
| G Maheshwari et. al. Pointwise |  2019  |   65    |   76   |   70   |   -    |  EN   |                                               [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)                                                |
|           HR-BiLSTM            |  2021  |    -    |   -    |   70   |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|           S-Ranking            |  2021  |  65.89  | 75.30  | 69.53  |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|             STAGG              |  2021  |    -    |   -    |   69   |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|          Liang et al.          |  2021  |   88    |   56   |   68   |    -    | EN   |                                      [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)                                      |
|            PGN-BERT            |  2018  |    -    |   -    |   67   |   -    |  EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|          STaG-QA_pre           |  2021  |  74.50  | 54.80  | 53.60  |    -    | EN   |                                                  [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                                                   |
|            STaG-QA             |  2021  |  76.50  | 52.80  | 51.40  |   -    |  EN   |                                                  [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                                                   |
|           sparql-qa            |  2021  |  49.50  | 49.20  | 49.10  |    -    | EN   |                                                [ M. Borroto et al](http://ceur-ws.org/Vol-2918/paper3.pdf)                                                |
|              BART              |  2021  |  48.01  | 49.19  | 47.62  |    -    | EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|             NLIWOD             |  2018  |    -    |   -    |   48   |   -    |  EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|             SYGMA              |  2021  |   47    |   48   |   47   |   -    |  EN   |    [ S Neelam et al](https://www.researchgate.net/publication/354950006_SYGMA_System_for_Generalizable_Modular_Question_Answering_OverKnowledge_Bases)    |
|              NHGG              |  2021  |  46.93  | 48.36  | 46.12  |   -    |  EN   |                                                    [Chen et al.](https://arxiv.org/pdf/2111.00732.pdf)                                                    |
|          WDAqua-core1          |  2021  |   59    |   38   |   46   |   -    |  EN   |                                      [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)                                      |
|              NSQA              |  2021  |  44.80  | 45.80  | 44.40  |   -    |  EN   |                                                  [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                                                   |
|       Stage-I Part Noise       |  2021  |  42.40  | 42.26  | 42.33  |    -    | EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|        Stage-II w/ type        |  2021  |  37.03  | 37.06  | 37.05  |   -    |  EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|            QASparql            |  2021  |    -    |   -    |   34   |    -    | EN   |                                                   [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                   |
|              DTQA              |  2021  |  33.94  | 34.99  | 33.72  |    -    | EN   |                                        [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                         |
|              QAmp              |  2021  |   25    |   50   | 33.33  |    -    | EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|              QAmp              |  2021  |   25    |   50   |   33   |   -    |  EN   |                                     [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                      |
|              QAmp              |  2021  |   25    |   50   |   33   |   -    |  EN   |                                        [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                         |
|              QAmp              |  2021  |   25    |   50   |   33   |   -    |  EN   |                                                  [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                                                   |
|              QAmp              |  2021  |   25    |   50   |   33   |   -    |  EN   |                                         [Kapanipathi et al.](https://aclanthology.org/2021.findings-acl.339.pdf)                                          |
|       Stage-II w/o type        |  2021  |  32.12  | 32.20  | 32.18  |   -    |  EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|              SINA              |  2015  |    -    |   -    |   24   |    -    | EN   |                                                  [Banerjee et al](https://arxiv.org/pdf/2204.12793.pdf)                                                   |
|          WDAqua-core1          |  2021  |   22    |   38   |   28   |   -    |  EN   |                                        [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                         |
|          WDAqua-core1          |  2021  |   22    |   38   |   28   |   -    |  EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|          WDAqua-core1          |  2021  |   22    |   38   |   28   |   -    |  EN   |                                     [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                      |
|          WDAqua-core0          |  2021  |   22    |   38   |   28   |   -    |  EN   |                                                  [Ravishankar et al.](https://arxiv.org/abs/2111.05825)                                                   |
|       Stage-I Full Noise       |  2021  |  25.54  | 25.64  | 25.59  |   -    |  EN   |                                                [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                 |
|          Frankenstein          |  2021  |   20    |   21   |   20   |   -    |  EN   |                                      [Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)                                      |
|          WDAqua-core0          |  2021  |    -    |   -    |   15   |   -    |  EN   |                                                   [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                   |
|             AskNow             |  2021  |    -    |   -    |   11   |   -    |  EN   |                                                   [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                   |
|        Qanary(TM+DP+QB)        |  2021  |    -    |   -    |   1    |   -    |  EN   |                                                   [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                   |
|  Entity Type Tags Modified     |  2022  |   -    |   -   |   -  |  72   |   EN   |                                              [Lin and Lu](https://journals.riverpublishers.com/index.php/JWE/article/view/11463)                                               |
|           SPARQL Generator     |  2022  |   -    |   -   |   -   |   71.27     |  EN   |                                              [Lin and Lu](https://journals.riverpublishers.com/index.php/JWE/article/view/11463)                                               |
|        Diomedi and Hogan     |  2022  |   -    |   -   |   -   |  14     |   EN   |                                              [Lin and Lu](https://journals.riverpublishers.com/index.php/JWE/article/view/11463)                                               |
|           Yin et al.     |  2022  |   -    |   -   |  -  |    8   |  EN   |                                              [Lin and Lu](https://journals.riverpublishers.com/index.php/JWE/article/view/11463)                                               |


## LC-QuAD v2

The Largescale Complex Question Answering Dataset 2.0 (LC-QuAD 2.0)<sup>[[2]](#myfootnote2)</sup> is a Large Question Answering dataset with 30,000 pairs of question 
and its corresponding SPARQL query. The target knowledge base is [Wikidata](https://wikidata.org/wiki/Wikidata:Main_Page/) and [DBpedia](https://dbpedia.org/), specifically the 2018 version. 
Please see our [paper](https://figshare.com/projects/LCQuAD_2_0/62270) for details about the dataset creation process and framework.

This dataset can be downloaded via the [link](https://figshare.com/projects/LCQuAD_2_0/62270).

### Leaderboard for systems which require gold entity and/or relation as input


|      Model / System       | Year |Precision|Recall| F1  |Language|                                        Reported by                                        |
|:-------------------------:|:----:|:-------:|:----:|:---:|:------:|:-----------------------------------------------------------------------------------------:|
|     T5-Small              | 2022 |    -    |  -   |92|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|     T5-Base              | 2022 |    -    |  -   |91|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|     PGN-BERT-BERT        | 2022 |    -    |  -   |86|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|         SGPT_Q,K    [1]     | 2022 |     -     |    -    | 89.04 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |
|     PGN-BERT              | 2022 |    -    |  -   |77|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|             NSpM      [2]       | 2022 |     -     |    -    | 66.47 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |
|     BART              | 2022 |    -    |  -   |64|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|     Zou et al. + Bert      | 2021 |    -    |  -   |59.30|   EN   |                    [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                     |
|    CLC                   | 2021 |    -    |  -   |59|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
|    Multi-hop QGG       | 2020 |    -    |  -   |53|   EN   |                    [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                     |
| Zou et al. + Tencent Word  | 2021 |    -    |  -   |52.90|   EN   |                    [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)  |
|       Multi-hop QGG       | 2021 |    -    |  -   |52.60|   EN   |                    [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)   |
|          AQG-net         | 2021 |    -    |  -   |44.90|   EN   |                    [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)   |


 * [1][2] Token wise match of query string is performed. Answers are not fetched from KG.




### Leaderboard for systems which do not require gold entity and/or relation as input


|      Model / System       | Year |Precision|Recall| F1  |Language|                                        Reported by                                        |
|:-------------------------:|:----:|:-------:|:----:|:---:|:------:|:-----------------------------------------------------------------------------------------:|
|          SGPT_Q     [3]      | 2022 |     -     |    -    | 83.45 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |
|          UNIQORN         | 2021 |    33.1 |  -   | - |   EN   |                  [Pramanik et al.](https://arxiv.org/abs/2108.08614)     |
|           QAnswer        | 2020 | 30.80   |  -   | - |   EN   | [Pramanik et al.](https://arxiv.org/abs/2108.08614)  |
|           GraftNet      | 2018 | 19.7    |  -   | - |   EN   |   [Christmann P. et al](https://arxiv.org/pdf/2108.08597.pdf)     |
|   ElNeuQA-ConvS2S [1]     | 2021 |  26.90  |  27  |26.90|   EN   |                  [Diomedi, Hogan](https://arxiv.org/pdf/2107.02865.pdf)    |
|   GRAFT-Net + Clocq [2]   | 2022 |  19.70  |  -   |  -  |   EN   |       [Christmann P. et al](https://arxiv.org/pdf/2108.08597.pdf)          |
|           Platypus    | 2018 |  3.6    |  -   |  -  |   EN   |[Pramanik et al.](https://arxiv.org/abs/2108.08614) |
|   Pullnet            | 2019 |  1.1    |  -   |  -  |   EN   | [Pramanik et al.](https://arxiv.org/abs/2108.08614)      |
|   UNIK-QA          | 2020 |    0.5    |  -   | - |   EN   |    [Pramanik et al.](https://arxiv.org/abs/2108.08614)   |


* [1] discarded 2,502 (8.2%) of the 30,226 instances due to such quality issues..
* [2] 2k dev, 8k test, more complex questions from origical LC-QuAD 2.0. 
* [3] Token wise match of query string is performed. Answers are not fetched from KG.

## LC-QuAD v2 + QALD-9

### Leaderboard

|Model / System| Year |Precision|Recall| F1 |Language|                            Reported by                            |
|:------------:|:----:|:-------:|:----:|:---:|:------:|:-----------------------------------------------------------------:|
|  mBERT [1]   | 2021 |    -    |  -   | 70 | PT_BR  | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [2]   | 2021 |    -    |  -   |66.7|   EN   |[Zhou Y. et. al.](https://aclanthology.org/2021.naacl-main.465.pdf)|
|  mBERT [3]   | 2021 |    -    |  -   |65.9|   NL   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [4]   | 2021 |    -    |  -   |63.6|   FR   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [5]   | 2021 |    -    |  -   |63.5|   RU   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [6]   | 2021 |    -    |  -   |63.5|   PT   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [7]   | 2021 |    -    |  -   |62.6| HI_IN  | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [8]   | 2021 |    -    |  -   |62.2|   DE   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [9]   | 2021 |    -    |  -   |62.1|   RO   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [10]  | 2021 |    -    |  -   | 60 |   FA   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [11]  | 2021 |    -    |  -   |58.8|   ES   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |
|  mBERT [12]  | 2021 |    -    |  -   |57.7|   IT   | [Zhou Y. et al](https://aclanthology.org/2021.naacl-main.465.pdf) |

 * [1] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [2] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [3] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [4] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [5] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [6] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [7] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [8] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [9] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [10] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [11] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 
 * [12] trained on LC-QuAD 1.0, tested on a data combining qald4 -9 and filter out some out-of-scope questionss. 



## References
<a name="myfootnote1">[1]</a> Trivedi, Priyansh, Gaurav Maheshwari, Mohnish Dubey, and Jens Lehmann. [Lc-quad: A corpus for complex question answering over knowledge graphs.](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) In International Semantic Web Conference, pp. 210-218. Springer, Cham, 2017.

<a name="myfootnote2">[2]</a> Dubey, Mohnish, Debayan Banerjee, Abdelrahman Abdelkawi, and Jens Lehmann. [Lc-quad 2.0: A large dataset for complex question answering over wikidata and dbpedia.](http://jens-lehmann.org/files/2019/iswc_lcquad2.pdf) In International semantic web conference, pp. 69-78. Springer, Cham, 2019.


[Go back to the README](../README.md)
