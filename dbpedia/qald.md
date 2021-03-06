# Question Answering over Linked Data (QALD)

**QALD** is a series of evaluation campaigns on question answering over linked data, which aims at providing an up-to-date benchmark for assessing and comparing 
state-of-the-art systems that mediate between a user, expressing his or her information need in natural language, and RDF data. Thus, it targets all researchers 
and practitioners working on querying Linked Data, natural language processing for question answering, multilingual information retrieval and related topics. The
main goal is to gain insights into the strengths and shortcomings of different approaches and into possible solutions for coping with the large, heterogeneous and
distributed nature of Semantic Web data.

**QALD** challenge began in 2011 and is developing benchmarks that are increasingly being used as standard evaluation venue for question answering over Linked Data.
Overviews of past instantiations of the challenge are available from the CLEF Working Notes, CEUR workshop notes as well as ESWC proceedings.

The key challenge for QA over Linked Data is to translate a user's natural language query into such a form that it can be evaluated using standard Semantic Web query 
processing and inferencing techniques. The main task of QALD therefore is the following:

> Given one or several RDF dataset(s) as well as additional knowledge sources and natural language questions or keywords, return the correct answers or a SPARQL query 
> that retrieves these answers.

### Table of contents
- [QALD-9-plus](#qald-9-plus)
- [QALD 9](#qald-9)
- [QALD 8](#qald-8)
- [QALD 7](#qald-7)
- [QALD 6](#qald-6)
- [QALD 5](#qald-5)
- [QALD 4](#qald-4)
- [QALD 3](#qald-3)
- [QALD 2](#qald-2)
- [QALD 1](#qald-1)

## QALD-9-PLUS

 Please see the original [paper](https://ieeexplore.ieee.org/document/9736271) for details about the dataset creation process, data format, task and participating systems. 

 ### Leaderboard

 | Model / System | Year |Precision|Recall| F1  |Language|                                  Reported by                                   |
 |:--------------:|:----:|:-------:|:----:|:---:|:------:|:------------------------------------------------------------------------------:|
 |     QAnswer    | 2022 | -   |- |30.39(Macro F1)|   EN   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf) |
 |     QAnswer    | 2022 |  -  |- |19.98(Macro F1)|   DE   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer    | 2022 |  -  |- |15.06(Macro F1)|   FR   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer    | 2022 |  -  |- |09.57(Macro F1)|   RU   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer    | 2022 |  -  |- |05.27(Micro F1)|   EN   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf) |
 |     QAnswer    | 2022 | -   |- |02.19(Micro F1)|   DE   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer    | 2022 | -   |- |04.06(Micro F1)|   FR   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer    | 2022 |  -  |- |01.53(Micro F1)|   RU   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     DeepPavlov | 2022 |  -  |- |12.40(Macro F1)|   EN   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     DeepPavlov | 2022 |  -  |- |00.13(Micro F1)|   EN   |         [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     Platypus   | 2022 |  -  |- |15.03(Macro F1)|   EN   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     Platypus   | 2022 |  -  |- |01.26(Micro F1)|   EN   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     DeepPavlov | 2022 |  -  |- |08.7 (Macro F1)|   RU   |       [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     DeepPavlov | 2022 |  -  |- |00.05(Micro F1)|   RU   |       [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     Platypus   | 2022 | -   |- |4.17 (Macro F1)|   FR   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     Platypus   | 2022 | -   |- |0.00 (Micro F1)|   FR   |        [Perevalov et. al.](https://arxiv.org/pdf/2202.00120v2.pdf)|
 |     QAnswer-en-de-Yandex    | 2022 | 34.91  | 35.18 |32.83|   EN   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-en-de-Helsinki NLP | 2022 | 34.90  | 35.00 |33.74|  EN |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-en-ru-Yandex    | 2022 | 22.84  | 21.61 |21.07|   EN   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-en-ru-Helsinki NLP | 2022 | 22.38  | 20.63 |20.41|  EN |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-en-fr-Yandex  | 2022 | 32.16  | 29.49 |28.86|   EN   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-en-fr-Helsinki NLP | 2022 | 30.76  | 28.19 |27.57|  EN |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-de-en-Yandex    | 2022 | 41.36  | 38.71 |36.49|   DE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-de-en-Helsinki NLP | 2022 | 40.95  | 38.11 |36.57|  DE |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-de-ru-Yandex    | 2022 | 22.33  | 21.61 |21.07|   DE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-de-fr-Yandex  | 2022 | 31.05  | 28.23 |27.71|   DE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-de-fr-Helsinki NLP | 2022 | 28.32  | 26.21 |25.21|  DE |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-ru-en-Yandex    | 2022 | 44.09  | 39.79 |38.98|   RU   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-ru-en-Helsinki NLP | 2022 | 39.12  | 36.02 |34.63|  RU |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-ru-de-Yandex    | 2022 | 29.20  | 29.88 |27.17|   RU  |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-ru-fr-Yandex  | 2022 | 29.82  | 27.34 |26.62|   RU   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-ru-fr-Helsinki NLP | 2022 | 21.60 | 20.44 |19.72|  RU |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-en-Yandex    | 2022 | 42.11 | 35.04 |36.57|   FR   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-en-Helsinki NLP | 2022 | 42.11 | 35.04 |36.57|  FR |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-de-Yandex    | 2022 | 33.01  | 35.82 |31.01|   FR   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-de-Helsinki NLP | 2022 | 27.74  | 30.56 |25.74|  FR |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-fr-Yandex  | 2022 | 11.58  | 15.74|12.28|   FR   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-fr-fr-Helsinki NLP | 2022 | 0  | 0 |0|  FR |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-en-Yandex    | 2022 | 41.96  | 39.19 |39.30|   LT   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-de-Yandex    | 2022 | 38.94  | 36.60 |37.34|   LT   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-de-Helsinki NLP | 2022 | 45.73  | 39.35 |39.49|  LT |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-ru-Yandex    | 2022 | 17.32  | 17.39 |17.35|   LT   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-ru-Helsinki NLP | 2022 | 14.13  | 15.22 |14.49|  LT |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-fr-Yandex  | 2022 | 33.26  | 28.32 |29.16|   LT   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-lt-fr-Helsinki NLP | 2022 | 30.36  | 26.28 |26.42|  LT |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-en-Yandex    | 2022 | 43.15  | 43.15 |39.17|   UK   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 | QAnswer-uk-en-Helsinki NLP    | 2022 | 43.15  | 43.15 |39.17|  UK |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)|
 |     QAnswer-uk-de-Yandex    | 2022 | 32.67  | 33.01 |30.38|   UK   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-de-Helsinki NLP | 2022 | 31.86  | 30.32 |28.82|  UK |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-ru-Yandex    | 2022 |9.48  | 27.32 |27.13|   UK   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-ru-Helsinki NLP | 2022 | 24.64  | 23.97 |23.19|  UK |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-fr-Yandex  | 2022 | 30.85  | 28.07 |27.27|   UK   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-uk-fr-Helsinki NLP | 2022 | 22.68 | 23.52 |20.76|  UK |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
|     QAnswer-uk-en-Yandex    | 2022 | 43.15  | 43.15 |39.17|   UK   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 | QAnswer-be-en-Helsinki NLP    | 2022 | 43.15  | 43.15 |39.17|  BE |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)|
 |     QAnswer-be-de-Yandex    | 2022 | 32.67  | 33.01 |30.38|   BE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-be-de-Helsinki NLP | 2022 | 31.86  | 30.32 |28.82|  BE |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-be-ru-Yandex    | 2022 |9.48  | 27.32 |27.13|   BE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-be-ru-Helsinki NLP | 2022 | 24.64  | 23.97 |23.19|  BE |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-be-fr-Yandex  | 2022 | 30.85  | 28.07 |27.27|   BE   |        [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 |     QAnswer-be-fr-Helsinki NLP | 2022 | 22.68 | 23.52 |20.76|  BE |   [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940) |
 
 
## QALD-9

Please see the original [paper](http://ceur-ws.org/Vol-2241/paper-06.pdf) for details about the dataset creation process, data format, task and participating systems. 

### Leaderboard

|    Model / System    | Year |Precision|Recall| F1  |Language|                                                                                   Reported by                                                                                    |
|:--------------------:|:----:|:-------:|:----:|:---:|:------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|     LingTeQA [1]     | 2020 |  52.60  |64.20 |53.50|   EN   |                                                     [P. Nhuan et al](https://ieeexplore.ieee.org/abstract/document/9282949)                                                      |
|        qaSQP         | 2019 |  45.80  |47.10 |46.30|   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|        KGQAn         | 2021 |  50.61  |34.67 |41.15|   EN   |                                                             [Omar et al.](http://ceur-ws.org/Vol-2980/paper312.pdf)                                                              |
| Stage-I No Noise [2] | 2021 |  80.40  |42.10 |40.90|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|         QAmp         | 2019 |   25    |  50  | 33  |   EN   |[Vakulenko et. al.](https://dl.acm.org/doi/pdf/10.1145/3357384.3358026?casa_token=X_2SYFDIrd8AAAAA:Z9FcBHNuARtktnurgKswRUvVZx7E1eSdRsXWqVIZej6fJDVTcUGVQ-aqazqiStuQKqAd362eKw3CzQ)|
|     WDAqua-core0     | 2021 |    -    |  -   | 32  |   EN   |                                                              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                               |
|         NSQA         | 2021 |  31.89  |32.05 |31.26|   EN   |                                                    [P.Kapanipathi et alf](https://aclanthology.org/2021.findings-acl.339.pdf)                                                    |
|         DTQA         | 2021 |  31.41  |32.16 |30.88|   EN   |                                                             [Omar et al.](http://ceur-ws.org/Vol-2980/paper312.pdf)                                                              |
|         DTQA         | 2021 |  31.41  |32.16 |30.88|   EN   |                                                    [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                                    |
|         NSQA         | 2021 |  31.40  |32.10 |30.80|   EN   |                                                            [ M. Borroto et al](https://arxiv.org/pdf/2111.03000.pdf)                                                             |
|      sparql-qa       | 2021 |   31    |32.48 |30.60|   EN   |                                                            [ M. Borroto et al](https://arxiv.org/pdf/2111.03000.pdf)                                                             |
|       gAnswer        | 2021 |    -    |  -   | 30  |   EN   |                                                              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                               |
|       gAnswer        | 2021 |  29.34  |32.68 |29.81|   EN   |                                                             [Omar et al.](http://ceur-ws.org/Vol-2980/paper312.pdf)                                                              |
|       gAnswer        | 2021 |  29.34  |32.68 |29.81|   EN   |                                                    [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                                    |
|     gAnswer [3]      | 2021 |  29.30  |32.70 |29.80|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|       gAnswer        | 2021 |  29.30  |32.70 |29.80|   EN   |                                                 [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                                 |
|       gAnswer2       | 2019 |  29.30  |32.70 |29.80|   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|       gAnswer        | 2021 |  60.70  |31.60 |29.60|   EN   |                                               [ L Siciliani et al.](http://www.semantic-web-journal.net/system/files/swj2701.pdf)                                                |
|     WDAqua-core1     | 2019 |   22    |  38  | 28  |   EN   |[Vakulenko et. al.](https://dl.acm.org/doi/pdf/10.1145/3357384.3358026?casa_token=X_2SYFDIrd8AAAAA:Z9FcBHNuARtktnurgKswRUvVZx7E1eSdRsXWqVIZej6fJDVTcUGVQ-aqazqiStuQKqAd362eKw3CzQ)|
|   WDAqua-core1 [4]   | 2021 |  26.10  |26.70 | 25  |   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|     WDAqua-core1     | 2021 |  26.10  |26.70 | 25  |   EN   |                                                 [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                                 |
|     WDAqua-core1     | 2019 |  26.10  |26.70 | 25  |   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|     WDAqua-core1     | 2021 |  26.09  |26.70 |24.99|   EN   |                                                             [Omar et al.](http://ceur-ws.org/Vol-2980/paper312.pdf)                                                              |
|     WDAqua-core1     | 2021 |  26.09  |26.70 |24.99|   EN   |                                                    [Abdelaziz et al.](https://ojs.aaai.org/index.php/AAAI/article/view/17988)                                                    |
|       qaSearch       | 2019 |  23.60  |24.10 |23.70|   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|Stage-II w/o type [5] | 2021 |  59.40  |26.10 |23.30|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
| Stage-II w/ type [6] | 2021 |  59.40  |26.10 |23.30|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|Stage-I Part Noise [7]| 2021 |  63.90  |28.70 |22.40|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|Stage-I Full Noise [8]| 2021 |  82.60  |  23  |20.60|   EN   |                                                            [Purkayastha et al.](https://arxiv.org/pdf/2109.09475.pdf)                                                            |
|       QAnswer        | 2021 |  45.90  |22.20 |19.70|   EN   |                                               [ L Siciliani et al.](http://www.semantic-web-journal.net/system/files/swj2701.pdf)                                                |
|       QASparql       | 2021 |    -    |  -   | 19  |   EN   |                                                              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                               |
|        TeBaQA        | 2021 |  64.40  |14.10 |13.90|   EN   |                                               [ L Siciliani et al.](http://www.semantic-web-journal.net/system/files/swj2701.pdf)                                                |
|        TeBaQA        | 2019 |  12.90  |13.40 | 13  |   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|        TeBaQA        | 2021 |  12.90  |13.40 | 13  |   EN   |                                                                                 Steinmetz et al.                                                                                 |
|       QASystem       | 2021 |  9.70   |11.60 |9.80 |   EN   |                                                 [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                                 |
|       QASystem       | 2019 |  9.70   |11.60 |9.80 |   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|        AskNow        | 2021 |    -    |  -   |  8  |   EN   |                                                              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                               |
|   Qanary(TM+DP+QB)   | 2021 |    -    |  -   |  7  |   EN   |                                                              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                               |
|         Elon         | 2019 |  4.90   | 5.30 |  5  |   EN   |                                                              [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)                                                               |
|         Elon         | 2021 |  4.90   | 5.30 |  5  |   EN   |                                                 [Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)                                                 |

 * [1] DBpedia 2016-10. 
 * [2] DBpedia 2016-10. 
 * [3] DBpedia 2016-10. 
 * [4] DBpedia 2016-10. 
 * [5] DBpedia 2016-10. 
 * [6] DBpedia 2016-10. 
 * [7] DBpedia 2016-10. 
 * [8] DBpedia 2016-10. 

## QALD-8

Please see the original [paper](http://ceur-ws.org/Vol-2241/paper-05.pdf) for details about the dataset creation process, data format, task and participating systems. 

### Leaderboard

| Model / System | Year |Precision|Recall| F1  |Language|                                  Reported by                                   |
|:--------------:|:----:|:-------:|:----:|:---:|:------:|:------------------------------------------------------------------------------:|
|     qaSQP      | 2019 |  45.90  |46.30 |46.10|   EN   |             [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)              |
|    gAnswer2    | 2019 |  38.60  |  39  |38.80|   EN   |             [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)              |
|    gAnswer     | 2021 |  38.62  |39.02 |38.80|   EN   |[Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)|
|  WDAqua-core0  | 2021 |  39.12  |40.65 |38.72|   EN   |[Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)|
|  WDAqua-core0  | 2019 |  39.10  |40.70 |38.70|   EN   |             [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)              |
|  WDAqua-core0  | 2021 |    -    |  -   | 33  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|    QASparql    | 2021 |    -    |  -   | 30  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|    qaSearch    | 2019 |  24.40  |24.40 |24.40|   EN   |             [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)              |
|     AskNow     | 2021 |    -    |  -   | 13  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|    Platypus    | 2021 |    -    |  -   |  6  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|     QAKiS      | 2021 |  6.10   | 5.28 |5.63 |   EN   |[Steinmetz et al.](https://link.springer.com/article/10.1007/s13740-021-00128-9)|
|     QAKiS      | 2019 |  6.10   | 5.30 |5.60 |   EN   |             [Zheng et. al.](https://arxiv.org/pdf/1910.09760.pdf)              |
|Qanary(TM+DP+QB)| 2021 |    -    |  -   |  4  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |


## QALD-7

Please see the original [paper](https://svn.aksw.org/papers/2017/ESWC_2017_QALD/public.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

|        Model / System        | Year |Precision|Recall| F1  |Language|                                  Reported by                                  |
|:----------------------------:|:----:|:-------:|:----:|:---:|:------:|:-----------------------------------------------------------------------------:|
|             LAMA             | 2019 |    -    |  -   |90.50|   EN   |            [Radoev et. al.](https://arxiv.org/pdf/2004.13843.pdf)             |
|         LingTeQA [1]         | 2020 |  63.40  |73.50 |64.20|   EN   |    [D. Nhuan et al](https://ieeexplore.ieee.org/abstract/document/9282949)    |
|         Liang et al.         | 2021 |  81.30  |52.70 |63.90|   EN   |[Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)|
|           gAnswer2           | 2020 |  55.70  |59.20 |55.60|   EN   |            [Athreya et. al](https://arxiv.org/pdf/2004.13843.pdf)             |
|           gAnswer2           | 2021 |  55.70  |59.20 |55.60|   EN   |[Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)|
|         WDAqua-core0         | 2021 |  48.80  |53.50 |51.10|   EN   |[Liang et al.](https://assets.researchsquare.com/files/rs-70794/v1_stamped.pdf)|
|         WDAqua-core0         | 2020 |   49    |  54  | 51  |   EN   |            [Athreya et. al](https://arxiv.org/pdf/2004.13843.pdf)             |
|          TeBaQA RNN          | 2020 |  41.60  |42.30 |41.70|   EN   |            [Athreya et. al](https://arxiv.org/pdf/2004.13843.pdf)             |
|            GSM             | 2022 |  38  |39 |38|   EN   |               [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)             |
|G Maheshwari et. al. Pointwise| 2019 |   28    |  43  | 34  |   EN   |         [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)          |
|            AQG-Net           | 2022 |  30  |37 |33|   EN   |               [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)         |
|            gRGCN             | 2021 |  31.33  |35.41 |30.24|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|         WDAqua-core0         | 2021 |    -    |  -   | 29  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)             |
|G Maheshwari et. al. Pairwise | 2019 |   22    |  38  | 28  |   EN   |         [G Maheshwari et. al.](https://arxiv.org/pdf/1811.01118.pdf)          |
|             gGCN             | 2021 |  23.34  |31.09 |24.37|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|             GGNN             | 2021 |  21.76  |27.51 |21.10|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|          Luo et al.          | 2021 |  21.17  |24.38 |20.16|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|          HR-BiLSTM???         | 2022 |  20  |19 |19|   EN   |               [Liu et al.](https://www2022.thewebconf.org/PaperFiles/77.pdf)           |
|          Yu et al.           | 2021 |  19.72  |21.03 |19.23|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|            STAGG             | 2021 |  19.34  |24.63 |18.61|   EN   |               [Wu et al.](https://arxiv.org/pdf/2101.01510.pdf)               |
|           QASparql           | 2021 |    -    |  -   | 17  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)             |
|            AskNow            | 2021 |    -    |  -   | 15  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)             |
|           Platypus           | 2021 |    -    |  -   |  8  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)             |
|       Qanary(TM+DP+QB)       | 2021 |    -    |  -   |  6  |   EN   |             [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)             |

 * [1] Wikidata. 

## QALD-6

Please see the original [paper](http://qald.aksw.org/6/documents/qald-6.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System |Year|Precision|Recall| F1  |Language|                       Reported by                       |
|:--------------:|:---:|:-------:|:----:|:---:|:------:|:-------------------------------------------------------:|
|    gAnswer     |2017|   70    |  89  | 78  |   EN   |[Hu et al.](https://ieeexplore.ieee.org/document/8085196)|
|    gAnswer     |2021|    -    |  -   | 25  |   EN   |  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)  |
|  WDAqua-core0  |2021|    -    |  -   | 24  |   EN   |  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)  |
|    QASparql    |2021|    -    |  -   | 17  |   EN   |  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)  |
|     AskNow     |2021|    -    |  -   |  9  |   EN   |  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)  |
|Qanary(TM+DP+QB)|2021|    -    |  -   |  2  |   EN   |  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)  |


## QALD-5

Please see the original [paper](http://ceur-ws.org/Vol-1391/173-CR.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System |Year|Precision|Recall|  F1  |Language|                                   Reported by                                   |
|:--------------:|:---:|:-------:|:----:|:----:|:------:|:-------------------------------------------------------------------------------:|
|      Xser      |2020|   74    |  72  |  73  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|      UTQA      |2016|    -    |  -   | 65.2 |   EN   |               [Ben Veyseh](https://aclanthology.org/W16-1403.pdf)               |
|      UTQA      |2020|    -    |  -   |  65  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|      UTQA      |2020|   55    |  53  |  54  |   ES   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|      UTQA      |2020|   53    |  51  |  52  |   FS   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   56    |  41  |  47  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|     AskNow     |2020|   32    |  34  |  33  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|     ISOFT      |2015|   100   | 100  |  33  |   EN   |                                      ISOFT                                      |
|  WDAqua-core1  |2020|   88    |  18  |  30  |   IT   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    QAnswer     |2020|   34    |  26  |  29  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   92    |  16  |  28  |   DE   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   90    |  16  |  28  |   FR   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   88    |  14  |  25  |   ES   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    gAnswer     |2021|    -    |  -   |  20  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|   SemGraphQA   |2020|   19    |  20  |  20  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core0  |2021|    -    |  -   |  18  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|     YodaQA     |2020|   18    |  17  |  18  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    QASparql    |2021|    -    |  -   |  12  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|     AskNow     |2021|    -    |  -   |  9   |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|Qanary(TM+DP+QB)|2021|    -    |  -   |  2   |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |



## QALD-4

Please see the original [paper](http://ceur-ws.org/Vol-1180/CLEF2014wn-QA-UngerEt2014.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System |Year|Precision|Recall| F1  |Language|                                   Reported by                                   |
|:--------------:|:---:|:-------:|:----:|:---:|:------:|:-------------------------------------------------------------------------------:|
| Zhang et. al.  |2016|   89    |  88  | 88  |   EN   |     [Zhang et. al.](https://ojs.aaai.org/index.php/AAAI/article/view/10381)     |
|     POMELO     |2016|   82    |  87  | 85  |   EN   |     [Zhang et. al.](https://ojs.aaai.org/index.php/AAAI/article/view/10381)     |
|      SINA      |2016|   80    |  78  | 79  |   EN   |     [Zhang et. al.](https://ojs.aaai.org/index.php/AAAI/article/view/10381)     |
|      Xser      |2020|   72    |  71  | 72  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   56    |  30  | 39  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    gAnswer     |2020|   37    |  37  | 37  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|     CASIA      |2020|   32    |  40  | 36  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   90    |  20  | 32  |   DE   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   92    |  20  | 32  |   IT   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   90    |  20  | 32  |   ES   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|  WDAqua-core1  |2020|   86    |  18  | 29  |   FR   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|     Intui3     |2020|   23    |  25  | 24  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|     ISOFT      |2020|   21    |  26  | 23  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    Hakimov     |2020|   52    |  13  | 21  |   EN   |[Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)|
|    gAnswer     |2021|    -    |  -   | 16  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|     RO FII     |2016|   16    |  16  | 16  |   EN   |     [Zhang et. al.](https://ojs.aaai.org/index.php/AAAI/article/view/10381)     |
|  WDAqua-core0  |2021|    -    |  -   | 12  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|    QASparql    |2021|    -    |  -   |  8  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|     AskNow     |2021|    -    |  -   |  8  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |
|Qanary(TM+DP+QB)|2021|    -    |  -   |  1  |   EN   |              [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)              |



## QALD-3

Please see the original [paper](http://ceur-ws.org/Vol-1179/CLEF2013wn-QALD3-CabrioEt2013.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System  | Year |Precision|Recall| F1  |Language|                                                                                                              Reported by                                                                                                               |
|:---------------:|:----:|:-------:|:----:|:---:|:------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| virtual player  | 2015 |    -    |  -   |64.29|   EN   |[Molino et al.](https://reader.elsevier.com/reader/sd/pii/S0004370215000259?token=FB393D21799A6B75BDC436414AE01B228DF054D86D53A35C538F9F7B859CBD11103353F39E7530607239E025589F7A18&originRegion=eu-west-1&originCreation=20220102201741)|
| virtual player  | 2015 |    -    |  -   |59.47|   EN   |[Molino et al.](https://reader.elsevier.com/reader/sd/pii/S0004370215000259?token=FB393D21799A6B75BDC436414AE01B228DF054D86D53A35C538F9F7B859CBD11103353F39E7530607239E025589F7A18&originRegion=eu-west-1&originCreation=20220102201741)|
|  WDAqua-core1   | 2020 |   64    |  42  | 51  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|  WDAqua-core1   | 2020 |   79    |  28  | 42  |   DE   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|  WDAqua-core1   | 2020 |   83    |  27  | 41  |   FR   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|     gAnswer     | 2020 |   40    |  40  | 40  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|  WDAqua-core1   | 2020 |   70    |  26  | 38  |   FR   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|   Zhu et al.    | 2020 |   38    |  42  | 38  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|  WDAqua-core1   | 2020 |   77    |  24  | 37  |   ES   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|      CASIA      | 2013 |   35    |  36  | 36  |   EN   |                                                                             [He et al.](http://nlpr-web.ia.ac.cn/cip/~liukang/liukangPageFile/QALD-3.pdf)                                                                              |
|  WDAqua-core1   | 2020 |   79    |  23  | 36  |   IT   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|      CASIA      | 2013 |   35    |  36  | 36  |   EN   |                                                                                [S He et al](http://www.nlpr.ia.ac.cn/cip/shizhuhe/articles/QALD-3.pdf)                                                                                 |
|       RTV       | 2020 |   32    |  34  | 33  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|     Intui2      | 2020 |   32    |  32  | 32  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|      SINA       | 2020 |   32    |  32  | 32  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|   Intui2 [1]    | 2013 |   32    |  32  | 32  |   EN   |                                                                  [Corina Dima](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.666.7844&rep=rep1&type=pdf)                                                                   |
|     DEANNA      | 2020 |   21    |  21  | 21  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|      SWIP       | 2020 |   16    |  17  | 17  |   EN   |                                                                           [Diefenbach et al.](http://www.semantic-web-journal.net/system/files/swj2038.pdf)                                                                            |
|     gAnswer     | 2021 |    -    |  -   | 16  |   EN   |                                                                                         [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                          |
|     AskNow      | 2021 |    -    |  -   | 13  |   EN   |                                                                                         [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                          |
|WDAqua-core0 [2] | 2021 |    -    |  -   | 11  |   EN   |                                                                                         [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                          |
|    QASparql     | 2021 |    -    |  -   |  6  |   EN   |                                                                                         [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                          |
|Qanary(TM+DP+QB) | 2021 |    -    |  -   |  2  |   EN   |                                                                                         [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                          |

 * [1] DBpedia 3.8. 
 * [2] DBpedia 2016-04. 


## QALD-2

Please see the original [paper](https://qald.aksw.org/2/documents/qald-2-challenge.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System |Year|Precision|Recall|  F1  |Language|                                                                                                                                                       Reported by                                                                                                                                                        |
|:--------------:|:---:|:-------:|:----:|:----:|:------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  robustQA [1]  |2013|   68    |  68  |  68  |   EN   |                                                                      [Yahya et al.](https://dl.acm.org/doi/abs/10.1145/2505515.2505677?casa_token=Qq2Vo4VRohsAAAAA:s_GSmXPMLjasepBGBARFWENM9qRQE6pqVY5bnVUMzAV5G0s50-5Igpj1jgwrnnfXEJjX2wTI4wmyzg)                                                                       |
|      BELA      |2012|   73    |  62  |  67  |   EN   |                                                                                                          [Walter et al.](https://download.hrz.tu-darmstadt.de/pub/FB20/Dekanat/Publikationen/UKP/76500354.pdf)                                                                                                           |
|   TLDRet [2]   |2018|   63    |  63  |  63  |   EN   |                                                                                                                    [Rahoman and Ichise](https://link.springer.com/article/10.1007/s10844-017-0483-2)                                                                                                                     |
|   SenseAware   |2013|   51    |  53  |  52  |   EN   |[Elbedweihy et al.](https://www.researchgate.net/profile/Ziqi-Zhang-13/publication/287589278_Using_BabelNet_in_bridging_the_gap_between_natural_language_queries_and_linked_data_concepts/links/5aba9998a6fdcc71647082e0/Using-BabelNet-in-bridging-the-gap-between-natural-language-queries-and-linked-data-concepts.pdf)|
|   semanticQA   |2013|   83    |  32  |  46  |   EN   |                                                                     [Hakimov et al.](https://dl.acm.org/doi/abs/10.1145/2457317.2457331?casa_token=36QssuFGvwYAAAAA:N1avCIXP2n0_cEVCFYRcMkZcQXHmojZSm93T1lJ1OtIkCrMN2pfEkW01mqvUdBHiFZWGyDbzfgbXrg)                                                                      |
|   SemSeK [3]   |2013|   44    |  48  |  46  |   EN   |                                                           [Lopez et al.](https://www.sciencedirect.com/science/article/pii/S157082681300022X?casa_token=NBVj-I48uxAAAAAA:izoYV-LubTYApUYRCtnZFPuvdACyWHHNnwVBjo1S1K24AiXYmMde9vdEBsCxdpAvlfNvPswrzr8#br000150)                                                           |
|   Alexandria   |2013|   43    |  46  |  45  |   EN   |                                                           [Lopez et al.](https://www.sciencedirect.com/science/article/pii/S157082681300022X?casa_token=NBVj-I48uxAAAAAA:izoYV-LubTYApUYRCtnZFPuvdACyWHHNnwVBjo1S1K24AiXYmMde9vdEBsCxdpAvlfNvPswrzr8#br000150)                                                           |
|     QAKiS      |2013|   39    |  37  |  38  |   EN   |                                                                                                                                   [Cabrio et al.](https://hal.inria.fr/hal-01171115/)                                                                                                                                    |
|      MHE       |2013|   36    |  40  |  38  |   EN   |                                                           [Lopez et al.](https://www.sciencedirect.com/science/article/pii/S157082681300022X?casa_token=NBVj-I48uxAAAAAA:izoYV-LubTYApUYRCtnZFPuvdACyWHHNnwVBjo1S1K24AiXYmMde9vdEBsCxdpAvlfNvPswrzr8#br000150)                                                           |
|     QAKiS      |2013|   39    |  37  |  38  |   EN   |                                                           [Lopez et al.](https://www.sciencedirect.com/science/article/pii/S157082681300022X?casa_token=NBVj-I48uxAAAAAA:izoYV-LubTYApUYRCtnZFPuvdACyWHHNnwVBjo1S1K24AiXYmMde9vdEBsCxdpAvlfNvPswrzr8#br000150)                                                           |
|  WolframAlpha  |2012|   32    |  30  | 30.9 |   EN   |                                                                                                          [Walter et al.](https://download.hrz.tu-darmstadt.de/pub/FB20/Dekanat/Publikationen/UKP/76500354.pdf)                                                                                                           |
|  robustQA [4]  |2013|   50    |  15  |  23  |   EN   |                                                                      [Yahya et al.](https://dl.acm.org/doi/abs/10.1145/2505515.2505677?casa_token=Qq2Vo4VRohsAAAAA:s_GSmXPMLjasepBGBARFWENM9qRQE6pqVY5bnVUMzAV5G0s50-5Igpj1jgwrnnfXEJjX2wTI4wmyzg)                                                                       |
|    gAnswer     |2021|    -    |  -   |  21  |   EN   |                                                                                                                                  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                                                                   |
|  WDAqua-core0  |2021|    -    |  -   |  16  |   EN   |                                                                                                                                  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                                                                   |
|     AskNow     |2021|    -    |  -   |  10  |   EN   |                                                                                                                                  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                                                                   |
|    QASparql    |2021|    -    |  -   |  1   |   EN   |                                                                                                                                  [Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)                                                                                                                                   |

 * [1] factoid type questions. 
 * [2] only temporal quetions. 
 * [3] DBpedia 3.7. 
 * [4] list type questions. 


## QALD-1

Please see the original [paper](http://qald.aksw.org/1/documents/qald-1-challenge.pdf) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

| Model / System | Year |Precision|Recall|F1 |Language|                     Reported by                     |
|:--------------:|:----:|:-------:|:----:|:---:|:------:|:---------------------------------------------------:|
|   FREyA [1]    | 2013 |   63    |  54  |58 |   EN   |[Lopez et al.](https://arxiv.org/pdf/2105.00811.pdf) |
|   PowerAqua    | 2013 |   52    |  48  |50 |   En   |[Lopez et al.](https://arxiv.org/pdf/2105.00811.pdf) |
|    gAnswer     | 2021 |    -    |  -   |24 |   EN   |[Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)|
|  WDAqua-core0  | 2021 |    -    |  -   |14 |   EN   |[Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)|
|     AskNow     | 2021 |    -    |  -   | 7 |   EN   |[Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)|
|    QASparql    | 2021 |    -    |  -   | 1 |   EN   |[Orogat et al.](https://arxiv.org/pdf/2105.00811.pdf)|

 * [1] DBpedia 3.6. 


[Go back to the README](../README.md)
